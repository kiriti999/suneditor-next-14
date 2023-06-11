const path = require("path");
const nextTranslate = require('next-translate-plugin')

/** @type {import('next').NextConfig} */
const nextConfig = nextTranslate({
  reactStrictMode: true,
  swcMinify: true,
  output: 'standalone',
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  env: {
    JWT_SECRET: "djhfghbdsgrasklkajsdgf",
  }
})

module.exports = nextConfig
