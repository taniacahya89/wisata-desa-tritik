import type { MapDataResponse } from "../types";
import { SITE_COORDINATES, SITE_ADDRESS } from "../constants/siteInfo";

export async function getMapData(): Promise<MapDataResponse> {
  return {
    coordinates: { lat: SITE_COORDINATES.lat, lng: SITE_COORDINATES.lng },
    address: SITE_ADDRESS,
    directions: [
      {
        from: "Kota Nganjuk",
        description:
          "Dari pusat Kota Nganjuk, ambil arah ke Kecamatan Rejoso sejauh ±20 km. Ikuti jalan menuju Desa Tritik.",
      },
      {
        from: "Kediri",
        description:
          "Dari Kediri, ambil jalur menuju Nganjuk kemudian belok ke arah Rejoso hingga sampai di Desa Tritik.",
      },
      {
        from: "Surabaya",
        description:
          "Dari Surabaya, gunakan tol Kertosono keluar di pintu tol Nganjuk, lanjut ke arah Rejoso menuju Desa Tritik.",
      },
    ],
  };
}
