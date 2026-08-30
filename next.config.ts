import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const apiUrl = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3001";
const apiHostname = new URL(apiUrl).hostname;

// Public base URL of the R2 bucket product images are served from (matches the API's
// R2_PUBLIC_BASE_URL). When set, <Image> is allowed to load originals straight from the CDN.
const mediaUrl = process.env.NEXT_PUBLIC_MEDIA_URL;

const remotePatterns: NonNullable<NextConfig["images"]>["remotePatterns"] = [
  {
    protocol: apiUrl.startsWith("https") ? "https" : "http",
    hostname: apiHostname,
  },
];

if (mediaUrl) {
  remotePatterns.push({
    protocol: mediaUrl.startsWith("https") ? "https" : "http",
    hostname: new URL(mediaUrl).hostname,
  });
}

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns,
  },
};

export default withNextIntl(nextConfig);
