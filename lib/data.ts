import fs from "node:fs";
import path from "node:path";
import yaml from "js-yaml";
import { marked } from "marked";
import type { NewsItem, PublicationsData } from "./types";

// The site keeps its content in the same `_data/*.yml` files the Jekyll site used,
// so publications stay editable as plain YAML (and the update-publications workflow
// keeps working). About text stays in `about.md`.
const root = process.cwd();
const dataDir = path.join(root, "_data");

function readYaml<T>(file: string): T {
  const raw = fs.readFileSync(path.join(dataDir, file), "utf8");
  return yaml.load(raw) as T;
}

export function getPublications(): PublicationsData {
  const data = readYaml<Partial<PublicationsData>>("publications.yml");
  return {
    preprints: data.preprints ?? [],
    articles: data.articles ?? [],
    theses: data.theses ?? [],
  };
}

export function getNews(): NewsItem[] {
  return readYaml<NewsItem[]>("news.yml") ?? [];
}

/** Raw markdown of the "About" blurb, rendered to HTML at build time. */
export function getAboutHtml(): string {
  const raw = fs.readFileSync(path.join(root, "about.md"), "utf8");
  return marked.parse(raw, { async: false }) as string;
}
