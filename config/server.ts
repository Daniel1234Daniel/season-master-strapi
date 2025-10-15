"use strict";

module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),

  // url: env('PUBLIC_URL', 'https://season-master-strapi.onrender.com'),

  proxy: true, 

  app: {
    keys: env.array('APP_KEYS'),
  },

  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET'),
    },
    url: '/admin',
  },
});
