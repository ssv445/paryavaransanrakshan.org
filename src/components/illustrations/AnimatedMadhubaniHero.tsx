"use client";

import { useRef } from "react";
import MadhubaniHero from "./MadhubaniHero";

type Props = {
  className?: string;
};

/**
 * Wraps the MadhubaniHero SVG with a stroke-draw CSS animation.
 * Uses IntersectionObserver to trigger once visible,
 * with direct DOM mutation to avoid cascading setState in effects.
 * Respects prefers-reduced-motion.
 */
export default function AnimatedMadhubaniHero({ className }: Props) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const callbackRef = (node: HTMLDivElement | null) => {
    // Cleanup previous observer
    if (observerRef.current) {
      observerRef.current.disconnect();
      observerRef.current = null;
    }

    if (!node) return;

    // Skip animation for reduced motion
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      node.classList.add("animate");
      return;
    }

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add("animate");
          observerRef.current?.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observerRef.current.observe(node);
  };

  return (
    <div ref={wrapperRef} className={className}>
      <style>{`
        .madhubani-draw svg path,
        .madhubani-draw svg line,
        .madhubani-draw svg rect:not([fill="url(#kolam)"]),
        .madhubani-draw svg polygon,
        .madhubani-draw svg ellipse {
          stroke-dasharray: 800;
          stroke-dashoffset: 800;
          transition: none;
        }

        .madhubani-draw svg circle {
          opacity: 0;
          transition: none;
        }

        .madhubani-draw.animate svg path,
        .madhubani-draw.animate svg line,
        .madhubani-draw.animate svg rect:not([fill="url(#kolam)"]),
        .madhubani-draw.animate svg polygon,
        .madhubani-draw.animate svg ellipse {
          animation: madhubani-stroke 2.5s ease-out forwards;
        }

        .madhubani-draw.animate svg circle {
          animation: madhubani-dot 0.4s ease-out 2s forwards;
        }

        .madhubani-draw.animate svg > rect { animation-delay: 0s; }
        .madhubani-draw.animate svg > g:nth-child(2) path,
        .madhubani-draw.animate svg > g:nth-child(2) line,
        .madhubani-draw.animate svg > g:nth-child(2) circle { animation-delay: 0.2s; }
        .madhubani-draw.animate svg > g:nth-child(3) path,
        .madhubani-draw.animate svg > g:nth-child(3) circle { animation-delay: 0.4s; }
        .madhubani-draw.animate svg > g:nth-child(4) path,
        .madhubani-draw.animate svg > g:nth-child(4) line,
        .madhubani-draw.animate svg > g:nth-child(4) circle { animation-delay: 0.3s; }

        @keyframes madhubani-stroke {
          to { stroke-dashoffset: 0; }
        }
        @keyframes madhubani-dot {
          to { opacity: 1; }
        }

        @media (prefers-reduced-motion: reduce) {
          .madhubani-draw svg path,
          .madhubani-draw svg line,
          .madhubani-draw svg rect,
          .madhubani-draw svg polygon,
          .madhubani-draw svg ellipse {
            stroke-dasharray: none !important;
            stroke-dashoffset: 0 !important;
            animation: none !important;
          }
          .madhubani-draw svg circle {
            opacity: 1 !important;
            animation: none !important;
          }
        }
      `}</style>
      <div ref={callbackRef} className="madhubani-draw">
        <MadhubaniHero className="h-auto w-full" />
      </div>
    </div>
  );
}
