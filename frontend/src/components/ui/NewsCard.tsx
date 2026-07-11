import { motion } from "framer-motion";
import { Calendar, Tag, ImageOff } from "lucide-react";
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
      className="group cursor-pointer overflow-hidden rounded-2xl bg-white shadow-sm"
    >
      {/* Thumbnail */}
      {item.thumbnail ? (
        <img
          src={item.thumbnail}
          alt={item.title}
          className="aspect-[16/9] w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      ) : (
        <div className="flex aspect-[16/9] w-full items-center justify-center bg-gray-light">
          <ImageOff className="h-10 w-10 text-gray" />
        </div>
      )}

      {/* Content */}
      <div className="p-5">
        {/* Meta */}
        <div className="mb-3 flex items-center gap-4 text-sm text-gray">
          <span className="inline-flex items-center gap-1">
            <Calendar className="h-3.5 w-3.5" />
            {new Date(item.date).toLocaleDateString("id-ID", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </span>
          <span className="inline-flex items-center gap-1">
            <Tag className="h-3.5 w-3.5" />
            {item.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="mb-2 text-lg font-bold leading-tight text-dark transition-colors group-hover:text-olive">
          {item.title}
        </h3>

        {/* Excerpt */}
        <p className="line-clamp-2 text-sm leading-relaxed text-gray">
          {item.excerpt}
        </p>
      </div>
    </motion.article>
  );
}
