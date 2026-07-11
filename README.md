# Desa Wisata Tritik

Website profil resmi Desa Wisata Tritik, Kecamatan Rejoso, Kabupaten Nganjuk, Jawa Timur.

## Tech Stack

### Frontend
- React.js + TypeScript
- Vite
- Tailwind CSS v4
- React Router DOM
- Framer Motion
- Lucide React
- React Leaflet

### Backend
- Golang
- Gin Framework
- REST API (GET only, in-memory data)

### Deployment
- Docker + Docker Compose

## Prerequisites

- Node.js >= 18
- Go >= 1.21 (untuk backend)
- Docker & Docker Compose (opsional)

## Menjalankan Project

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend berjalan di `http://localhost:5173`

### Backend

```bash
cd backend
go mod tidy
go run cmd/main.go
```

Backend berjalan di `http://localhost:8080`

### Docker (opsional)

```bash
docker-compose up --build
```

- Frontend: `http://localhost:3000`
- Backend: `http://localhost:8080`

## API Endpoints

| Method | Endpoint | Deskripsi |
|--------|----------|-----------|
| GET | `/api/home` | Data halaman beranda |
| GET | `/api/map` | Data lokasi & koordinat |
| GET | `/api/site` | Informasi situs purbakala |
| GET | `/api/gallery` | Daftar galeri foto |
| GET | `/api/visit` | Informasi kunjungan |
| GET | `/api/umkm` | Daftar UMKM |
| GET | `/api/news` | Daftar berita |
| GET | `/api/manager` | Informasi pengelola |

## Struktur Folder

```
nganjuk-tritik/
├── frontend/               # React + Vite + TypeScript
│   ├── public/assets/       # Static assets (hero-bg.png)
│   └── src/
│       ├── components/      # UI & layout components
│       ├── constants/       # Configuration constants
│       ├── data/            # Dummy data
│       ├── hooks/           # Custom React hooks
│       ├── pages/           # Page components
│       ├── routes/          # React Router setup
│       ├── services/        # API service layer
│       └── types/           # TypeScript type definitions
│
├── backend/                 # Golang + Gin
│   ├── cmd/                 # Application entrypoint
│   └── internal/
│       ├── config/          # Configuration
│       ├── data/            # In-memory dummy data
│       ├── handler/         # HTTP handlers
│       ├── middleware/       # CORS middleware
│       ├── model/           # Data models
│       └── route/           # Route definitions
│
├── docker-compose.yml
├── Dockerfile.frontend
└── Dockerfile.backend
```

## Roadmap

- [ ] Phase 1-2: Frontend (selesai)
- [ ] Phase 3: Backend GET endpoints (selesai)
- [ ] Phase 4: Integrasi frontend ↔ backend
- [ ] Phase 5: Migrasi ke PostgreSQL
- [ ] Phase 6: Admin panel / CMS

## Catatan

- Semua data saat ini menggunakan **dummy/placeholder data**.
- Backend menggunakan **in-memory data** (belum terhubung database).
- Ketika data dari client sudah lengkap, cukup ganti data di `frontend/src/data/dummy.ts` atau `backend/internal/data/dummy.go`.
- Untuk migrasi ke PostgreSQL, tambahkan GORM + layer repository.
