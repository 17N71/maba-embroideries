/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	swcMinify: false,
	images: { domains: ["cdn.sanity.io"] },
}

module.exports = nextConfig
