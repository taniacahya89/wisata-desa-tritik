import type {
  News,
  GalleryItem,
  Umkm,
  TimelineEvent,
  Manager,
  Attraction,
  Facility,
  FaqItem,
  Regulation,
  Partner,
} from "../types";

export const DUMMY_ATTRACTIONS: Attraction[] = [
  {
    icon: "landmark",
    title: "Warisan Megalitik",
    description:
      "Situs purbakala dengan peninggalan megalitik yang menjadi saksi peradaban kuno di kawasan Perbukitan Kendeng.",
  },
  {
    icon: "graduation-cap",
    title: "Wisata Edukasi",
    description:
      "Site Museum Tritik menyajikan koleksi fosil purba dan artefak bersejarah untuk pengalaman belajar yang interaktif.",
  },
  {
    icon: "trees",
    title: "Keindahan Alam",
    description:
      "Panorama Perbukitan Kendeng yang asri menawarkan suasana alam yang tenang dan menyegarkan.",
  },
];

export const DUMMY_NEWS: News[] = [
  {
    id: "1",
    title: "Penemuan Fosil Baru di Kawasan Situs Tritik",
    excerpt:
      "Tim arkeologi berhasil menemukan fosil baru yang diperkirakan berusia ribuan tahun di kawasan situs purbakala Desa Tritik.",
    date: "2026-07-01",
    category: "Arkeologi",
    thumbnail: "",
  },
  {
    id: "2",
    title: "Festival Budaya Desa Tritik 2026",
    excerpt:
      "Desa Tritik akan menggelar festival budaya tahunan yang menampilkan kesenian tradisional dan kuliner khas daerah.",
    date: "2026-06-15",
    category: "Event",
    thumbnail: "",
  },
  {
    id: "3",
    title: "Peresmian Jalur Wisata Baru di Perbukitan Kendeng",
    excerpt:
      "Jalur trekking baru di kawasan Perbukitan Kendeng resmi dibuka untuk memberikan pengalaman wisata alam yang lebih lengkap.",
    date: "2026-06-01",
    category: "Wisata",
    thumbnail: "",
  },
  {
    id: "4",
    title: "Kunjungan Delegasi UNESCO ke Site Museum Tritik",
    excerpt:
      "Delegasi dari UNESCO melakukan kunjungan untuk menilai potensi situs purbakala Tritik sebagai warisan dunia.",
    date: "2026-05-20",
    category: "Internasional",
    thumbnail: "",
  },
  {
    id: "5",
    title: "Pelatihan Pemandu Wisata Lokal",
    excerpt:
      "Program pelatihan pemandu wisata lokal diselenggarakan untuk meningkatkan kualitas layanan wisata di Desa Tritik.",
    date: "2026-05-10",
    category: "Edukasi",
    thumbnail: "",
  },
  {
    id: "6",
    title: "Kolaborasi UMKM dan Desa Wisata",
    excerpt:
      "UMKM lokal berkolaborasi dengan pengelola desa wisata untuk mengembangkan produk oleh-oleh khas Desa Tritik.",
    date: "2026-04-28",
    category: "UMKM",
    thumbnail: "",
  },
];

export const DUMMY_GALLERY: GalleryItem[] = [
  { id: "1", src: "", alt: "Situs Purbakala Tritik", category: "Situs" },
  { id: "2", src: "", alt: "Site Museum Tritik", category: "Museum" },
  { id: "3", src: "", alt: "Perbukitan Kendeng", category: "Alam" },
  { id: "4", src: "", alt: "Fosil Purba", category: "Artefak" },
  { id: "5", src: "", alt: "Pemandangan Desa Tritik", category: "Alam" },
  { id: "6", src: "", alt: "Koleksi Museum", category: "Museum" },
  { id: "7", src: "", alt: "Aktivitas Wisata Edukasi", category: "Edukasi" },
  { id: "8", src: "", alt: "Kegiatan Masyarakat", category: "Budaya" },
  { id: "9", src: "", alt: "Jalur Trekking", category: "Alam" },
  { id: "10", src: "", alt: "Peninggalan Megalitik", category: "Situs" },
];

export const DUMMY_UMKM: Umkm[] = [
  {
    id: "1",
    name: "Kerajinan Anyaman Bambu",
    description:
      "Produk anyaman bambu buatan tangan oleh pengrajin lokal Desa Tritik. Tersedia berbagai jenis anyaman mulai dari tas, topi, hingga peralatan rumah tangga.",
    image: "",
    contact: "(Belum tersedia)",
    location: "Desa Tritik, RT 01",
    category: "Kerajinan",
  },
  {
    id: "2",
    name: "Oleh-Oleh Khas Tritik",
    description:
      "Makanan dan camilan khas Desa Tritik yang dibuat dari bahan-bahan lokal. Cocok sebagai buah tangan kunjungan wisata.",
    image: "",
    contact: "(Belum tersedia)",
    location: "Desa Tritik, RT 02",
    category: "Makanan",
  },
  {
    id: "3",
    name: "Batik Motif Kendeng",
    description:
      "Batik dengan motif khas terinspirasi dari Perbukitan Kendeng dan peninggalan megalitik. Diproduksi oleh kelompok ibu-ibu PKK.",
    image: "",
    contact: "(Belum tersedia)",
    location: "Desa Tritik, RT 03",
    category: "Kerajinan",
  },
  {
    id: "4",
    name: "Kopi Kendeng",
    description:
      "Kopi pilihan dari perkebunan di kawasan Perbukitan Kendeng. Diolah secara tradisional untuk menghasilkan cita rasa yang khas.",
    image: "",
    contact: "(Belum tersedia)",
    location: "Desa Tritik, RT 01",
    category: "Minuman",
  },
];

export const DUMMY_TIMELINE: TimelineEvent[] = [
  {
    year: "(Belum tersedia)",
    title: "Penemuan Awal Situs",
    description:
      "Ditemukan peninggalan megalitik di kawasan Perbukitan Kendeng oleh penduduk lokal.",
  },
  {
    year: "(Belum tersedia)",
    title: "Penelitian Arkeologi",
    description:
      "Tim arkeologi melakukan penelitian dan ekskavasi di kawasan situs purbakala.",
  },
  {
    year: "(Belum tersedia)",
    title: "Pembangunan Site Museum",
    description:
      "Site Museum Tritik dibangun untuk melestarikan dan memamerkan temuan arkeologi.",
  },
  {
    year: "(Belum tersedia)",
    title: "Penetapan Desa Wisata",
    description:
      "Desa Tritik resmi ditetapkan sebagai desa wisata oleh pemerintah daerah.",
  },
];

export const DUMMY_MANAGERS: Manager[] = [
  { name: "(Belum tersedia)", role: "Kepala Pengelola", image: "" },
  { name: "(Belum tersedia)", role: "Sekretaris", image: "" },
  { name: "(Belum tersedia)", role: "Bendahara", image: "" },
  { name: "(Belum tersedia)", role: "Koordinator Wisata", image: "" },
];

export const DUMMY_FACILITIES: Facility[] = [
  { icon: "car", name: "Area Parkir" },
  { icon: "toilet", name: "Toilet Umum" },
  { icon: "store", name: "Pusat Informasi" },
  { icon: "utensils", name: "Area Makan" },
  { icon: "church", name: "Mushola" },
  { icon: "accessibility", name: "Akses Disabilitas" },
];

export const DUMMY_REGULATIONS: Regulation[] = [
  { text: "Dilarang merusak atau mengambil benda-benda purbakala." },
  { text: "Dilarang membuang sampah sembarangan." },
  { text: "Wajib mengikuti arahan pemandu wisata." },
  { text: "Dilarang merokok di area museum." },
  { text: "Anak-anak harus didampingi orang dewasa." },
  { text: "Harap menjaga ketenangan di area situs." },
];

export const DUMMY_FAQ: FaqItem[] = [
  {
    question: "Apakah perlu reservasi terlebih dahulu?",
    answer:
      "Untuk kunjungan individu tidak perlu reservasi. Untuk rombongan (lebih dari 20 orang), disarankan melakukan reservasi minimal 3 hari sebelumnya.",
  },
  {
    question: "Apakah tersedia pemandu wisata?",
    answer:
      "Ya, tersedia pemandu wisata lokal yang dapat menemani perjalanan Anda. Informasi lebih lanjut dapat menghubungi kontak pengelola.",
  },
  {
    question: "Berapa lama waktu yang dibutuhkan untuk kunjungan?",
    answer:
      "Rata-rata kunjungan membutuhkan waktu 2-3 jam untuk melihat seluruh area situs dan museum.",
  },
];

export const DUMMY_PARTNERS: Partner[] = [
  { name: "(Belum tersedia)", logo: "" },
  { name: "(Belum tersedia)", logo: "" },
  { name: "(Belum tersedia)", logo: "" },
];

export const GALLERY_CATEGORIES = [
  "Semua",
  "Situs",
  "Museum",
  "Alam",
  "Artefak",
  "Edukasi",
  "Budaya",
];
