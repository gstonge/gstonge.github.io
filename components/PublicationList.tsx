"use client";

import { useMemo, useState } from "react";
import { FiSearch } from "react-icons/fi";
import PublicationItem from "./PublicationItem";
import type { Publication, PublicationsData } from "@/lib/types";

type Filter = "all" | "preprints" | "articles" | "theses";

const FILTERS: { key: Filter; label: string }[] = [
  { key: "all", label: "All" },
  { key: "articles", label: "Published" },
  { key: "preprints", label: "Preprints" },
  { key: "theses", label: "Theses" },
];

function matches(p: Publication, q: string) {
  if (!q) return true;
  const hay = `${p.title} ${p.authors} ${p.journal ?? ""} ${p.year}`.toLowerCase();
  return hay.includes(q.toLowerCase());
}

export default function PublicationList({ data }: { data: PublicationsData }) {
  const [filter, setFilter] = useState<Filter>("all");
  const [query, setQuery] = useState("");

  const sections = useMemo(() => {
    const all: { key: Filter; title: string; items: Publication[] }[] = [
      { key: "preprints", title: "Preprints", items: data.preprints },
      { key: "articles", title: "Published articles", items: data.articles },
      { key: "theses", title: "Theses", items: data.theses },
    ];
    return all
      .filter((s) => filter === "all" || s.key === filter)
      .map((s) => ({ ...s, items: s.items.filter((p) => matches(p, query)) }))
      .filter((s) => s.items.length > 0);
  }, [data, filter, query]);

  const counts: Record<Filter, number> = {
    all: data.preprints.length + data.articles.length + data.theses.length,
    preprints: data.preprints.length,
    articles: data.articles.length,
    theses: data.theses.length,
  };

  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-2">
          {FILTERS.map((f) => (
            <button
              key={f.key}
              type="button"
              onClick={() => setFilter(f.key)}
              className={`rounded-full px-3.5 py-1.5 text-sm transition-colors ${
                filter === f.key
                  ? "bg-accent text-white"
                  : "border border-border text-muted hover:text-foreground"
              }`}
            >
              {f.label}{" "}
              <span className={filter === f.key ? "opacity-80" : "opacity-60"}>
                {counts[f.key]}
              </span>
            </button>
          ))}
        </div>

        <div className="relative sm:w-64">
          <FiSearch
            size={15}
            className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted"
          />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search title, author, journal…"
            className="w-full rounded-full border border-border bg-surface py-1.5 pl-9 pr-3 text-sm outline-none placeholder:text-muted/70 focus:border-accent"
          />
        </div>
      </div>

      <div className="mt-10 space-y-14">
        {sections.length === 0 && (
          <p className="text-muted">No publications match your search.</p>
        )}
        {sections.map((s) => (
          <section key={s.key}>
            <h2 className="mb-5 font-serif text-2xl font-medium tracking-tight">
              {s.title}
            </h2>
            <ul>
              {s.items.map((p) => (
                <PublicationItem key={`${p.title}-${p.year}`} publi={p} />
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
