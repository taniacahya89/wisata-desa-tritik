import type {
  News,
  GalleryItem,
  Umkm,
  TimelineEvent,
  Manager,
  Bidang,
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

// Cara menambah berita baru: tambahkan 1 objek baru ke array di bawah dengan field yang sama
export const DUMMY_NEWS: News[] = [
  {
    id: "1",
    title: "Penyelamatan Fosil di Hutan Tritik, Nganjuk",
    excerpt: "Pada 2022, tim Balai Pelestarian Situs Manusia Purba Sangiran melakukan ekskavasi penyelamatan setelah menerima laporan temuan tulang fosil di kawasan Hutan Tritik. Lokasi temuan berada di lereng yang rawan longsor sehingga fosil perlu diamankan dari risiko kerusakan. Kegiatan tersebut menemukan bagian tulang gajah purba serta fosil hewan lain, termasuk kerbau dan rusa purba. Peristiwa ini menunjukkan pentingnya penelitian dan perlindungan temuan fosil di Tritik.",
    category: "Penemuan Fosil",
    thumbnail: "",
    source: "Museum Sangiran",
    url: "https://sangiran.kemenbud.go.id/penyelamatan-fosil-di-hutan-tritik-nganjuk",
    period: "2022",
  },
  {
    id: "2",
    title: "Fosil Stegodon Ditemukan di Hutan Tritik",
    excerpt: "Pemerintah Kabupaten Nganjuk mendampingi proses ekskavasi fosil gajah purba Stegodon trigonocephalus yang ditemukan di kawasan Hutan Tritik. Temuan ini diperkirakan berusia sekitar 800 ribu hingga 1,2 juta tahun berdasarkan perkiraan awal tim ahli. Sejumlah bagian kerangka berhasil diangkat, termasuk gading, rahang, tulang kaki, tulang rusuk, dan ruas tulang belakang. Temuan tersebut menambah nilai ilmiah kawasan Tritik dan membuka peluang pembelajaran mengenai kehidupan purba.",
    category: "Penemuan Fosil",
    thumbnail: "",
    source: "Pemerintah Kabupaten Nganjuk – Nganjuk Smart City",
    url: "https://api-nsc.nganjukkab.go.id/detail_berita/NTYwMw%3D%3D",
    period: "(tidak disebutkan)",
  },
  {
    id: "3",
    title: "Perhutani Dukung Ekskavasi Fosil Stegodon di Hutan Tritik",
    excerpt: "Perhutani KPH Nganjuk mendampingi tim Museum Geologi dalam kegiatan ekskavasi dan studi potensi koleksi geologi di kawasan Tritik pada Oktober 2025. Fosil ditemukan di petak hutan wilayah RPH Turi, BKPH Tritik, dalam posisi anatomi pada lapisan Formasi Kabuh. Bagian fosil yang ditemukan meliputi gading sepanjang sekitar 2,5 meter serta sejumlah tulang dari kerangka Stegodon. Kolaborasi ini memperlihatkan peran berbagai pihak dalam penelitian dan pelestarian warisan geologi Tritik.",
    category: "Penemuan Fosil",
    thumbnail: "",
    source: "Perhutani",
    url: "https://www.perhutani.co.id/perhutani-dukung-ekskavasi-fosil-gajah-purba-stegodon-di-hutan-tritik-nganjuk/",
    period: "Oktober 2025",
  },
  {
    id: "4",
    title: "Site Museum Tritik Resmi Dibuka untuk Edukasi Geologi",
    excerpt: "Site Museum Tritik di Kecamatan Rejoso, Kabupaten Nganjuk, resmi dibuka pada 18 Desember 2025. Pendirian museum berawal dari laporan masyarakat mengenai temuan fosil, yang kemudian ditindaklanjuti dengan penyelidikan dan pengumpulan data geologi oleh para ahli Museum Geologi. Salah satu temuan penting yang menjadi bagian dari narasi museum adalah kerangka fosil Stegodon. Kehadiran museum diharapkan menjadi ruang konservasi sekaligus sarana edukasi geologi dan kehidupan purba bagi masyarakat, pelajar, serta pengunjung.",
    category: "Site Museum",
    thumbnail: "",
    source: "Badan Geologi, Kementerian ESDM",
    url: "https://geologi.esdm.go.id/media-center/site-museum-tritik-mendorong-nganjuk-semakin-melesat",
    period: "18 Desember 2025",
  },
  {
    id: "5",
    title: "Temuan Fosil Gajah Purba Ungkap Masa Lalu Nganjuk",
    excerpt: "Pemberitaan ini mengulas proses pengangkatan fosil gading Stegodon dari kawasan Tritik serta keterlibatan peneliti dan komunitas setempat. Gading yang memiliki panjang sekitar 2,5 meter memerlukan penanganan bersama agar dapat dipindahkan dengan aman. Artikel tersebut juga menyoroti arti penting temuan fosil bagi pemahaman sejarah alam Nganjuk. Informasi ini dapat digunakan untuk memperkenalkan proses penelitian lapangan dan perlunya menjaga temuan purba agar tidak rusak.",
    category: "Penemuan Fosil",
    thumbnail: "",
    source: "Mongabay Indonesia",
    url: "https://mongabay.co.id/2025/11/11/temuan-fosil-gajah-purba-ungkap-masa-lalu-nganjuk/",
    period: "(tidak disebutkan)",
  },
  {
    id: "6",
    title: "Site Museum Tritik Mendapat Tambahan Ribuan Koleksi Fosil",
    excerpt: "Site Museum Tritik mendapat tambahan koleksi melalui hibah ribuan fosil dari Museum Paloja pada Mei 2026. Penambahan koleksi ini memperkaya bahan yang dapat digunakan untuk kegiatan pengenalan paleontologi dan pembelajaran mengenai kehidupan masa lampau. Keberagaman fosil dapat membantu museum menyajikan informasi yang lebih luas kepada pengunjung, tidak hanya berfokus pada temuan Stegodon di Hutan Tritik. Pengembangan koleksi juga memperkuat fungsi museum sebagai ruang edukasi dan penelitian.",
    category: "Site Museum",
    thumbnail: "",
    source: "Radar Nganjuk",
    url: "https://radarnganjuk.jawapos.com/seputar-nganjuk/2605240003/wow-koleksi-museum-tritik-nganjuk-bertambah-ribuan-fosil-baru",
    period: "Mei 2026",
  },
  {
    id: "7",
    title: "Hibah Fosil untuk Memperkuat Edukasi di Site Museum Tritik",
    excerpt: "Pada Mei 2026, Site Museum Tritik menerima hibah sebanyak 1.523 koleksi fosil dari seorang kolektor dan pegiat paleontologi. Koleksi yang diserahkan mencakup fosil dari beragam kelompok hewan, mulai dari hewan laut hingga mamalia darat seperti rusa, badak, dan Bovidae. Penambahan ini mendukung upaya museum dalam mengenalkan kekayaan fosil dan ilmu paleontologi kepada masyarakat. Bagi Desa Tritik, koleksi yang semakin beragam dapat memperkuat fungsi museum sebagai tujuan kunjungan edukatif.",
    category: "Site Museum",
    thumbnail: "",
    source: "iNews Sidoarjo",
    url: "https://sidoarjo.inews.id/read/692540/fosil-langka-dihibahkan-ke-museum-tritik-ini-rinciannya",
    period: "Mei 2026",
  },
];

export const DUMMY_GALLERY: GalleryItem[] = [
  { id: "1", src: "/assets/galeri/alam-1.jpg", alt: "Pemandangan alam Desa Tritik", category: "alam" },
  { id: "2", src: "/assets/galeri/alam-2.jpg", alt: "Panorama Perbukitan Kendeng", category: "alam" },
  { id: "3", src: "/assets/galeri/museum-1.webp", alt: "Interior Site Museum Tritik", category: "museum" },
  { id: "4", src: "/assets/galeri/museum-2.webp", alt: "Koleksi museum", category: "museum" },
  { id: "5", src: "/assets/galeri/situs-1.jpg", alt: "Situs purbakala Desa Tritik", category: "situs" },
  { id: "6", src: "/assets/galeri/situs-2.jpg", alt: "Peninggalan megalitik", category: "situs" },
];

export const DUMMY_UMKM: Umkm[] = [];

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

// Cara mengubah pengurus: edit nama/jabatan di array DUMMY_MANAGERS atau anggota di DUMMY_BIDANGS
// Cara menambah anggota bidang: tambahkan nama ke array members pada bidang yang sesuai
export const DUMMY_MANAGERS: Manager[] = [
  { name: "Kepala Desa Tritik", role: "Pelindung", image: "" },
  { name: "Adi Hasto Utomo", role: "Pembina", image: "" },
  { name: "Umar Santoso", role: "Ketua", image: "" },
  { name: "Amat Aman Suheri", role: "Wakil Ketua", image: "" },
  { name: "Dewi Sartikawati", role: "Sekretaris", image: "" },
  { name: "Yuli Harnetik", role: "Bendahara", image: "" },
];

export const DUMMY_BIDANGS: Bidang[] = [
  {
    name: "Pramuwisata",
    coordinator: "Bayu Setyoko",
    members: ["Wahyu Purnoko", "Erik Rahmawati", "Dewi Sartikawati"],
  },
  {
    name: "Seni Budaya",
    coordinator: "Sali",
    members: ["Kastiami", "Samto", "Nyamiram"],
  },
  {
    name: "Kuliner",
    coordinator: "Marsiti",
    members: [
      "Parti",
      "Jumiati",
      "Manirah",
      "Patemi",
      "Evy Maysaroh",
      "Pipit Dian",
      "Pujiati",
      "Nasikem",
    ],
  },
  {
    name: "Agrowisata",
    coordinator: "Widayat",
    members: ["Amat Aman Suheri", "Gunawan", "Rizky", "Juanda", "Sunyoto", "Kadir"],
  },
  {
    name: "Wisata Edukasi",
    coordinator: "Wahyu Purnoko",
    members: ["Ferra"],
  },
  {
    name: "Akomodasi",
    members: ["Nyoto Dwi Utomo", "Supriadi", "Supriyono", "Budiono", "Samaun", "Sukarmin"],
  },
  {
    name: "Keamanan",
    members: ["Temu Mujiono", "Sujak", "Sukarmin", "Noto", "Lamidi", "Subandi"],
  },
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

export const DUMMY_PARTNERS: Partner[] = [];

export const GALLERY_CATEGORIES = [
  "Semua",
  "Situs",
  "Museum",
  "Alam",
  "Artefak",
  "Edukasi",
  "Budaya",
];
