"use client";

import { motion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";

type Props = HTMLMotionProps<"div"> & {
  /** Delay in seconds */
  delay?: number;
  /** Slide direction */
  direction?: "up" | "down" | "left" | "right" | "none";
  /** Distance in px */
  distance?: number;
  /** Duration in seconds */
  duration?: number;
};

const dirMap = {
  up: { y: 1 },
  down: { y: -1 },
  left: { x: 1 },
  right: { x: -1 },
  none: { x: 0, y: 0 },
} as const;

/**
 * Scroll-triggered fade-in with optional directional slide.
 * Respects prefers-reduced-motion via Framer's built-in support.
 */
export default function FadeIn({
  delay = 0,
  direction = "up",
  distance = 24,
  duration = 0.5,
  children,
  ...rest
}: Props) {
  const dir = dirMap[direction];
  const offset = {
    x: "x" in dir ? dir.x * distance : 0,
    y: "y" in dir ? dir.y * distance : 0,
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: offset.x, y: offset.y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
