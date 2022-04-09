const spawn = require("cross-spawn");

spawn.sync("changeset", ["version"], {
  cwd: process.cwd(),
  env: process.env,
  stdio: "inherit",
});

spawn.sync("npm", ["i", "--package-lock-only", "--no-audit", "--no-scripts"], {
  stdio: "inherit",
});
