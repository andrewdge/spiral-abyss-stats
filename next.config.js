const withPlugins = require('next-compose-plugins');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})



module.exports = withPlugins([
  [withBundleAnalyzer],
],{
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