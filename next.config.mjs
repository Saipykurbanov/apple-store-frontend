import Api from './src/utils/Api.js';


/** @type {import('next').NextConfig} */
const nextConfig = {
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
