const spawn = require("cross-spawn");

spawn.sync("changeset", ["version"], { stdio: "inherit" });
spawn.sync("npm", ["i", "--package-lock-only", "--no-audit"], {
  stdio: "inherit",
});
