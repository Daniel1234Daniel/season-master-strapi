module.exports = async (ctx, next) => {
  if (ctx.request && ctx.request.protocol) {
    console.log(ctx.request.protocol);
  }
  await next();
};
