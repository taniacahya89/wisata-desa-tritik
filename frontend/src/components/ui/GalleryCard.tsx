import { motion } from "framer-motion";
import { ImageOff } from "lucide-react";
import type { GalleryItem } from "../../types";

interface GalleryCardProps {
  item: GalleryItem;
  onClick: (item: GalleryItem) => void;
}

export default function GalleryCard({ item, onClick }: GalleryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-30px" }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      onClick={() => onClick(item)}
      className="group relative cursor-pointer overflow-hidden rounded-2xl bg-gray-light"
    >
      {item.src ? (
        <img
          src={item.src}
          alt={item.alt}
          className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      ) : (
        <div className="flex aspect-[4/3] w-full items-center justify-center bg-gray-light">
          <ImageOff className="h-10 w-10 text-gray" />
        </div>
      )}

      {/* Hover overlay */}
      <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="p-4">
          <p className="text-sm font-medium text-white">{item.alt}</p>
          <span className="mt-1 inline-block rounded-full bg-white/20 px-2 py-0.5 text-xs text-white/90 backdrop-blur-sm">
            {item.category}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
