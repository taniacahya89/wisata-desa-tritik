import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SectionTitle from "../components/ui/SectionTitle";
import NewsCard from "../components/ui/NewsCard";
import Loading from "../components/ui/Loading";
import EmptyState from "../components/ui/EmptyState";
import { DUMMY_NEWS } from "../data/dummy";
import { getNewsData } from "../services/news.service";
import type { News } from "../types";

const ITEMS_PER_PAGE = 4;

export default function NewsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [news, setNews] = useState<News[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getNewsData()
      .then((res) => {
        setNews(res);
        setLoading(false);
      })
      .catch((err) => {
        console.warn("News API offline, using local data fallback:", err);
        setNews(DUMMY_NEWS);
        setLoading(false);
      });
  }, []);

  if (loading || !news) {
    return <Loading />;
  }

  const totalPages = Math.ceil(news.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedNews = news.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  return (
    <div className="pt-24 pb-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle
          title="Berita"
          subtitle="Informasi terbaru seputar kegiatan, event, dan perkembangan di Desa Wisata Tritik."
        />

        {/* News Grid */}
        {paginatedNews.length > 0 ? (
          <>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {paginatedNews.map((item) => (
                <NewsCard key={item.id} item={item} />
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-12 flex items-center justify-center gap-2">
                <button
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white text-dark shadow-sm transition-colors hover:bg-cream disabled:cursor-not-allowed disabled:opacity-40"
                  aria-label="Halaman sebelumnya"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`flex h-10 w-10 cursor-pointer items-center justify-center rounded-full text-sm font-medium transition-colors ${
                      currentPage === page
                        ? "bg-olive text-white"
                        : "bg-white text-dark shadow-sm hover:bg-cream"
                    }`}
                  >
                    {page}
                  </button>
                ))}

                <button
                  onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                  className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white text-dark shadow-sm transition-colors hover:bg-cream disabled:cursor-not-allowed disabled:opacity-40"
                  aria-label="Halaman selanjutnya"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            )}
          </>
        ) : (
          <EmptyState
            message="Belum ada berita"
            description="Berita dan pengumuman terbaru akan dipublikasikan di sini."
          />
        )}
      </div>
    </div>
  );
}
