import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Clock,
  Ticket,
  CheckCircle2,
  AlertTriangle,
  Phone,
  ChevronDown,
  Car,
  Bath,
  Store,
  Utensils,
  Church,
  Accessibility,
} from "lucide-react";
import SectionTitle from "../components/ui/SectionTitle";
import Card from "../components/ui/Card";
import Loading from "../components/ui/Loading";
import { OPERATING_HOURS, CONTACT_INFO } from "../constants/siteInfo";
import { DUMMY_FACILITIES, DUMMY_REGULATIONS, DUMMY_FAQ } from "../data/dummy";
import { getVisitData } from "../services/visit.service";
import type { VisitDataResponse } from "../types";
import type { ReactNode } from "react";

const facilityIconMap: Record<string, ReactNode> = {
  car: <Car className="h-5 w-5" />,
  toilet: <Bath className="h-5 w-5" />,
  store: <Store className="h-5 w-5" />,
  utensils: <Utensils className="h-5 w-5" />,
  church: <Church className="h-5 w-5" />,
  accessibility: <Accessibility className="h-5 w-5" />,
};

export default function VisitPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [data, setData] = useState<VisitDataResponse | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getVisitData()
      .then((res) => {
        setData(res);
        setLoading(false);
      })
      .catch((err) => {
        console.warn("Visit API offline, using local data fallback:", err);
        setData({
          operatingHours: OPERATING_HOURS,
          facilities: DUMMY_FACILITIES,
          regulations: DUMMY_REGULATIONS.map(r => r.text),
          faq: DUMMY_FAQ,
        });
        setLoading(false);
      });
  }, []);

  if (loading || !data) {
    return <Loading />;
  }

  return (
    <div className="pt-24 pb-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle
          title="Informasi Kunjungan"
          subtitle="Semua yang perlu Anda ketahui sebelum berkunjung ke Desa Wisata Tritik."
        />

        {/* ========== JAM OPERASIONAL ========== */}
        <section className="mt-12">
          <div className="grid gap-6 md:grid-cols-2">
            <Card hover={false}>
              <div className="flex items-center gap-3 mb-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cream text-olive">
                  <Clock className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-bold text-dark">Jam Operasional</h3>
              </div>

              <div className="space-y-4">
                {data.operatingHours.map((item, index) => (
                  <div
                    key={index}
                    className={`flex items-center justify-between rounded-xl p-3 ${
                      item.isClosed ? "bg-red-50" : "bg-cream"
                    }`}
                  >
                    <span className="text-sm font-medium text-dark">
                      {item.days}
                    </span>
                    <span
                      className={`text-sm font-bold ${
                        item.isClosed ? "text-red-500" : "text-olive"
                      }`}
                    >
                      {item.hours}
                    </span>
                  </div>
                ))}
              </div>
            </Card>

            {/* ========== HARGA TIKET ========== */}
            <Card hover={false}>
              <div className="flex items-center gap-3 mb-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cream text-olive">
                  <Ticket className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-bold text-dark">Harga Tiket</h3>
              </div>

              <div className="flex h-32 items-center justify-center rounded-xl bg-cream">
                <p className="text-center text-sm text-gray">
                  Informasi harga tiket akan segera diumumkan.
                  <br />
                  <span className="text-xs text-gray/60">
                    Silakan hubungi pengelola untuk informasi lebih lanjut.
                  </span>
                </p>
              </div>
            </Card>
          </div>
        </section>

        {/* ========== FASILITAS ========== */}
        {data.facilities && data.facilities.length > 0 && (
          <section className="mt-12">
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6 text-2xl font-bold text-dark"
            >
              Fasilitas
            </motion.h3>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
              {data.facilities.map((facility, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-sm"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cream text-olive">
                    {facilityIconMap[facility.icon] || (
                      <CheckCircle2 className="h-5 w-5" />
                    )}
                  </div>
                  <span className="text-sm font-medium text-dark">
                    {facility.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </section>
        )}

        {/* ========== PERATURAN PENGUNJUNG ========== */}
        {data.regulations && data.regulations.length > 0 && (
          <section className="mt-12">
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6 text-2xl font-bold text-dark"
            >
              Peraturan Pengunjung
            </motion.h3>

            <Card hover={false}>
              <ul className="space-y-3">
                {data.regulations.map((rule, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-start gap-3 text-sm text-gray"
                  >
                    <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-olive" />
                    {rule}
                  </motion.li>
                ))}
              </ul>
            </Card>
          </section>
        )}

        {/* ========== KONTAK RESERVASI ========== */}
        <section className="mt-12">
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6 text-2xl font-bold text-dark"
          >
            Kontak Reservasi
          </motion.h3>

          <Card hover={false}>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cream text-olive">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-medium text-dark">Telepon / WhatsApp</p>
                <p className="text-sm text-gray">{CONTACT_INFO.phone}</p>
              </div>
            </div>
          </Card>
        </section>

        {/* ========== FAQ ========== */}
        {data.faq && data.faq.length > 0 && (
          <section className="mt-12">
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6 text-2xl font-bold text-dark"
            >
              Pertanyaan Umum
            </motion.h3>

            <div className="space-y-3">
              {data.faq.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="overflow-hidden rounded-2xl bg-white shadow-sm"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="flex w-full cursor-pointer items-center justify-between p-5 text-left"
                  >
                    <span className="pr-4 text-sm font-semibold text-dark">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-gray transition-transform duration-200 ${
                        openFaq === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      transition={{ duration: 0.2 }}
                      className="border-t border-gray-light px-5 pb-5 pt-3"
                    >
                      <p className="text-sm leading-relaxed text-gray">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
