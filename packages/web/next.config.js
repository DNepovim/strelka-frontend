/** @type {import('next').NextConfig} */

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
})
module.exports = withBundleAnalyzer({})

module.exports = {
  i18n: {
    locales: ["cs"],
    defaultLocale: "cs",
  },
}

const withTM = require("next-transpile-modules")(["@local/lib"])
module.exports = withTM()
