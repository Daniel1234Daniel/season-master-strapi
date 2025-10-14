export default [
    async (ctx, next) => {
    console.log('Request protocol:', ctx.request.protocol);
    console.log('X-Forwarded-Proto:', ctx.request.header['x-forwarded-proto']);
    console.log('COOKIE_SECURE:', process.env.COOKIE_SECURE);
    await next();
  },
  'strapi::logger',
  'strapi::errors',
 {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "connect-src": ["'self'", "https:"],
          "img-src": [
            "'self'",
            "data:",
            "blob:",
            "market-assets.strapi.io",
            "res.cloudinary.com",
          ],
          "media-src": [
            "'self'",
            "data:",
            "blob:",
            "market-assets.strapi.io",
            "res.cloudinary.com",
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
   {
    name: 'strapi::session',
    config: {
      cookie: {
        secure: process.env.COOKIE_SECURE === 'true',
      },
    },
  },
  'strapi::favicon',
  'strapi::public',
];
