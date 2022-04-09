const spawn = require("cross-spawn");

spawn.sync("npx", ["changeset", "version"], {
  stdio: "inherit",
});

spawn.sync("npm", ["i", "--package-lock-only", "--no-audit", "--no-scripts"], {
  stdio: "inherit",
});
