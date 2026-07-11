import { api } from "./api";
import type { Attraction, OperatingHour } from "../types";

export interface HomeDataResponse {
  description: string;
  attractions: Attraction[];
  operatingHours: OperatingHour[];
}

export async function getHomeData(): Promise<HomeDataResponse> {
  return api.get<HomeDataResponse>("/api/home");
}
