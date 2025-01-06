import Api from './src/utils/Api.js';


/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: Api.domain,
          pathname: '**',
        },
      ],
    },
};

export default nextConfig;
