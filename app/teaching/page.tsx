import type { Metadata } from "next";
import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";

export const metadata: Metadata = { title: "Teaching" };

export default function TeachingPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="font-serif text-4xl font-semibold tracking-tight">Teaching</h1>
      <p className="mt-3 max-w-2xl text-muted">
        Course materials are coming soon. For now, here is a sourcebook I
        contribute to.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        <a
          href="https://cosmo-notes.github.io/"
          target="_blank"
          rel="noreferrer"
          className="group block overflow-hidden rounded-2xl border border-border transition-all hover:-translate-y-0.5 hover:border-accent hover:shadow-lg"
        >
          <div className="relative aspect-[2/1] overflow-hidden bg-surface">
            <Image
              src="/assets/teaching/cosmo-notes.png"
              alt="cosmo-notes — Complex Systems Modelling open notes"
              fill
              sizes="(min-width: 640px) 50vw, 100vw"
              className="object-cover object-bottom transition-transform duration-500 group-hover:scale-[1.03]"
            />
          </div>
          <div className="flex items-start justify-between gap-3 p-5">
            <div>
              <h2 className="font-medium text-foreground">cosmo-notes</h2>
              <p className="mt-1 text-sm text-muted">
                Lecture notes on complex systems modeling
              </p>
            </div>
            <FiArrowUpRight
              size={18}
              className="mt-0.5 shrink-0 text-muted transition-colors group-hover:text-accent"
            />
          </div>
        </a>
      </div>
    </div>
  );
}
