module.exports = {
  apps: [
    {
      name: "project",
      script: "npm",
      args: "run start",
      instances: 2, // 클러스터 모드에서 생성할 pm2 인스턴스 개수
      exec_mode: "cluster",
      autorestart: true,
      watch: true, // 파일 변경 감지
      ignore_watch: ["node_modules"],
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
