import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { UserCircle, Mail, Phone } from "lucide-react";
import SectionTitle from "../components/ui/SectionTitle";
import Card from "../components/ui/Card";
import Loading from "../components/ui/Loading";
import { DUMMY_MANAGERS, DUMMY_PARTNERS } from "../data/dummy";
import { CONTACT_INFO } from "../constants/siteInfo";
import { getManagerData } from "../services/manager.service";
import type { ManagerDataResponse } from "../types";

export default function ManagerPage() {
  const [data, setData] = useState<ManagerDataResponse | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getManagerData()
      .then((res) => {
        setData(res);
        setLoading(false);
      })
      .catch((err) => {
        console.warn("Manager API offline, using local data fallback:", err);
        setData({
          managers: DUMMY_MANAGERS,
          partners: DUMMY_PARTNERS,
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
        {/* ========== PROFIL ========== */}
        <SectionTitle
          title="Pengelola"
          subtitle="Tim pengelola Desa Wisata Tritik yang berkomitmen menjaga dan mengembangkan destinasi wisata ini."
        />

        {/* ========== STRUKTUR ORGANISASI ========== */}
        <section className="mt-12">
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6 text-center text-2xl font-bold text-dark"
          >
            Struktur Organisasi
          </motion.h3>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {data.managers.map((manager, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center rounded-2xl bg-white p-6 text-center shadow-sm"
              >
                {/* Avatar placeholder */}
                {manager.image ? (
                  <img
                    src={manager.image}
                    alt={manager.name}
                    className="mb-4 h-20 w-20 rounded-full object-cover"
                  />
                ) : (
                  <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-cream">
                    <UserCircle className="h-12 w-12 text-olive/40" />
                  </div>
                )}

                <h4 className="text-base font-bold text-dark">
                  {manager.name}
                </h4>
                <p className="mt-1 text-sm text-gray">{manager.role}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ========== MITRA ========== */}
        {data.partners && data.partners.length > 0 && (
          <section className="mt-16">
            <h3 className="mb-6 text-center text-2xl font-bold text-dark">
              Mitra
            </h3>

            <div className="grid grid-cols-3 gap-4 md:grid-cols-6">
              {data.partners.map((partner, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex aspect-square items-center justify-center rounded-2xl bg-white shadow-sm"
                >
                  {partner.logo ? (
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="h-12 w-12 object-contain"
                    />
                  ) : (
                    <span className="text-xs text-gray">{partner.name}</span>
                  )}
                </motion.div>
              ))}
            </div>
          </section>
        )}

        {/* ========== KONTAK ========== */}
        <section className="mt-16">
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6 text-center text-2xl font-bold text-dark"
          >
            Kontak Pengelola
          </motion.h3>

          <div className="mx-auto max-w-md">
            <Card hover={false}>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cream text-olive">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-dark">Telepon</p>
                    <p className="text-sm text-gray">{CONTACT_INFO.phone}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cream text-olive">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-dark">Email</p>
                    <p className="text-sm text-gray">{CONTACT_INFO.email}</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}
