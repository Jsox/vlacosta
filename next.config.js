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
  // async headers() {
  //   return [
  //     {
  //       source: "https://mc.yandex.ru/metrika/watch.js",
  //       headers: [
  //         { key: "Access-Control-Allow-Credentials", value: "true" },
  //         { key: "Access-Control-Allow-Origin", value: "*" },
  //         { key: "Access-Control-Allow-Methods", value: "GET" },
  //         { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
  //       ]
  //     }
  //   ]
  // }
}));
