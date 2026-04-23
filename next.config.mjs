/** @type {import('next').NextConfig} */
const nextConfig = {
  // Vercel: full SSR + API routes. For static export set STATIC_BUILD=1.
  ...(process.env.STATIC_BUILD === '1' ? { output: 'export' } : {}),
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
