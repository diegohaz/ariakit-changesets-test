const spawn = require("cross-spawn");

const output = spawn.sync("npx", ["changeset", "publish"], {
  stdio: "inherit",
});

console.log(JSON.stringify(output, null, 2));

// spawn.sync("npm", ["dist-tag", "add"], { stdio: "inherit" });
