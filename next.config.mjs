/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental:{
    serverActions:true,
    serverComponentsExternalPackages:["mongoose"]
  },
  images:{
    domains:["nis-gs.pix.in"]
  }
};

export async function rewrites() {
  return [
    {
      source: '/api/:path*',
      destination: 'https://inshorts.com/api/:path*', // change this to your external API URL
    },
  ];
}

export default nextConfig;