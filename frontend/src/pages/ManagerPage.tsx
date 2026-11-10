import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import SectionTitle from "../components/ui/SectionTitle";
import Card from "../components/ui/Card";
import Loading from "../components/ui/Loading";
import { DUMMY_MANAGERS, DUMMY_BIDANGS, DUMMY_PARTNERS } from "../data/dummy";
import { getManagerData } from "../services/manager.service";
import type { ManagerDataResponse } from "../types";

// Helper function untuk membuat inisial dari nama
function getInitials(name: string): string {
  const words = name.split(" ");
  if (words.length >= 2) {
    return (words[0][0] + words[1][0]).toUpperCase();
  }
  return name.substring(0, 2).toUpperCase();
}

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
          organizationName: "Pokdarwis Tritik Purba",
          description:
            "Site Museum Tritik dikelola oleh Kelompok Sadar Wisata (Pokdarwis) Tritik Purba, mitra pemerintah desa dalam pengembangan wisata edukasi di kawasan Tritik.",
          legalBasis:
            "Keputusan Kepala Desa Tritik, Kecamatan Rejoso, Kabupaten Nganjuk Nomor 190/23/K/411.516.2023/2025 tentang Pembentukan Pokdarwis Tritik Purba, ditetapkan di Tritik pada 4 Desember 2025 oleh Kepala Desa Tritik (Hartoyo, SE), dengan masa kerja kepengurusan 3 tahun. Susunan pengurus disepakati melalui Musyawarah Desa pada Kamis, 4 Desember 2025 pukul 09.30 WIB di Balai Desa Tritik, dengan penyuluhan dari Dinas PORABUDPAR Kabupaten Nganjuk.",
          managers: DUMMY_MANAGERS,
          bidangs: DUMMY_BIDANGS,
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
        {/* ========== HEADER ========== */}
        <SectionTitle
          title={data.organizationName || "Pengelola"}
          subtitle={data.description || "Pengelola Desa Wisata Tritik"}
        />

        {/* ========== DASAR HUKUM ========== */}
        {data.legalBasis && (
          <section className="mt-10">
            <Card hover={false}>
              <h3 className="mb-3 text-lg font-bold text-dark">Dasar Hukum</h3>
              <p className="text-sm leading-relaxed text-gray">{data.legalBasis}</p>
            </Card>
          </section>
        )}

        {/* ========== PENGURUS INTI ========== */}
        <section className="mt-12">
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6 text-center text-2xl font-bold text-dark"
          >
            Pengurus Inti
          </motion.h3>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {data.managers.map((manager, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex flex-col items-center rounded-2xl bg-white p-6 text-center shadow-sm"
              >
                {/* Avatar dengan inisial */}
                {manager.image ? (
                  <img
                    src={manager.image}
                    alt={manager.name}
                    className="mb-4 h-20 w-20 rounded-full object-cover"
                  />
                ) : (
                  <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-olive text-white">
                    <span className="text-xl font-bold">{getInitials(manager.name)}</span>
                  </div>
                )}

                <p className="text-sm font-medium text-olive">{manager.role}</p>
                <h4 className="mt-1 text-base font-bold text-dark">{manager.name}</h4>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ========== BIDANG-BIDANG ========== */}
        {data.bidangs && data.bidangs.length > 0 && (
          <section className="mt-16">
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6 text-center text-2xl font-bold text-dark"
            >
              Bidang-Bidang
            </motion.h3>

            <div className="grid gap-6 md:grid-cols-2">
              {data.bidangs.map((bidang, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Card hover={false}>
                    <h4 className="mb-3 text-lg font-bold text-dark">{bidang.name}</h4>

                    {bidang.coordinator && (
                      <div className="mb-3">
                        <p className="text-xs font-medium uppercase tracking-wide text-olive">
                          Koordinator
                        </p>
                        <p className="mt-1 text-sm text-dark">{bidang.coordinator}</p>
                      </div>
                    )}

                    <div>
                      <p className="text-xs font-medium uppercase tracking-wide text-olive">
                        Anggota
                      </p>
                      <ul className="mt-2 space-y-1">
                        {bidang.members.map((member, idx) => (
                          <li key={idx} className="text-sm text-gray">
                            • {member}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </section>
        )}

        {/* ========== MITRA ========== */}
        {/* Section ini disembunyikan karena data mitra masih kosong */}
        {/* Cara mengaktifkan: isi array DUMMY_PARTNERS di data/dummy.ts, lalu hapus komentar di bawah */}
        {/* 
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
        */}

        {/* ========== KONTAK PENGELOLA ========== */}
        {/* Section ini disembunyikan karena data kontak belum tersedia */}
        {/* Cara mengaktifkan: isi CONTACT_INFO di constants/siteInfo.ts dengan data kontak pengelola, lalu hapus komentar di bawah */}
        {/*
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
        */}
      </div>
    </div>
  );
}
