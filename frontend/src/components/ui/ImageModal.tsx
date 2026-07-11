import { motion, AnimatePresence } from "framer-motion";
import { X, ImageOff } from "lucide-react";
import type { GalleryItem } from "../../types";

interface ImageModalProps {
  item: GalleryItem | null;
  onClose: () => void;
}

export default function ImageModal({ item, onClose }: ImageModalProps) {
  return (
    <AnimatePresence>
      {item && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={onClose}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute right-4 top-4 z-10 cursor-pointer rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Image */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="relative max-h-[85vh] max-w-4xl overflow-hidden rounded-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {item.src ? (
              <img
                src={item.src}
                alt={item.alt}
                className="max-h-[85vh] w-auto object-contain"
              />
            ) : (
              <div className="flex h-[50vh] w-[70vw] max-w-3xl items-center justify-center rounded-2xl bg-gray-light">
                <div className="text-center">
                  <ImageOff className="mx-auto h-16 w-16 text-gray" />
                  <p className="mt-3 text-gray">Gambar belum tersedia</p>
                </div>
              </div>
            )}

            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
              <p className="text-sm font-medium text-white">{item.alt}</p>
              <span className="mt-1 text-xs text-white/70">{item.category}</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
