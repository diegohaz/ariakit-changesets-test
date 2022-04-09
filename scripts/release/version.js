const spawn = require("cross-spawn");

process.stdout.on("data", (data) => {
  // const output = data
  //   .toString()
  //   .split("\n")
  //   .filter((line) => line.includes("@"))
  //   .map((line) => line.trim())
  //   .join("\n");
  console.log("aaaa", data, data.toString());
});

spawn.sync("npx", ["changeset", "version"], {
  stdio: "inherit",
});

spawn.sync("npm", ["i", "--package-lock-only", "--no-audit", "--no-scripts"], {
  stdio: "inherit",
});
