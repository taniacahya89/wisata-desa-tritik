import { useState, useEffect } from "react";
import SectionTitle from "../components/ui/SectionTitle";
import UmkmCard from "../components/ui/UmkmCard";
import Loading from "../components/ui/Loading";
import EmptyState from "../components/ui/EmptyState";
import { DUMMY_UMKM } from "../data/dummy";
import { getUmkmData } from "../services/umkm.service";
import type { Umkm } from "../types";

export default function UmkmPage() {
  const [umkmList, setUmkmList] = useState<Umkm[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUmkmData()
      .then((res) => {
        setUmkmList(res);
        setLoading(false);
      })
      .catch((err) => {
        console.warn("UMKM API offline, using local data fallback:", err);
        setUmkmList(DUMMY_UMKM);
        setLoading(false);
      });
  }, []);

  if (loading || !umkmList) {
    return <Loading />;
  }

  return (
    <div className="pt-24 pb-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle
          title="UMKM Desa Tritik"
          subtitle="Produk unggulan dari pelaku usaha mikro, kecil, dan menengah di Desa Tritik. Dukung produk lokal kami."
        />

        {/* UMKM Grid */}
        {umkmList.length > 0 ? (
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {umkmList.map((item) => (
              <UmkmCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <EmptyState
            message="UMKM tidak ditemukan"
            description="Informasi mengenai UMKM akan ditampilkan ketika data sudah tersedia."
          />
        )}
      </div>
    </div>
  );
}
