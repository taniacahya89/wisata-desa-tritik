import type { Umkm } from "../types";
import { DUMMY_UMKM } from "../data/dummy";

export async function getUmkmData(): Promise<Umkm[]> {
  return DUMMY_UMKM;
}
