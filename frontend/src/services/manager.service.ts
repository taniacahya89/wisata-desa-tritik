import type { ManagerDataResponse } from "../types";
import { DUMMY_MANAGERS, DUMMY_PARTNERS } from "../data/dummy";

export async function getManagerData(): Promise<ManagerDataResponse> {
  return {
    managers: DUMMY_MANAGERS,
    partners: DUMMY_PARTNERS,
  };
}
