require('dotenv').config();

/** @type {import('next').NextConfig} */
const forDockerDevelopment = () => {
  if (process.env.MACHINE !== 'docker') return {};
  return {
    webpackDevMiddleware: config => {
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
      };
      return config;
    },
  };
};

const nextConfig = {
  env: {
    PORT: process.env.PORT,
    STAGE: process.env.STAGE,
    YOUTUBE_API_KEY: process.env.YOUTUBE_API_KEY,
    WEB_PASSWORD: process.env.WEB_PASSWORD,
    SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
  },
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },

  images: {
    unoptimized: true,
    domains: [
      'd1nzwmcp9dgg5h.cloudfront.net',
      'rqbgrdsdkazwogdqjqxi.supabase.co',
      'utfs.io',
      'renewmediaproductions.com',
    ],
    remotePatterns: [
      new URL('https://s3.amazonaws.com/renewmediaproductions.com/**'),
      new URL('https://s3.amazonaws.com/**'),
    ],
    minimumCacheTTL: 60,
  },

  async headers() {
    return [
      {
        source: '/:all*',
        headers: [
          {
            key: 'Cache-Control',
            value: `s-maxage=${60 * 60 * 24 * 365}, stale-while-revalidate=${60 * 60 * 24}`,
          },
        ],
      },
    ];
  },

  webpack(config) {
    // Fix for rule.test.test crash
    const fileLoaderRule = config.module.rules.find(
      rule => rule?.test instanceof RegExp && rule.test.test('.svg')
    );

    if (fileLoaderRule) {
      fileLoaderRule.exclude = /\.svg$/i;
    }

    // Optional: add support for @svgr/webpack
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },

  ...forDockerDevelopment(),
};

module.exports = nextConfig;
