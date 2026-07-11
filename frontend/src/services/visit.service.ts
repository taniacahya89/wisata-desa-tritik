import { api } from "./api";
import type { VisitDataResponse } from "../types";

export async function getVisitData(): Promise<VisitDataResponse> {
  return api.get<VisitDataResponse>("/api/visit");
}
