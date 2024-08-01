module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  env: {
    // baseUrl: 'http://192.168.101.13/grace/wp-json/my-api/v2',
    baseUrl: 'http://localhost:5000',
  },
};
