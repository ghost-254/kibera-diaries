"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type MotionSectionProps = {
  as?: "div" | "section";
  id?: string;
  className?: string;
  children: ReactNode;
};

export function MotionSection({ as = "section", id, className, children }: MotionSectionProps) {
  const Component = as === "div" ? motion.div : motion.section;

  return (
    <Component
      id={id}
      className={cn(className)}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Component>
  );
}
