package data

import "github.com/nganjuk-tritik/backend/internal/model"

// ========================================
// In-memory dummy data
// Replace with database queries when PostgreSQL is connected
// ========================================

var News = []model.News{
	{
		ID:        "1",
		Title:     "Penemuan Fosil Baru di Kawasan Situs Tritik",
		Excerpt:   "Tim arkeologi berhasil menemukan fosil baru yang diperkirakan berusia ribuan tahun di kawasan situs purbakala Desa Tritik.",
		Date:      "2026-07-01",
		Category:  "Arkeologi",
		Thumbnail: "",
	},
	{
		ID:        "2",
		Title:     "Festival Budaya Desa Tritik 2026",
		Excerpt:   "Desa Tritik akan menggelar festival budaya tahunan yang menampilkan kesenian tradisional dan kuliner khas daerah.",
		Date:      "2026-06-15",
		Category:  "Event",
		Thumbnail: "",
	},
	{
		ID:        "3",
		Title:     "Peresmian Jalur Wisata Baru di Perbukitan Kendeng",
		Excerpt:   "Jalur trekking baru di kawasan Perbukitan Kendeng resmi dibuka untuk memberikan pengalaman wisata alam yang lebih lengkap.",
		Date:      "2026-06-01",
		Category:  "Wisata",
		Thumbnail: "",
	},
	{
		ID:        "4",
		Title:     "Kunjungan Delegasi UNESCO ke Site Museum Tritik",
		Excerpt:   "Delegasi dari UNESCO melakukan kunjungan untuk menilai potensi situs purbakala Tritik sebagai warisan dunia.",
		Date:      "2026-05-20",
		Category:  "Internasional",
		Thumbnail: "",
	},
	{
		ID:        "5",
		Title:     "Pelatihan Pemandu Wisata Lokal",
		Excerpt:   "Program pelatihan pemandu wisata lokal diselenggarakan untuk meningkatkan kualitas layanan wisata di Desa Tritik.",
		Date:      "2026-05-10",
		Category:  "Edukasi",
		Thumbnail: "",
	},
	{
		ID:        "6",
		Title:     "Kolaborasi UMKM dan Desa Wisata",
		Excerpt:   "UMKM lokal berkolaborasi dengan pengelola desa wisata untuk mengembangkan produk oleh-oleh khas Desa Tritik.",
		Date:      "2026-04-28",
		Category:  "UMKM",
		Thumbnail: "",
	},
}

var Gallery = []model.GalleryItem{
	{ID: "1", Src: "", Alt: "Situs Purbakala Tritik", Category: "Situs"},
	{ID: "2", Src: "", Alt: "Site Museum Tritik", Category: "Museum"},
	{ID: "3", Src: "", Alt: "Perbukitan Kendeng", Category: "Alam"},
	{ID: "4", Src: "", Alt: "Fosil Purba", Category: "Artefak"},
	{ID: "5", Src: "", Alt: "Pemandangan Desa Tritik", Category: "Alam"},
	{ID: "6", Src: "", Alt: "Koleksi Museum", Category: "Museum"},
	{ID: "7", Src: "", Alt: "Aktivitas Wisata Edukasi", Category: "Edukasi"},
	{ID: "8", Src: "", Alt: "Kegiatan Masyarakat", Category: "Budaya"},
	{ID: "9", Src: "", Alt: "Jalur Trekking", Category: "Alam"},
	{ID: "10", Src: "", Alt: "Peninggalan Megalitik", Category: "Situs"},
}

var UmkmList = []model.Umkm{
	{
		ID:          "1",
		Name:        "Kerajinan Anyaman Bambu",
		Description: "Produk anyaman bambu buatan tangan oleh pengrajin lokal Desa Tritik.",
		Image:       "",
		Contact:     "(Belum tersedia)",
		Location:    "Desa Tritik, RT 01",
		Category:    "Kerajinan",
	},
	{
		ID:          "2",
		Name:        "Oleh-Oleh Khas Tritik",
		Description: "Makanan dan camilan khas Desa Tritik yang dibuat dari bahan-bahan lokal.",
		Image:       "",
		Contact:     "(Belum tersedia)",
		Location:    "Desa Tritik, RT 02",
		Category:    "Makanan",
	},
	{
		ID:          "3",
		Name:        "Batik Motif Kendeng",
		Description: "Batik dengan motif khas terinspirasi dari Perbukitan Kendeng dan peninggalan megalitik.",
		Image:       "",
		Contact:     "(Belum tersedia)",
		Location:    "Desa Tritik, RT 03",
		Category:    "Kerajinan",
	},
	{
		ID:          "4",
		Name:        "Kopi Kendeng",
		Description: "Kopi pilihan dari perkebunan di kawasan Perbukitan Kendeng.",
		Image:       "",
		Contact:     "(Belum tersedia)",
		Location:    "Desa Tritik, RT 01",
		Category:    "Minuman",
	},
}

var SiteData = model.Site{
	Title:       "Situs Purbakala Tritik",
	Description: "Situs Purbakala Tritik merupakan salah satu situs megalitik yang terletak di kawasan Perbukitan Kendeng, Desa Tritik, Kecamatan Rejoso, Kabupaten Nganjuk.",
	History:     "Situs ini menyimpan berbagai peninggalan bersejarah termasuk fosil purba dan artefak megalitik yang menjadi bukti peradaban manusia purba di Jawa Timur.",
	Timeline: []model.TimelineEvent{
		{Year: "(Belum tersedia)", Title: "Penemuan Awal Situs", Description: "Ditemukan peninggalan megalitik di kawasan Perbukitan Kendeng oleh penduduk lokal."},
		{Year: "(Belum tersedia)", Title: "Penelitian Arkeologi", Description: "Tim arkeologi melakukan penelitian dan ekskavasi di kawasan situs purbakala."},
		{Year: "(Belum tersedia)", Title: "Pembangunan Site Museum", Description: "Site Museum Tritik dibangun untuk melestarikan dan memamerkan temuan arkeologi."},
		{Year: "(Belum tersedia)", Title: "Penetapan Desa Wisata", Description: "Desa Tritik resmi ditetapkan sebagai desa wisata oleh pemerintah daerah."},
	},
}

var VisitData = model.Visit{
	OperatingHours: []model.OperatingHour{
		{Days: "Senin – Kamis", Hours: "08.00 – 15.00", IsClosed: false},
		{Days: "Jumat", Hours: "Tutup", IsClosed: true},
		{Days: "Sabtu – Minggu", Hours: "08.00 – 16.00", IsClosed: false},
	},
	Facilities: []model.Facility{
		{Icon: "car", Name: "Area Parkir"},
		{Icon: "toilet", Name: "Toilet Umum"},
		{Icon: "store", Name: "Pusat Informasi"},
		{Icon: "utensils", Name: "Area Makan"},
		{Icon: "church", Name: "Mushola"},
		{Icon: "accessibility", Name: "Akses Disabilitas"},
	},
	Regulations: []string{
		"Dilarang merusak atau mengambil benda-benda purbakala.",
		"Dilarang membuang sampah sembarangan.",
		"Wajib mengikuti arahan pemandu wisata.",
		"Dilarang merokok di area museum.",
		"Anak-anak harus didampingi orang dewasa.",
		"Harap menjaga ketenangan di area situs.",
	},
	FAQ: []model.FAQItem{
		{Question: "Apakah perlu reservasi terlebih dahulu?", Answer: "Untuk kunjungan individu tidak perlu reservasi. Untuk rombongan (lebih dari 20 orang), disarankan melakukan reservasi minimal 3 hari sebelumnya."},
		{Question: "Apakah tersedia pemandu wisata?", Answer: "Ya, tersedia pemandu wisata lokal yang dapat menemani perjalanan Anda."},
		{Question: "Berapa lama waktu yang dibutuhkan untuk kunjungan?", Answer: "Rata-rata kunjungan membutuhkan waktu 2-3 jam untuk melihat seluruh area situs dan museum."},
	},
}

var ManagerList = model.ManagerData{
	Managers: []model.Manager{
		{Name: "(Belum tersedia)", Role: "Kepala Pengelola", Image: ""},
		{Name: "(Belum tersedia)", Role: "Sekretaris", Image: ""},
		{Name: "(Belum tersedia)", Role: "Bendahara", Image: ""},
		{Name: "(Belum tersedia)", Role: "Koordinator Wisata", Image: ""},
	},
	Partners: []model.Partner{
		{Name: "(Belum tersedia)", Logo: ""},
		{Name: "(Belum tersedia)", Logo: ""},
		{Name: "(Belum tersedia)", Logo: ""},
	},
}

var MapInfo = model.MapData{
	Coordinates: model.Coordinates{
		Lat: -7.488153,
		Lng: 111.844092,
	},
	Address: "Desa Tritik, Kecamatan Rejoso, Kabupaten Nganjuk, Jawa Timur",
	Directions: []model.Direction{
		{From: "Kota Nganjuk", Description: "Menuju ke arah selatan melalui Kecamatan Rejoso. Ikuti petunjuk arah menuju Desa Tritik. Perjalanan memakan waktu sekitar 30-45 menit."},
		{From: "Surabaya", Description: "Melalui jalur tol Surabaya-Mojokerto, keluar di gerbang tol Nganjuk. Dilanjutkan menuju Kecamatan Rejoso ke arah selatan."},
	},
}

// HomeData holds all homepage data
type HomeData struct {
	Description string              `json:"description"`
	Attractions []Attraction        `json:"attractions"`
	Hours       []model.OperatingHour `json:"operatingHours"`
}

// Attraction represents a feature/attraction
type Attraction struct {
	Icon        string `json:"icon"`
	Title       string `json:"title"`
	Description string `json:"description"`
}

var Home = HomeData{
	Description: "Desa Tritik merupakan desa wisata di Kecamatan Rejoso, Kabupaten Nganjuk yang dikenal dengan warisan budaya megalitik, fosil purba, dan Site Museum Tritik. Desa ini berada di kawasan Perbukitan Kendeng dan menawarkan perpaduan wisata sejarah, edukasi, dan alam.",
	Attractions: []Attraction{
		{Icon: "landmark", Title: "Warisan Megalitik", Description: "Situs purbakala dengan peninggalan megalitik yang menjadi saksi peradaban kuno di kawasan Perbukitan Kendeng."},
		{Icon: "graduation-cap", Title: "Wisata Edukasi", Description: "Site Museum Tritik menyajikan koleksi fosil purba dan artefak bersejarah untuk pengalaman belajar yang interaktif."},
		{Icon: "trees", Title: "Keindahan Alam", Description: "Panorama Perbukitan Kendeng yang asri menawarkan suasana alam yang tenang dan menyegarkan."},
	},
	Hours: VisitData.OperatingHours,
}
