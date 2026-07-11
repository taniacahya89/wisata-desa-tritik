import { api } from "./api";
import type { GalleryItem } from "../types";
import { GALLERY_CATEGORIES } from "../data/dummy";

export async function getGalleryData(): Promise<GalleryItem[]> {
  return api.get<GalleryItem[]>("/api/gallery");
}

export function getGalleryCategories(): string[] {
  return GALLERY_CATEGORIES;
}
