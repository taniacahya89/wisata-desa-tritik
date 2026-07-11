import { api } from "./api";
import type { SiteDataResponse } from "../types";

export async function getSiteData(): Promise<SiteDataResponse> {
  return api.get<SiteDataResponse>("/api/site");
}
