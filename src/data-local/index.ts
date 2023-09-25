import {
  CINEMAS as CINEMAS_2022,
  CITIES as CITIES_2022,
  DAYS as DAYS_2022,
  films as FILMS_2022,
} from "./2022/films";
import {
  CINEMAS as CINEMAS_2023,
  CITIES as CITIES_2023,
  DAYS as DAYS_2023,
  films as FILMS_2023,
} from "./2023/films";

import config from "../../config.json";
import { partenairesSections as partenairesSections_2022 } from "./2022/partenaires";
import { partenairesSections as partenairesSections_2023 } from "./2023/partenaires";
const edition = config.EDITION;

export const cities: Record<string, Record<string, string>> = {
  "2022": CITIES_2022,
  "2023": CITIES_2023,
};

export const days: Record<string, Record<string, string>> = {
  "2022": DAYS_2022,
  "2023": DAYS_2023,
};

export interface Cinema {
  name: string;
  address: string;
  zip: string;
  city: string;
  gps: {
    latitude: string;
    longitude: string;
  };
  bus?: string;
  ter?: string;
  otherTransport?: {
    name: string;
    description: string;
    link: string;
  };
  access?: string;
  ticketingOpenDate: string;
  ticketingRedirection: string;
  ticketingMessage?: string;
  organization: string;
  phone: string;
  website: string;
  navigation: string;
}

export const cinemas: Record<string, Record<string, Cinema>> = {
  "2022": CINEMAS_2022,
  "2023": CINEMAS_2023,
};

export interface City {
  city: string;
  day: string;
  theme?: string;
  moment: string;
  debatMoment: string;
  debat?: string;
  animator: string;
  participants: {
    name: string;
    description: string;
  }[];
  cinema: Cinema;
}

export interface Film {
  edition: number;
  title: string;
  author: string;
  releaseDate: number;
  duration: string;
  originalTitle: string;
  theme: string;
  image: {
    summary: string;
    programmation: string;
  };
  summary: string;
  trailer: string;
  debat: string;
  redirect: string;
  styles: { color: string };
  cities: City[];
}
export const films: Record<string, Film[]> = {
  "2022": FILMS_2022,
  "2023": FILMS_2023,
};

export interface Partenaire {
  name: string;
  logo: string;
  url: string;
  dark?: boolean;
}

export interface PartenaireSection {
  title: string;
  partenaires: Partenaire[];
}

export const partenairesSections: Record<string, PartenaireSection[]> = {
  2022: partenairesSections_2022,
  2023: partenairesSections_2023,
};
