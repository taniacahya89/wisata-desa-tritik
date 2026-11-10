import { motion } from "framer-motion";
import { Tag, ExternalLink } from "lucide-react";
import type { News } from "../../types";

interface NewsCardProps {
  item: News;
}

export default function NewsCard({ item }: NewsCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className="group overflow-hidden rounded-2xl bg-white p-6 shadow-sm"
    >
      {/* Meta */}
      <div className="mb-3 flex items-center gap-4 text-sm text-gray">
        {item.period && item.period !== "(tidak disebutkan)" && (
          <span>{item.period}</span>
        )}
        <span className="inline-flex items-center gap-1">
          <Tag className="h-3.5 w-3.5" />
          {item.category}
        </span>
      </div>

      {/* Title */}
      <h3 className="mb-3 text-xl font-bold leading-tight text-dark transition-colors group-hover:text-olive">
        {item.title}
      </h3>

      {/* Excerpt */}
      <p className="mb-4 text-sm leading-relaxed text-gray">
        {item.excerpt}
      </p>

      {/* Source */}
      {item.source && (
        <p className="mb-3 text-xs text-gray">
          Sumber: {item.source}
        </p>
      )}

      {/* Read More Link */}
      {item.url && (
        <a
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-sm font-semibold text-olive transition-colors hover:text-olive-dark"
        >
          Baca selengkapnya
          <ExternalLink className="h-4 w-4" />
        </a>
      )}
    </motion.article>
  );
}
