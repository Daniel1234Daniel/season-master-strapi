export default (config, { strapi }) => {
  return async (ctx, next) => {
    
    if (ctx.headers['x-forwarded-proto'] === 'https') {
      ctx.request.secure = true;
    }
    await next();
  };
};
