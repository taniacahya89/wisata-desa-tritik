import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({
  children,
  className = "",
  hover = true,
}: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      whileHover={hover ? { y: -4 } : undefined}
      transition={{ duration: 0.3 }}
      className={`rounded-2xl bg-white p-6 shadow-sm ${className}`}
    >
      {children}
    </motion.div>
  );
}
