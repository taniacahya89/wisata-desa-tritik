import { api } from "./api";
import type { ManagerDataResponse } from "../types";

export async function getManagerData(): Promise<ManagerDataResponse> {
  return api.get<ManagerDataResponse>("/api/manager");
}
