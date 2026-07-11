import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MapPin, Navigation, ExternalLink } from "lucide-react";
import SectionTitle from "../components/ui/SectionTitle";
import MapComponent from "../components/ui/MapComponent";
import Card from "../components/ui/Card";
import Loading from "../components/ui/Loading";
import { SITE_COORDINATES, SITE_ADDRESS } from "../constants/siteInfo";
import { getMapData } from "../services/map.service";
import type { MapDataResponse } from "../types";

export default function MapPage() {
  const [data, setData] = useState<MapDataResponse | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getMapData()
      .then((res) => {
        setData(res);
        setLoading(false);
      })
      .catch((err) => {
        console.warn("Map API offline, using local data fallback:", err);
        setData({
          coordinates: SITE_COORDINATES,
          address: SITE_ADDRESS,
          directions: [
            {
              from: "Kota Nganjuk",
              description:
                "Menuju ke arah selatan melalui Kecamatan Rejoso. Ikuti petunjuk arah menuju Desa Tritik. Perjalanan memakan waktu sekitar 30-45 menit.",
            },
            {
              from: "Surabaya",
              description:
                "Melalui jalur tol Surabaya-Mojokerto, keluar di gerbang tol Nganjuk. Dilanjutkan menuju Kecamatan Rejoso ke arah selatan.",
            },
          ],
        });
        setLoading(false);
      });
  }, []);

  if (loading || !data) {
    return <Loading />;
  }

  const googleMapsUrl = `https://www.google.com/maps?q=${data.coordinates.lat},${data.coordinates.lng}`;

  return (
    <div className="pt-24 pb-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle
          title="Lokasi"
          subtitle="Temukan lokasi Desa Wisata Tritik di kawasan Perbukitan Kendeng, Kecamatan Rejoso, Kabupaten Nganjuk."
        />

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10"
        >
          <MapComponent height="500px" zoom={15} />
        </motion.div>

        {/* Info Cards */}
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {/* Address */}
          <Card>
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cream text-olive">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <h3 className="mb-1 font-bold text-dark">Alamat</h3>
                <p className="text-sm leading-relaxed text-gray">
                  {data.address}
                </p>
              </div>
            </div>
          </Card>

          {/* Coordinates */}
          <Card>
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cream text-olive">
                <Navigation className="h-5 w-5" />
              </div>
              <div>
                <h3 className="mb-1 font-bold text-dark">Koordinat</h3>
                <p className="text-sm text-gray">
                  {data.coordinates.lat}, {data.coordinates.lng}
                </p>
              </div>
            </div>
          </Card>

          {/* Google Maps Link */}
          <Card>
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cream text-olive">
                <ExternalLink className="h-5 w-5" />
              </div>
              <div>
                <h3 className="mb-1 font-bold text-dark">Petunjuk Arah</h3>
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-olive transition-colors hover:text-olive-dark"
                >
                  Buka di Google Maps
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </Card>
        </div>

        {/* Directions */}
        {data.directions && data.directions.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-10"
          >
            <Card hover={false}>
              <h3 className="mb-4 text-xl font-bold text-dark">
                Petunjuk Menuju Lokasi
              </h3>
              <div className="space-y-3 text-sm leading-relaxed text-gray">
                {data.directions.map((direction, idx) => (
                  <p key={idx}>
                    <strong className="text-dark">Dari {direction.from}:</strong>{" "}
                    {direction.description}
                  </p>
                ))}
                <p>
                  <strong className="text-dark">Transportasi:</strong> Disarankan
                  menggunakan kendaraan pribadi. Akses jalan menuju lokasi sudah
                  beraspal dengan kondisi baik.
                </p>
              </div>
            </Card>
          </motion.div>
        )}
      </div>
    </div>
  );
}
