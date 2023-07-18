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
    ALGOLIA_ADMIN_KEY: "183f7ddb740690df8b6fe7cd82008198",
    RAZORPAY_KEY:"rzp_test_TzmRUbStt5mrDV",
    RAZORPAY_SECRET:"dW0gyFZ7RZKuhhhtq4h6XH0a"
  }
})

module.exports = nextConfig
