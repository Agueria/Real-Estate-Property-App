module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'ae3b7af3a72c85c5b682235d595bddf4'),
  },
});
