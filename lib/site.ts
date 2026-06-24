// Static profile info that rarely changes. (Was spread across Jekyll's _config.yml
// and index.html; consolidated here.)

export type SocialKey =
  | "email"
  | "scholar"
  | "github"
  | "bluesky"
  | "linkedin"
  | "orcid";

export interface SocialLink {
  key: SocialKey;
  name: string;
  url: string;
}

export interface Education {
  degree: string;
  institution: string;
  years: string;
}

export const site = {
  name: "Guillaume St-Onge",
  role: "Research Assistant Professor",
  shortBio:
    "I build mathematical models and computational tools to better predict, monitor, and control contagion dynamics in interconnected systems.",
  location: "Roux Institute, Portland ME, USA",
  email: "g.st-onge@northeastern.edu",
  photo: "/assets/images/headshot_v4.jpg",
  cv: {
    en: "/assets/resume/st-onge_cv_en.pdf",
    fr: "/assets/resume/st-onge_cv_fr.pdf",
  },
  // Affiliations rendered as inline links in the hero.
  affiliations: [
    {
      label: "Department of Physics, Northeastern University",
      url: "https://cos.northeastern.edu/physics/",
    },
    { label: "Roux Institute", url: "https://roux.northeastern.edu/" },
    {
      label: "Network Science Institute",
      url: "https://www.networkscienceinstitute.org/",
    },
  ],
  education: [
    { degree: "Ph.D. Physics", institution: "Université Laval", years: "2018–2022" },
    { degree: "M.Sc. Physics", institution: "Université Laval", years: "2015–2017" },
    { degree: "B.Sc. Physics", institution: "Université Laval", years: "2012–2015" },
  ] as Education[],
  social: [
    { key: "email", name: "Email", url: "mailto:g.st-onge@northeastern.edu" },
    {
      key: "scholar",
      name: "Google Scholar",
      url: "https://scholar.google.com/citations?user=UwKTgecAAAAJ",
    },
    { key: "github", name: "GitHub", url: "https://github.com/gstonge" },
    {
      key: "bluesky",
      name: "Bluesky",
      url: "https://bsky.app/profile/gstonge.bsky.social",
    },
    {
      key: "linkedin",
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/guillaume-st-onge-461b62128",
    },
    { key: "orcid", name: "ORCID", url: "https://orcid.org/0000-0001-5415-3748" },
  ] as SocialLink[],
} as const;

export const nav = [
  { label: "Home", href: "/" },
  { label: "Publications", href: "/publications" },
  { label: "Research", href: "/research" },
  { label: "Teaching", href: "/teaching" },
];
