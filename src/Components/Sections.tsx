import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
}

function SectionComponent({
  id,
  children,
  className = "",
}: SectionProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.7,
        ease: "easeOut",
      }}
      className={`relative overflow-hidden px-6 py-24 md:px-10 md:py-32 ${className}`}
    >
      {/* Decorative background */}
      <div className="pointer-events-none absolute -right-32 top-20 h-72 w-72 rounded-full bg-amber-100/40 blur-3xl" />

      <div className="pointer-events-none absolute -left-32 bottom-10 h-72 w-72 rounded-full bg-slate-100/50 blur-3xl" />

      {/* Content */}
      <div className="relative mx-auto max-w-7xl">
        {children}
      </div>
    </motion.section>
  );
}

export default SectionComponent;