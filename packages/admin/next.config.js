/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: ["drive.google.com", "localhost"],
  },
  reactStrictMode: true,
}

const withTM = require("next-transpile-modules")(["@local/lib"])
module.exports = withTM(nextConfig)
