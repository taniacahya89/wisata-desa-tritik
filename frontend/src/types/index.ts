export interface NavItem {
  label: string;
  path: string;
}

export interface OperatingHour {
  days: string;
  hours: string;
  isClosed?: boolean;
}

export interface News {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  thumbnail: string;
}

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  category: string;
}

export interface Umkm {
  id: string;
  name: string;
  description: string;
  image: string;
  contact: string;
  location: string;
  category: string;
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

export interface Manager {
  name: string;
  role: string;
  image: string;
}

export interface Attraction {
  icon: string;
  title: string;
  description: string;
}

export interface Facility {
  icon: string;
  name: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Regulation {
  text: string;
}

export interface Partner {
  name: string;
  logo: string;
}

export interface Direction {
  from: string;
  description: string;
}

export interface MapDataResponse {
  coordinates: { lat: number; lng: number };
  address: string;
  directions: Direction[];
}

export interface SiteDataResponse {
  title: string;
  description: string;
  history: string;
  timeline: TimelineEvent[];
}

export interface VisitDataResponse {
  operatingHours: OperatingHour[];
  facilities: Facility[];
  regulations: string[];
  faq: FaqItem[];
}

export interface ManagerDataResponse {
  managers: Manager[];
  partners: Partner[];
}




