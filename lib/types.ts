export interface Publication {
  title: string;
  authors: string;
  year: number | string;
  journal?: string;
  volume?: number | string;
  pagenumber?: number | string;
  fulltext?: string;
  arxiv?: string;
  medrxiv?: string;
  github?: string;
  chapter?: string;
  subtitle?: string;
  insubmission?: boolean;
  inpress?: boolean;
  book?: string;
  editor?: string;
  publisher?: string;
  // theses
  thesis?: boolean;
  type?: string;
  "thesis-fulltext"?: string;
}

export interface PublicationsData {
  preprints: Publication[];
  articles: Publication[];
  theses: Publication[];
}

export interface NewsItem {
  date: string;
  text: string;
  url?: string;
}
