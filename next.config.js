const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})


module.exports = withPlugins(
//individual plugins
[
  [withBundleAnalyzer],
  [withImages]
],
//global config
{
  reactStrictMode: true,
  images: {
    disableStaticImages: true,
  },
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|png|mp4)',
        locale: false,
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=9999999999, must-revalidate',
          }
        ],
      },
    ]
  },
});