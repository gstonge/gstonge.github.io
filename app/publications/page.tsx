import type { Metadata } from "next";
import PublicationList from "@/components/PublicationList";
import { getPublications } from "@/lib/data";

export const metadata: Metadata = { title: "Publications" };

export default function PublicationsPage() {
  const data = getPublications();
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <header className="mb-10">
        <h1 className="font-serif text-4xl font-semibold tracking-tight">
          Publications
        </h1>
        <p className="mt-3 max-w-2xl text-muted">
          Peer-reviewed articles, preprints, and theses. See also my{" "}
          <a
            href="https://scholar.google.com/citations?user=UwKTgecAAAAJ"
            target="_blank"
            rel="noreferrer"
            className="text-accent hover:underline"
          >
            Google Scholar
          </a>{" "}
          profile.
        </p>
      </header>
      <PublicationList data={data} />
    </div>
  );
}
