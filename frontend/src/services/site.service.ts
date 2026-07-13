import type { SiteDataResponse } from "../types";
import { DUMMY_TIMELINE } from "../data/dummy";
import { SITE_NAME, SITE_DESCRIPTION } from "../constants/siteInfo";

export async function getSiteData(): Promise<SiteDataResponse> {
  return {
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    history:
      "Desa Tritik menyimpan kekayaan sejarah yang luar biasa. Kawasan Perbukitan Kendeng di sekitar desa ini menjadi tempat ditemukannya berbagai peninggalan megalitik dan fosil purba yang membuktikan adanya kehidupan manusia sejak ribuan tahun silam. Site Museum Tritik kemudian didirikan sebagai pusat konservasi dan edukasi untuk melestarikan temuan-temuan berharga tersebut agar dapat dinikmati oleh generasi mendatang.",
    timeline: DUMMY_TIMELINE,
  };
}
