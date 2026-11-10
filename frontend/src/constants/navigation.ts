import type { NavItem } from "../types";
import { SHOW_UMKM_IN_NAV } from "./features";

const ALL_NAV_ITEMS: NavItem[] = [
  { label: "Beranda", path: "/" },
  { label: "Peta", path: "/map" },
  { label: "Situs", path: "/site" },
  { label: "Galeri", path: "/gallery" },
  { label: "Kunjungan", path: "/visit" },
  { label: "UMKM", path: "/umkm" },
  { label: "Berita", path: "/news" },
  { label: "Pengelola", path: "/manager" },
];

// Filter menu UMKM berdasarkan konfigurasi features.ts
export const NAV_ITEMS: NavItem[] = SHOW_UMKM_IN_NAV
  ? ALL_NAV_ITEMS
  : ALL_NAV_ITEMS.filter((item) => item.path !== "/umkm");
