"use client";

import { MessageCircle, Share2 } from "lucide-react";

type Props = {
  imageSrc: string;
  title: string;
};

function absoluteUrl(path: string) {
  if (path.startsWith("http")) return path;
  return `${window.location.origin}${path}`;
}

export default function WhatsAppImageShare({ imageSrc, title }: Props) {
  async function shareImage() {
    const imageUrl = absoluteUrl(imageSrc);
    const text = `${title}\n${imageUrl}`;

    try {
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const extension = blob.type.split("/")[1] || "jpeg";
      const file = new File([blob], `${title}.${extension}`, { type: blob.type });
      const shareData = { title, text, files: [file] };

      if (navigator.canShare?.(shareData)) {
        await navigator.share(shareData);
        return;
      }

      if (navigator.share) {
        await navigator.share({ title, text, url: imageUrl });
        return;
      }
    } catch {
      // Fall through to WhatsApp URL sharing below.
    }

    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
  }

  return (
    <button
      type="button"
      onClick={shareImage}
      className="inline-flex items-center gap-2 rounded-full bg-vana px-3 py-2 text-sm font-semibold text-cream-fixed shadow-sm transition-colors hover:bg-vana-dark"
      aria-label={`Share ${title} image on WhatsApp`}
    >
      <MessageCircle className="h-4 w-4" aria-hidden />
      <span className="hidden sm:inline">WhatsApp</span>
      <Share2 className="h-3.5 w-3.5" aria-hidden />
    </button>
  );
}
