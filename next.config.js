/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "obyfhkjqe6llgete.public.blob.vercel-storage.com",
      "xia1l7ete9ghkuhd.public.blob.vercel-storage.com",
    ],
  },
};

module.exports = {
  ...nextConfig,
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};
