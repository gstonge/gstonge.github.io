"use client";

import { useRef, useState } from "react";
import type { NewsItem } from "@/lib/types";

const PAGE_SIZE = 8;

export default function NewsFeed({ items }: { items: NewsItem[] }) {
  const [page, setPage] = useState(0);
  const topRef = useRef<HTMLDivElement>(null);

  const pageCount = Math.ceil(items.length / PAGE_SIZE);
  const start = page * PAGE_SIZE;
  const shown = items.slice(start, start + PAGE_SIZE);

  function go(p: number) {
    setPage(Math.min(Math.max(0, p), pageCount - 1));
    topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <div ref={topRef} className="scroll-mt-24">
      <ul className="space-y-5">
        {shown.map((item, i) => (
          <li
            key={start + i}
            className="grid gap-1 sm:grid-cols-[8rem_1fr] sm:gap-6"
          >
            <span className="pt-0.5 text-sm font-medium text-muted">
              {item.date}
            </span>
            <span className="text-base leading-relaxed">
              {item.type === "preprint" ? (
                <>
                  New preprint:{" "}
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-accent hover:underline"
                  >
                    {item.title}
                  </a>
                </>
              ) : item.type === "article" ? (
                <>
                  New article in <em>{item.journal}</em>:{" "}
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-accent hover:underline"
                  >
                    {item.title}
                  </a>
                </>
              ) : (
                <>
                  <span dangerouslySetInnerHTML={{ __html: item.html ?? "" }} />
                  {item.url && (
                    <>
                      {"\u00A0"}
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-accent underline-offset-2 hover:underline"
                      >
                        ↗
                      </a>
                    </>
                  )}
                </>
              )}
            </span>
          </li>
        ))}
      </ul>

      {pageCount > 1 && (
        <nav
          className="mt-8 flex items-center justify-center gap-1"
          aria-label="News pages"
        >
          <button
            type="button"
            onClick={() => go(page - 1)}
            disabled={page === 0}
            aria-label="Previous page"
            className="grid h-8 w-8 place-items-center rounded-md text-muted transition-colors hover:text-foreground disabled:opacity-30 disabled:hover:text-muted"
          >
            ‹
          </button>
          {Array.from({ length: pageCount }).map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => go(i)}
              aria-current={i === page ? "page" : undefined}
              className={`h-8 min-w-8 rounded-md px-2 text-sm transition-colors ${
                i === page
                  ? "bg-accent text-white"
                  : "text-muted hover:bg-surface hover:text-foreground"
              }`}
            >
              {i + 1}
            </button>
          ))}
          <button
            type="button"
            onClick={() => go(page + 1)}
            disabled={page === pageCount - 1}
            aria-label="Next page"
            className="grid h-8 w-8 place-items-center rounded-md text-muted transition-colors hover:text-foreground disabled:opacity-30 disabled:hover:text-muted"
          >
            ›
          </button>
        </nav>
      )}
    </div>
  );
}
