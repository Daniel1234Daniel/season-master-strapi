"use strict";
module.exports = ({ env }) => ({
    host: env('HOST', '0.0.0.0'),
    port: env.int('PORT', 1337),
    url: env('PUBLIC_URL', 'https://season-master-strapi.onrender.com'),
    app: {
        keys: env.array('APP_KEYS'),
    },
    proxy: true,
    admin: {
        auth: {
            secret: env('ADMIN_JWT_SECRET'),
        },
        url: '/admin',
    },
    settings: {
        cors: {
            enabled: true,
            origin: ['https://season-master-strapi.onrender.com'],
        },
    },
});
