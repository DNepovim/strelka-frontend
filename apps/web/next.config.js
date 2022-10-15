/** @type {import('next').NextConfig} */

// module.exports = {
//   i18n: {
//     locales: ["cs"],
//     defaultLocale: "cs",
//   },
//   images: {
//     domains: ["picsum.photos"],
//   },
// }

const withTM = require("next-transpile-modules")(["@strelka/ui"])

module.exports = withTM({
  i18n: {
    locales: ["cs"],
    defaultLocale: "cs",
  },
  images: {
    domains: ["picsum.photos"],
  },
})
