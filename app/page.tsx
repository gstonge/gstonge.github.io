import Image from "next/image";
import { marked } from "marked";
import { FiFileText, FiMapPin } from "react-icons/fi";
import SocialLinks from "@/components/SocialLinks";
import { getAboutHtml, getNews } from "@/lib/data";
import { site } from "@/lib/site";

export default function Home() {
  const aboutHtml = getAboutHtml();
  const news = getNews();

  return (
    <div className="mx-auto max-w-5xl px-6">
      {/* Hero */}
      <section className="grid items-center gap-10 pt-16 pb-14 md:grid-cols-[1fr_240px] md:pt-24">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-accent">
            {site.role}
          </p>
          <h1 className="mt-3 font-serif text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
            {site.name}
          </h1>
          <p className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted">
            {site.affiliations.map((a, i) => (
              <span key={a.url}>
                <a
                  href={a.url}
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-foreground"
                >
                  {a.label}
                </a>
                {i < site.affiliations.length - 1 && (
                  <span className="ml-2 text-border">·</span>
                )}
              </span>
            ))}
          </p>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-foreground/90">
            {site.shortBio}
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a
              href={site.cv.en}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
            >
              <FiFileText size={15} /> CV (EN)
            </a>
            <a
              href={site.cv.fr}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              <FiFileText size={15} /> CV (FR)
            </a>
            <SocialLinks className="ml-1" />
          </div>
        </div>

        <div className="order-first md:order-last">
          <div className="relative h-40 w-40 overflow-hidden rounded-2xl ring-1 ring-border md:h-60 md:w-60">
            <Image
              src={site.photo}
              alt={site.name}
              fill
              priority
              sizes="240px"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <hr className="border-border" />

      {/* About */}
      <section className="py-14">
        <h2 className="mb-5 font-serif text-2xl font-medium tracking-tight">About</h2>
        <div
          className="prose-body max-w-3xl text-base leading-relaxed text-foreground/90"
          dangerouslySetInnerHTML={{ __html: aboutHtml }}
        />
        <p className="mt-6 flex items-center gap-2 text-sm text-muted">
          <FiMapPin size={15} /> {site.location}
        </p>
      </section>

      <hr className="border-border" />

      {/* News & activity */}
      <section className="py-14">
        <h2 className="mb-6 font-serif text-2xl font-medium tracking-tight">
          News &amp; activity
        </h2>
        <ul className="space-y-5">
          {news.map((item, i) => (
            <li
              key={i}
              className="grid gap-1 sm:grid-cols-[8rem_1fr] sm:gap-6"
            >
              <span className="pt-0.5 text-sm font-medium text-muted">
                {item.date}
              </span>
              <span className="text-base leading-relaxed">
                <span
                  dangerouslySetInnerHTML={{
                    __html: marked.parseInline(item.text, { async: false }) as string,
                  }}
                />
                {item.url && (
                  <>
                    {" "}
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
              </span>
            </li>
          ))}
        </ul>
      </section>

    </div>
  );
}
