import type { OperatingHour } from "../types";

export const SITE_NAME = "Desa Wisata Tritik";

export const SITE_DESCRIPTION =
  "Desa Tritik merupakan desa wisata di Kecamatan Rejoso, Kabupaten Nganjuk yang dikenal dengan warisan budaya megalitik, fosil purba, dan Site Museum Tritik. Desa ini berada di kawasan Perbukitan Kendeng dan menawarkan perpaduan wisata sejarah, edukasi, dan alam.";

export const SITE_ADDRESS =
  "Desa Tritik, Kecamatan Rejoso, Kabupaten Nganjuk, Jawa Timur";

export const SITE_COORDINATES = {
  lat: -7.488153,
  lng: 111.844092,
} as const;

export const OPERATING_HOURS: OperatingHour[] = [
  { days: "Senin – Kamis", hours: "08.00 – 15.00" },
  { days: "Jumat", hours: "Tutup", isClosed: true },
  { days: "Sabtu – Minggu", hours: "08.00 – 16.00" },
];

export const CONTACT_INFO = {
  phone: "(Belum tersedia)",
  email: "(Belum tersedia)",
  instagram: "(Belum tersedia)",
};
