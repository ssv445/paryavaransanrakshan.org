"use client";

import { useRef, type ComponentType, type SVGProps } from "react";

type Props = {
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  className?: string;
  /** Stroke-draw duration (s). Default 1.4 */
  duration?: number;
};

/**
 * Wraps a Warli icon with a stroke-draw CSS animation that plays once
 * when the icon scrolls into view. Dot-leaves (circles with fill) fade in
 * after the strokes settle. Respects prefers-reduced-motion.
 *
 * Pattern mirrors AnimatedMadhubaniHero — DOM classList toggle from an
 * IntersectionObserver callback-ref, no React state.
 */
export default function AnimatedWarli({ Icon, className, duration = 1.4 }: Props) {
  const observerRef = useRef<IntersectionObserver | null>(null);

  const callbackRef = (node: HTMLSpanElement | null) => {
    if (observerRef.current) {
      observerRef.current.disconnect();
      observerRef.current = null;
    }
    if (!node) return;

    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
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
      { threshold: 0.3 }
    );
    observerRef.current.observe(node);
  };

  return (
    <span ref={callbackRef} className={`warli-draw inline-block ${className ?? ""}`}>
      <style>{`
        .warli-draw svg path,
        .warli-draw svg line,
        .warli-draw svg polygon,
        .warli-draw svg polyline {
          stroke-dasharray: 200;
          stroke-dashoffset: 200;
        }
        .warli-draw svg circle[fill="currentColor"],
        .warli-draw svg circle[fill]:not([fill="none"]) {
          opacity: 0;
        }
        .warli-draw.animate svg path,
        .warli-draw.animate svg line,
        .warli-draw.animate svg polygon,
        .warli-draw.animate svg polyline {
          animation: warli-stroke ${duration}s ease-out forwards;
        }
        .warli-draw.animate svg circle[fill="currentColor"],
        .warli-draw.animate svg circle[fill]:not([fill="none"]) {
          animation: warli-dot 0.3s ease-out ${duration * 0.8}s forwards;
        }
        @keyframes warli-stroke { to { stroke-dashoffset: 0; } }
        @keyframes warli-dot    { to { opacity: 1; } }

        @media (prefers-reduced-motion: reduce) {
          .warli-draw svg path,
          .warli-draw svg line,
          .warli-draw svg polygon,
          .warli-draw svg polyline {
            stroke-dasharray: none !important;
            stroke-dashoffset: 0 !important;
            animation: none !important;
          }
          .warli-draw svg circle { opacity: 1 !important; animation: none !important; }
        }
      `}</style>
      <Icon className="h-full w-full" />
    </span>
  );
}
