module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "192.168.101.8",
      },
      {
        protocol: "https",
        hostname: "grace.codeilo.com",
      },
      {
        protocol: "https",
        hostname: "dashboard.gracesupportservices.com.au",
      },
    ],
  },
  env: {
    baseUrl: "https://dashboard.gracesupportservices.com.au/wp-json/my-api/v2",
  },
};
