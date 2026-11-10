import { useState, useEffect } from "react";
import SectionTitle from "../components/ui/SectionTitle";
import GalleryCard from "../components/ui/GalleryCard";
import ImageModal from "../components/ui/ImageModal";
import Loading from "../components/ui/Loading";
import EmptyState from "../components/ui/EmptyState";
import { DUMMY_GALLERY } from "../data/dummy";
import { getGalleryData } from "../services/gallery.service";
import type { GalleryItem } from "../types";

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [gallery, setGallery] = useState<GalleryItem[] | null>(null);
  const [loading, setLoading] = useState(true);

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

  return (
    <div className="pt-24 pb-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle
          title="Galeri"
          subtitle="Lihat berbagai dokumentasi foto dan video yang memperlihatkan situs purbakala, Site Museum Tritik, serta aktivitas wisata di Desa Tritik."
        />

        {/* Gallery Grid */}
        {gallery.length > 0 ? (
          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {gallery.map((item) => (
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
            description="Belum ada foto di galeri."
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
