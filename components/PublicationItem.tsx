import { Fragment } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import type { Publication } from "@/lib/types";

const ME = "Guillaume St-Onge";

function highlightAuthors(authors: string) {
  const segments = authors.split(ME);
  return segments.map((seg, i) => (
    <Fragment key={i}>
      {seg}
      {i < segments.length - 1 && (
        <span className="font-semibold text-foreground">{ME}</span>
      )}
    </Fragment>
  ));
}

function MetaLine({ publi }: { publi: Publication }) {
  if (publi.insubmission) {
    return (
      <p className="mt-1 text-sm text-muted">
        <span className="font-medium text-foreground/80">Preprint</span> · {publi.year}
      </p>
    );
  }
  if (publi.thesis) {
    return (
      <p className="mt-1 text-sm text-muted">
        {publi.type} thesis · {publi.year}
      </p>
    );
  }
  if (publi.journal) {
    return (
      <p className="mt-1 text-sm text-muted">
        <span className="italic">{publi.journal}</span>
        {publi.volume ? <> <span className="font-medium text-foreground/80">{publi.volume}</span></> : null}
        {publi.pagenumber ? <>, {publi.pagenumber}</> : null} ({publi.year})
      </p>
    );
  }
  return null;
}

function LinkButton({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-1 rounded-full border border-border px-3 py-1 text-xs font-medium text-muted transition-colors hover:border-accent hover:text-accent"
    >
      {label}
      <FiArrowUpRight size={12} />
    </a>
  );
}

export default function PublicationItem({ publi }: { publi: Publication }) {
  const rawThesis = publi["thesis-fulltext"];
  // Thesis paths in the YAML are root-relative without a leading slash
  // (e.g. "assets/pdf/..."), which would resolve wrongly under /publications/.
  const thesisFulltext =
    rawThesis && !/^(https?:)?\//.test(rawThesis) ? `/${rawThesis}` : rawThesis;
  return (
    <li className="border-b border-border py-5 first:pt-0">
      <h3 className="font-medium leading-snug text-foreground">{publi.title}</h3>
      {publi.subtitle && (
        <p className="mt-0.5 text-sm italic text-muted">{publi.subtitle}</p>
      )}
      <p className="mt-1.5 text-sm leading-relaxed text-muted">
        {highlightAuthors(publi.authors)}
      </p>
      <MetaLine publi={publi} />
      <div className="mt-3 flex flex-wrap gap-2">
        {publi.fulltext && <LinkButton href={publi.fulltext} label="Journal" />}
        {thesisFulltext && <LinkButton href={thesisFulltext} label="Thesis" />}
        {publi.arxiv && <LinkButton href={publi.arxiv} label="arXiv" />}
        {publi.medrxiv && <LinkButton href={publi.medrxiv} label="medRxiv" />}
        {publi.github && <LinkButton href={publi.github} label="Code" />}
        {publi.chapter && <LinkButton href={publi.chapter} label="Chapter" />}
      </div>
    </li>
  );
}
