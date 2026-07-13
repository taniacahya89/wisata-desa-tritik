import type { Attraction, OperatingHour } from "../types";
import { DUMMY_ATTRACTIONS } from "../data/dummy";
import { SITE_DESCRIPTION, OPERATING_HOURS } from "../constants/siteInfo";

export interface HomeDataResponse {
  description: string;
  attractions: Attraction[];
  operatingHours: OperatingHour[];
}

export async function getHomeData(): Promise<HomeDataResponse> {
  return {
    description: SITE_DESCRIPTION,
    attractions: DUMMY_ATTRACTIONS,
    operatingHours: OPERATING_HOURS,
  };
}
