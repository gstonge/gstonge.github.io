import type { IconType } from "react-icons";
import { FaGithub, FaLinkedinIn, FaOrcid } from "react-icons/fa6";
import { FiMail } from "react-icons/fi";
import { SiBluesky, SiGooglescholar } from "react-icons/si";
import { site, type SocialKey } from "@/lib/site";

const icons: Record<SocialKey, IconType> = {
  email: FiMail,
  scholar: SiGooglescholar,
  github: FaGithub,
  bluesky: SiBluesky,
  linkedin: FaLinkedinIn,
  orcid: FaOrcid,
};

export default function SocialLinks({
  size = 19,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <ul className={`flex flex-wrap items-center gap-2 ${className}`}>
      {site.social.map((s) => {
        const Icon = icons[s.key];
        return (
          <li key={s.key}>
            <a
              href={s.url}
              target={s.key === "email" ? undefined : "_blank"}
              rel="noreferrer"
              aria-label={s.name}
              title={s.name}
              className="grid h-9 w-9 place-items-center rounded-md text-muted transition-colors hover:bg-accent-soft hover:text-accent"
            >
              <Icon size={size} />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
