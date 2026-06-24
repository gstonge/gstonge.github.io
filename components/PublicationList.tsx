"use client";

import { useMemo, useState } from "react";
import PublicationItem from "./PublicationItem";
import type { Publication, PublicationsData } from "@/lib/types";

type Filter = "all" | "preprints" | "articles" | "theses";

const FILTERS: { key: Filter; label: string }[] = [
  { key: "all", label: "All" },
  { key: "articles", label: "Published" },
  { key: "preprints", label: "Preprints" },
  { key: "theses", label: "Theses" },
];

export default function PublicationList({ data }: { data: PublicationsData }) {
  const [filter, setFilter] = useState<Filter>("all");

  const sections = useMemo(() => {
    const all: { key: Filter; title: string; items: Publication[] }[] = [
      { key: "preprints", title: "Preprints", items: data.preprints },
      { key: "articles", title: "Published articles", items: data.articles },
      { key: "theses", title: "Theses", items: data.theses },
    ];
    // TODO: topic-tag filter would layer in here as a second dimension.
    return all
      .filter((s) => filter === "all" || s.key === filter)
      .filter((s) => s.items.length > 0);
  }, [data, filter]);

  const counts: Record<Filter, number> = {
    all: data.preprints.length + data.articles.length + data.theses.length,
    preprints: data.preprints.length,
    articles: data.articles.length,
    theses: data.theses.length,
  };

  return (
    <div>
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

      <div className="mt-10 space-y-14">
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
