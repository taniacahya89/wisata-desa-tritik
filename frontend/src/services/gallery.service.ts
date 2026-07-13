import type { GalleryItem } from "../types";
import { DUMMY_GALLERY, GALLERY_CATEGORIES } from "../data/dummy";

export async function getGalleryData(): Promise<GalleryItem[]> {
  return DUMMY_GALLERY;
}

export function getGalleryCategories(): string[] {
  return GALLERY_CATEGORIES;
}
