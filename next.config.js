module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '192.168.101.8',
      },
      {
        protocol: 'https',
        hostname: 'grace.codeilo.com',
      },
    ],
  },
  env: {
    localhostIp: '192.168.101.8',
    baseUrl: 'https://grace.codeilo.com/api/wp-json/my-api/v2',
    // baseUrl: 'http://192.168.101.8/grace/wp-json/my-api/v2',
    // baseUrl: 'http://localhost:5000',
  },
};
