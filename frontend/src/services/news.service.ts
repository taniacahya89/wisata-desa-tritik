import { api } from "./api";
import type { News } from "../types";

export async function getNewsData(): Promise<News[]> {
  return api.get<News[]>("/api/news");
}
