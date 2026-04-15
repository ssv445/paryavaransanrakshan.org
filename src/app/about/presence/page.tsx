import type { Metadata } from "next";
import PagePlaceholder from "@/components/PagePlaceholder";

export const metadata: Metadata = {
  title: "Our Presence",
  description: "Regions and communities where Paryavaran Sanrakshan is active.",
};

export default function PresencePage() {
  return (
    <PagePlaceholder
      title="Our Presence"
      description="Where we are active across India."
    />
  );
}
