import type { ManagerDataResponse } from "../types";
import { DUMMY_MANAGERS, DUMMY_BIDANGS, DUMMY_PARTNERS } from "../data/dummy";

export async function getManagerData(): Promise<ManagerDataResponse> {
  return {
    organizationName: "Pokdarwis Tritik Purba",
    description:
      "Site Museum Tritik dikelola oleh Kelompok Sadar Wisata (Pokdarwis) Tritik Purba, mitra pemerintah desa dalam pengembangan wisata edukasi di kawasan Tritik.",
    legalBasis:
      "Keputusan Kepala Desa Tritik, Kecamatan Rejoso, Kabupaten Nganjuk Nomor 190/23/K/411.516.2023/2025 tentang Pembentukan Pokdarwis Tritik Purba, ditetapkan di Tritik pada 4 Desember 2025 oleh Kepala Desa Tritik (Hartoyo, SE), dengan masa kerja kepengurusan 3 tahun. Susunan pengurus disepakati melalui Musyawarah Desa pada Kamis, 4 Desember 2025 pukul 09.30 WIB di Balai Desa Tritik, dengan penyuluhan dari Dinas PORABUDPAR Kabupaten Nganjuk.",
    managers: DUMMY_MANAGERS,
    bidangs: DUMMY_BIDANGS,
    partners: DUMMY_PARTNERS,
  };
}
