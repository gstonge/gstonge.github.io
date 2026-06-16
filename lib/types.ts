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
  // "article" -> New article in <journal>: <title>
  // "preprint" -> New preprint: <title>
  // "note" (or omitted) -> free text (inline markdown ok)
  type?: "article" | "preprint" | "note";
  title?: string;
  journal?: string;
  text?: string;
  url?: string;
  html?: string; // note text pre-rendered to HTML at build time
}
