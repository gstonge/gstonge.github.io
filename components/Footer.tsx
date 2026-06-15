import SocialLinks from "./SocialLinks";
import { site } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
        <p className="text-sm text-muted">
          © {year} {site.name}
        </p>
        <SocialLinks size={18} />
      </div>
    </footer>
  );
}
