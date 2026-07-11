import { api } from "./api";
import type { MapDataResponse } from "../types";

export async function getMapData(): Promise<MapDataResponse> {
  return api.get<MapDataResponse>("/api/map");
}
