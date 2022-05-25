const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

/** @type {import('next').NextConfig} */
const nextConfig = (phase) => {
  const IS_DEV = phase === PHASE_DEVELOPMENT_SERVER;

  return {
    reactStrictMode: true,
    experimental: {
      externalDir: true,
    },
    swcMinify: true,
    webpack: (config, { webpack }) => {
      config.optimization.concatenateModules = false;
      // config.stats.maxModule = Infinity;
      // config.stats.optimizationBailout = true;
      config.plugins.push(new webpack.ProgressPlugin({ profile: true }));
      // config.plugins.push(
      //   new BundleAnalyzerPlugin({
      //     analyzerPort: 5001,
      //   })
      // );
      return config;
    },
  };
};

module.exports = nextConfig;
