import {createRequire} from 'module';
const require = createRequire(import.meta.url);
const withMDX = require('@next/mdx')();
/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        port: '',
        pathname: "/u/**"
      },
      {
        protocol: "https",
        hostname: "img.icons8.com",
        port: '',
        pathname: "/**"
      }
    ]
  },
};

export default withMDX((nextConfig));
