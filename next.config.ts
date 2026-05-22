import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const apiUrl = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3001';
const apiHostname = new URL(apiUrl).hostname;

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: apiUrl.startsWith('https') ? 'https' : 'http',
        hostname: apiHostname,
      },
    ],
  },
};

export default withNextIntl(nextConfig);
