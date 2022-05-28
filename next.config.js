const withPWA = require("next-pwa");

const withTM = require('next-transpile-modules')([
  '@fullcalendar/common',
  '@fullcalendar/daygrid',
  '@fullcalendar/interaction',
  '@fullcalendar/list',
  '@fullcalendar/react',
  '@fullcalendar/timegrid',
  '@fullcalendar/timeline',
]);
//
module.exports = withPWA(withTM({
  swcMinify: false,
  trailingSlash: true,
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
  },
  env: {
    HOST_API_KEY: 'https://minimal-assets-api.vercel.app',
    MAPBOX: process.env.MAPBOX,
  },
  images: {
    domains: ['media.graphassets.com'],
  },
}));
