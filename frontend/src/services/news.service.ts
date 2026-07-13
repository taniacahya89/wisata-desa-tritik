import type { News } from "../types";
import { DUMMY_NEWS } from "../data/dummy";

export async function getNewsData(): Promise<News[]> {
  return DUMMY_NEWS;
}
