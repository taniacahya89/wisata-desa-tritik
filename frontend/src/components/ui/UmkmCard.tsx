import { motion } from "framer-motion";
import { MapPin, Phone, ImageOff } from "lucide-react";
import type { Umkm } from "../../types";

interface UmkmCardProps {
  item: Umkm;
}

export default function UmkmCard({ item }: UmkmCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className="group overflow-hidden rounded-2xl bg-white shadow-sm"
    >
      {/* Image */}
      {item.image ? (
        <img
          src={item.image}
          alt={item.name}
          className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      ) : (
        <div className="flex aspect-[4/3] w-full items-center justify-center bg-gray-light">
          <ImageOff className="h-10 w-10 text-gray" />
        </div>
      )}

      {/* Content */}
      <div className="p-5">
        {/* Category badge */}
        <span className="mb-2 inline-block rounded-full bg-cream px-3 py-1 text-xs font-medium text-olive">
          {item.category}
        </span>

        <h3 className="mb-2 text-lg font-bold text-dark">{item.name}</h3>

        <p className="mb-4 line-clamp-2 text-sm leading-relaxed text-gray">
          {item.description}
        </p>

        {/* Info */}
        <div className="space-y-2 text-sm text-gray">
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 shrink-0 text-olive" />
            <span>{item.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4 shrink-0 text-olive" />
            <span>{item.contact}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
