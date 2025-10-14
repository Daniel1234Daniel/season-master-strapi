module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT'),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT'),
    },
  },
  secrets: {
    encryptionKey: env('ENCRYPTION_KEY'),
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
  sessions: {
    settings: {
      httpOnly: true,
      secure: true,        // only HTTPS
      sameSite: 'Strict',  // better CSRF protection
      maxAge: 1000 * 60 * 60 * 24, // 1 day
    },
  },
});
