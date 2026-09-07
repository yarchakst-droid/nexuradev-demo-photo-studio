module.exports = {
  apps: [
    {
      name: "demo-photo-studio",
      cwd: __dirname,
      script: "node_modules/.bin/next",
      args: "start -p 3210 -H 127.0.0.1",
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
