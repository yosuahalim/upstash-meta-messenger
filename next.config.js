/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: [
      "links.papareact.com",
      "en.gravatar.com",
      "platform-lookaside.fbsbx.com",
    ],
  },
  experimental: {
    appDir: true,
  },
};
