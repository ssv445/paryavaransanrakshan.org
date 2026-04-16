"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  /** Delay between each child in seconds */
  stagger?: number;
};

/**
 * Staggers the appearance of children with a cascading delay.
 * Wrap around a list of FadeIn items or plain elements.
 */
export default function StaggerChildren({
  children,
  className,
  stagger = 0.08,
}: Props) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={{
        visible: { transition: { staggerChildren: stagger } },
      }}
    >
      {children}
    </motion.div>
  );
}

export const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
  },
};
