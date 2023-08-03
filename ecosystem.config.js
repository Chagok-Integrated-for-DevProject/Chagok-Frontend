module.exports = {
  apps: [
    {
      name: "chagok-fe",
      script: "node_modules/next/dist/bin/next", // npm
      args: "run start",
      instances: 0, // 2
      exec_mode: "cluster",
      autorestart: true,
      env: {
        PORT: 3000,
        NODE_ENV: "development",
      },
      env_production: {
        PORT: 3000,
        NODE_ENV: "production",
      },
      output: "./logs/console.log",
      error: "./logs/consoleError.log",
    },
  ],
};
