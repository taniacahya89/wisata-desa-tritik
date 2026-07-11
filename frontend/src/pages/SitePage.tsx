import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ImageOff } from "lucide-react";
import SectionTitle from "../components/ui/SectionTitle";
import Timeline from "../components/ui/Timeline";
import MapComponent from "../components/ui/MapComponent";
import Card from "../components/ui/Card";
import Loading from "../components/ui/Loading";
import { DUMMY_TIMELINE, DUMMY_GALLERY } from "../data/dummy";
import { getSiteData } from "../services/site.service";
import type { SiteDataResponse } from "../types";

export default function SitePage() {
  const [data, setData] = useState<SiteDataResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const siteGallery = DUMMY_GALLERY.slice(0, 6);

  useEffect(() => {
    getSiteData()
      .then((res) => {
        setData(res);
        setLoading(false);
      })
      .catch((err) => {
        console.warn("Site API offline, using local data fallback:", err);
        setData({
          title: "Situs Purbakala Tritik",
          description:
            "Situs Purbakala Tritik merupakan salah satu situs megalitik yang terletak di kawasan Perbukitan Kendeng, Desa Tritik, Kecamatan Rejoso, Kabupaten Nganjuk.",
          history:
            "Situs ini menyimpan berbagai peninggalan bersejarah termasuk fosil purba dan artefak megalitik yang menjadi bukti peradaban manusia purba di Jawa Timur. Site Museum Tritik didirikan untuk melestarikan dan memamerkan temuan-temuan arkeologi dari kawasan ini kepada masyarakat umum sebagai sarana edukasi dan pelestarian budaya.",
          timeline: DUMMY_TIMELINE,
        });
        setLoading(false);
      });
  }, []);

  if (loading || !data) {
    return <Loading />;
  }

  return (
    <div className="pt-24 pb-20">
      {/* ========== TENTANG SITUS ========== */}
      <section className="mx-auto max-w-6xl px-6">
        <SectionTitle
          title={data.title}
          subtitle="Mengenal warisan budaya megalitik di kawasan Perbukitan Kendeng yang menjadi saksi peradaban kuno Nusantara."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mt-10 max-w-3xl"
        >
          <Card hover={false}>
            <h3 className="mb-3 text-xl font-bold text-dark">Tentang Situs</h3>
            <p className="text-sm leading-relaxed text-gray">
              {data.description}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-gray">
              {data.history}
            </p>
          </Card>
        </motion.div>
      </section>

      {/* ========== SEJARAH (TIMELINE) ========== */}
      <section className="mt-20 bg-white py-20">
        <div className="mx-auto max-w-4xl px-6">
          <SectionTitle
            title="Sejarah"
            subtitle="Perjalanan situs purbakala Tritik dari penemuan hingga menjadi desa wisata."
          />

          <div className="mt-12">
            <Timeline events={data.timeline} />
          </div>
        </div>
      </section>

      {/* ========== NILAI BUDAYA ========== */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <SectionTitle
            title="Nilai Budaya"
            subtitle="Nilai-nilai luhur yang terkandung dalam peninggalan megalitik Desa Tritik."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Pelestarian Sejarah",
                description:
                  "Menjaga dan melestarikan peninggalan bersejarah sebagai warisan budaya untuk generasi mendatang.",
              },
              {
                title: "Edukasi Publik",
                description:
                  "Menyediakan sarana edukasi bagi masyarakat untuk memahami sejarah dan budaya leluhur.",
              },
              {
                title: "Kearifan Lokal",
                description:
                  "Menjunjung tinggi kearifan lokal masyarakat Desa Tritik dalam menjaga harmoni dengan alam dan warisan budaya.",
              },
            ].map((item, index) => (
              <Card key={index}>
                <h3 className="mb-2 text-lg font-bold text-dark">
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

      {/* ========== LOKASI ========== */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <SectionTitle
            title="Lokasi Situs"
            subtitle="Situs Purbakala Tritik berada di kawasan Perbukitan Kendeng."
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-10"
          >
            <MapComponent height="350px" zoom={14} />
          </motion.div>
        </div>
      </section>

      {/* ========== GALERI KECIL ========== */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <SectionTitle
            title="Galeri Situs"
            subtitle="Dokumentasi situs purbakala dan Site Museum Tritik."
          />

          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3">
            {siteGallery.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden rounded-2xl bg-gray-light"
              >
                {item.src ? (
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="aspect-[4/3] w-full object-cover"
                  />
                ) : (
                  <div className="flex aspect-[4/3] w-full items-center justify-center">
                    <ImageOff className="h-8 w-8 text-gray" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
