/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/login',
        permanent: true,
      }];
  },
  async rewrites() {
    return [
      {
        source: '/dashboard',
        destination: '/partner/bookings'
      },{
        source: '/dashboard/history',
        destination: '/partner/history'
      }
    ];
  }
};

module.exports = nextConfig;
