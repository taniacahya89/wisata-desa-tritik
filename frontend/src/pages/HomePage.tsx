import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Landmark, GraduationCap, Trees, ArrowRight, Clock } from "lucide-react";
import SectionTitle from "../components/ui/SectionTitle";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import MapComponent from "../components/ui/MapComponent";
import Loading from "../components/ui/Loading";
import { SITE_DESCRIPTION, OPERATING_HOURS, SITE_NAME } from "../constants/siteInfo";
import { ROUTES } from "../constants/routes";
import { DUMMY_ATTRACTIONS } from "../data/dummy";
import { getHomeData } from "../services/home.service";
import type { HomeDataResponse } from "../services/home.service";

const iconMap: Record<string, React.ReactNode> = {
  landmark: <Landmark className="h-8 w-8" />,
  "graduation-cap": <GraduationCap className="h-8 w-8" />,
  trees: <Trees className="h-8 w-8" />,
};

export default function HomePage() {
  const [data, setData] = useState<HomeDataResponse | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getHomeData()
      .then((res) => {
        setData(res);
        setLoading(false);
      })
      .catch((err) => {
        console.warn("Home API offline, using local data fallback:", err);
        setData({
          description: SITE_DESCRIPTION,
          attractions: DUMMY_ATTRACTIONS,
          operatingHours: OPERATING_HOURS,
        });
        setLoading(false);
      });
  }, []);

  if (loading || !data) {
    return <Loading />;
  }

  return (
    <>
      {/* ========== HERO ========== */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="/assets/hero-bg.png"
            alt="Pemandangan Desa Tritik"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />
        </div>

        {/* Content */}
        <div className="relative z-10 px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-4 text-4xl font-bold leading-tight text-white md:text-6xl lg:text-7xl"
          >
            Jelajahi Warisan
            <br />
            Purbakala
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mb-8 text-lg text-white/80 md:text-xl"
          >
            Desa Tritik, Rejoso, Nganjuk
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <Link to={ROUTES.SITE}>
              <Button variant="primary" size="lg">
                Mulai Jelajahi
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="h-10 w-6 rounded-full border-2 border-white/40 p-1">
            <div className="h-2 w-full rounded-full bg-white/60" />
          </div>
        </motion.div>
      </section>

      {/* ========== TENTANG DESA ========== */}
      <section className="bg-cream py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6 text-center">
          {/* Decorative heading */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-8 flex items-center justify-center gap-4"
          >
            <div className="h-px w-12 bg-olive/30" />
            <h2 className="font-serif text-3xl italic text-olive md:text-4xl">
              {SITE_NAME.replace("Desa Wisata ", "")}
            </h2>
            <div className="h-px w-12 bg-olive/30" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-6 text-base leading-relaxed text-gray md:text-lg"
          >
            {data.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link
              to={ROUTES.SITE}
              className="inline-flex items-center gap-1 text-sm font-semibold text-olive transition-colors hover:text-olive-dark"
            >
              Baca Selengkapnya
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ========== DAYA TARIK DESA ========== */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <SectionTitle
            title="Daya Tarik Desa Tritik"
            subtitle="Temukan kekayaan warisan megalitik, keindahan Perbukitan Kendeng, dan pengalaman wisata edukatif yang menjadikan setiap kunjungan lebih bermakna."
          />

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {data.attractions.map((item, index) => (
              <Card key={index} className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-cream text-olive">
                  {iconMap[item.icon] || <Landmark className="h-8 w-8" />}
                </div>
                <h3 className="mb-2 text-xl font-bold text-dark">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray">
                  {item.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ========== PREVIEW FOTO ========== */}
      <section className="bg-cream py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <SectionTitle
            title="Foto Wisata"
            subtitle="Sekilas pemandangan dan suasana Desa Wisata Tritik."
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-12 grid gap-4 md:grid-cols-3"
          >
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className={`flex items-center justify-center overflow-hidden rounded-2xl bg-gray-light ${
                  i === 1 ? "md:col-span-2 md:row-span-2" : ""
                }`}
              >
                <div
                  className={`flex w-full items-center justify-center text-gray ${
                    i === 1 ? "aspect-square md:aspect-auto md:h-full" : "aspect-[4/3]"
                  }`}
                >
                  <span className="text-sm">Foto {i}</span>
                </div>
              </div>
            ))}
          </motion.div>

          <div className="mt-8 text-center">
            <Link to={ROUTES.GALLERY}>
              <Button variant="outline">
                Lihat Semua Foto
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ========== PLAN YOUR VISIT ========== */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <SectionTitle
            title="Plan Your Visit"
            subtitle="Temukan informasi lokasi, jam operasional, dan kontak sebelum merencanakan kunjungan Anda."
          />

          <div className="mt-12 grid items-start gap-10 md:grid-cols-2">
            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <MapComponent height="350px" zoom={14} />
            </motion.div>

            {/* Operating hours */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="mb-6 flex items-center gap-2 text-xl font-bold text-dark">
                <Clock className="h-5 w-5 text-olive" />
                Jam Operasional
              </h3>

              <div className="space-y-0">
                {data.operatingHours.map((item, index) => (
                  <div key={index} className="relative flex gap-4 pb-8 last:pb-0">
                    {/* Timeline dot & line */}
                    <div className="flex flex-col items-center">
                      <div
                        className={`h-3 w-3 rounded-full border-2 ${
                          item.isClosed
                            ? "border-red-400 bg-red-100"
                            : "border-olive bg-olive"
                        }`}
                      />
                      {index < data.operatingHours.length - 1 && (
                        <div className="w-px flex-1 bg-olive/20" />
                      )}
                    </div>

                    {/* Content */}
                    <div className="-mt-0.5">
                      <p className="text-sm text-gray">{item.days}</p>
                      <p
                        className={`text-2xl font-bold ${
                          item.isClosed ? "text-red-500" : "text-dark"
                        }`}
                      >
                        {item.hours === "Tutup" ? "LIBUR" : item.hours}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Link to={ROUTES.VISIT}>
                  <Button variant="primary">
                    Info Kunjungan Lengkap
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
