const { i18n } = require("./next-i18next.config")

module.exports = {
  i18n,
  // enables collocation of tests and stories with pages
  pageExtensions: ["page.tsx"],
  // typescript: {
  //   // we run TypeScript as a separate check on CI, no need to check during build
  //   ignoreBuildErrors: true,
  // },
  // eslint: {
  //   // we run ESLint as a separate check on CI, no need to check during build
  //   // during development also lets us run builds during with non-relevant lint errors in non-related files
  //   ignoreDuringBuilds: true,
  // },
}
