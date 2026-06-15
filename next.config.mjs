/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static HTML export so the site can deploy to GitHub Pages, like the Jekyll site does.
  output: "export",
  // next/image needs the default loader disabled for a static export.
  images: { unoptimized: true },
  // Emit /publications/index.html etc. so clean URLs work on GitHub Pages.
  trailingSlash: true,
};

export default nextConfig;
