import type { Metadata } from "next";
import { FiTool } from "react-icons/fi";

export const metadata: Metadata = { title: "Research" };

export default function ResearchPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="font-serif text-4xl font-semibold tracking-tight">Research</h1>

      <div className="mt-16 flex flex-col items-center justify-center rounded-2xl border border-dashed border-border py-24 text-center">
        <div className="grid h-12 w-12 place-items-center rounded-full bg-accent-soft text-accent">
          <FiTool size={22} />
        </div>
        <p className="mt-5 font-serif text-xl font-medium text-foreground">
          Under construction
        </p>
        <p className="mt-2 max-w-md text-muted">
          A detailed overview of my research themes is on its way. In the
          meantime, my{" "}
          <a href="/publications" className="text-accent hover:underline">
            publications
          </a>{" "}
          give the best picture of what I work on.
        </p>
      </div>
    </div>
  );
}
