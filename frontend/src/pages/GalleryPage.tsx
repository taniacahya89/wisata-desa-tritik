import { useState, useEffect } from "react";
import SectionTitle from "../components/ui/SectionTitle";
import GalleryCard from "../components/ui/GalleryCard";
import ImageModal from "../components/ui/ImageModal";
import Loading from "../components/ui/Loading";
import EmptyState from "../components/ui/EmptyState";
import { DUMMY_GALLERY } from "../data/dummy";
import { getGalleryData, getGalleryCategories } from "../services/gallery.service";
import type { GalleryItem } from "../types";

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [gallery, setGallery] = useState<GalleryItem[] | null>(null);
  const [loading, setLoading] = useState(true);

  const categories = getGalleryCategories();

  useEffect(() => {
    getGalleryData()
      .then((res) => {
        setGallery(res);
        setLoading(false);
      })
      .catch((err) => {
        console.warn("Gallery API offline, using local data fallback:", err);
        setGallery(DUMMY_GALLERY);
        setLoading(false);
      });
  }, []);

  if (loading || !gallery) {
    return <Loading />;
  }

  const filteredGallery =
    activeCategory === "Semua"
      ? gallery
      : gallery.filter((item) => item.category === activeCategory);

  return (
    <div className="pt-24 pb-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle
          title="Galeri"
          subtitle="Lihat berbagai dokumentasi foto dan video yang memperlihatkan situs purbakala, Site Museum Tritik, serta aktivitas wisata di Desa Tritik."
        />

        {/* Category Filter */}
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`cursor-pointer rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                activeCategory === category
                  ? "bg-olive text-white"
                  : "bg-white text-gray hover:bg-cream-dark hover:text-dark"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        {filteredGallery.length > 0 ? (
          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {filteredGallery.map((item) => (
              <GalleryCard
                key={item.id}
                item={item}
                onClick={setSelectedImage}
              />
            ))}
          </div>
        ) : (
          <EmptyState
            message="Foto tidak ditemukan"
            description={`Belum ada foto untuk kategori "${activeCategory}".`}
          />
        )}
      </div>

      {/* Image Modal */}
      <ImageModal
        item={selectedImage}
        onClose={() => setSelectedImage(null)}
      />
    </div>
  );
}
