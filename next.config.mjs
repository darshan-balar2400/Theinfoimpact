/** @type {import('next').NextConfig} */
import { createProxyMiddleware } from 'http-proxy-middleware';
import nodeExternals from 'webpack-node-externals';

const nextConfig = {};

export async function rewrites() {
  return [
    {
      source: '/api/:path*',
      destination: 'https://inshorts.com/api/:path*', // change this to your external API URL
    },
  ];
}
