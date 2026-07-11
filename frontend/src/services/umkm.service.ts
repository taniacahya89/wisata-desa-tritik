import { api } from "./api";
import type { Umkm } from "../types";

export async function getUmkmData(): Promise<Umkm[]> {
  return api.get<Umkm[]>("/api/umkm");
}
