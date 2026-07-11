import { motion } from "framer-motion";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionTitle({
  title,
  subtitle,
  centered = true,
  light = false,
}: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className={`mb-10 ${centered ? "text-center" : "text-left"}`}
    >
      <h2
        className={`text-3xl font-bold tracking-tight md:text-4xl ${
          light ? "text-white" : "text-dark"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-3 max-w-2xl text-base leading-relaxed md:text-lg ${
            centered ? "mx-auto" : ""
          } ${light ? "text-white/80" : "text-gray"}`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
