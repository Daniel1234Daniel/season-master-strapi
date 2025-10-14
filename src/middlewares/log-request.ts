module.exports = (ctx, next) => {
  console.log('Request protocol:', ctx.request.protocol);
  console.log('X-Forwarded-Proto:', ctx.request.header['x-forwarded-proto']);
  console.log('COOKIE_SECURE:', process.env.COOKIE_SECURE);
  return next();
};