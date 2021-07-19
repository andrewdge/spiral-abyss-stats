module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['spiralabyss.s3.amazonaws.com'],
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
}