module.exports = {
  apps: [
    {
      name: "cdms",
      script: "server.js",
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
