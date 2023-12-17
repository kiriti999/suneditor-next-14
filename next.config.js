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
    CLOUDINARY_UPLOAD_PRESET: "whatsnxt",
    CLOUDINARY_NAME: "cloudinary999",
    CLOUDINARY_API_KEY: "429854764125427",
    CLOUDINARY_SECRET: "PxEdUKCLC9Shs-DJbMWUEmZGC-s",
    CLOUDINARY_VIDEO_URL: "https://api.cloudinary.com/v1_1/cloudinary999/video/upload",
    CLOUDINARY_IMAGE_UPLOAD_URL: "https://api.cloudinary.com/v1_1/cloudinary999/image/upload",
    RAZORPAY_KEY:"rzp_test_Hcj2J7EzzLmTmT",
    RAZORPAY_SECRET:"xu5OFmEGZrOxDxx7w2n4P1mQ",
    NEXT_PUBLIC_ALGOLIA_APP_ID: "9SA5PPC1N4",
    ALGOLIA_SEARCH_ADMIN_KEY: "183f7ddb740690df8b6fe7cd82008198",
    NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY: "dda22bdfa7963a4e2fec2f95b4846863",
    GOOGLE_CLIENT_ID: "42512366785-cdpagtcjkqdvfdlp2o5ev1r4i1ugn2vq.apps.googleusercontent.com",
    GOOGLE_CLIENT_SECRET: "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",
    NEXTAUTH_URL: "http://localhost:3000",
    NEXTAUTH_SECRET: "+rdn5CF59AAowlvt9Yg7gDoGkJpf1ErzZkbaEz8XjT0="
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production"
  },
})

module.exports = nextConfig
