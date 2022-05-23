/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
      config.resolve.fallback.tls = false;
      config.resolve.fallback.net = false;
      config.resolve.fallback.child_process = false;
    }

    return config;
  },
  future: {
    webpack5: true,
  },
  fallback: {
    fs: false,
    tls: false,
    net: false,
    child_process: false,
  },
};

// module.exports = {
//   reactStrictMode: true,
//   // async redirects() {
//   //   return [
//   //     {
//   //       source: '/mint',
//   //       destination: '/mint',
//   //       permanent: true,
//   //     },
//   //     {
//   //       source: '/:path*',
//   //       destination: '/',
//   //       permanent: true,
//   //     },
//   //   ];
//   // },
// };
