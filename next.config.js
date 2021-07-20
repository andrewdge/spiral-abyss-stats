const withPlugins = require('next-compose-plugins');

module.exports = withPlugins([
  
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