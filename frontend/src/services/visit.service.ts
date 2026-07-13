import type { VisitDataResponse } from "../types";
import { DUMMY_FACILITIES, DUMMY_REGULATIONS, DUMMY_FAQ } from "../data/dummy";
import { OPERATING_HOURS } from "../constants/siteInfo";

export async function getVisitData(): Promise<VisitDataResponse> {
  return {
    operatingHours: OPERATING_HOURS,
    facilities: DUMMY_FACILITIES,
    regulations: DUMMY_REGULATIONS.map((r) => r.text),
    faq: DUMMY_FAQ,
  };
}
