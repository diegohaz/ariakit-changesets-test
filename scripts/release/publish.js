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

spawn.sync("npx", ["changeset", "publish"], {
  stdio: "inherit",
});

// console.log(JSON.stringify(output, null, 2));

// spawn.sync("npm", ["dist-tag", "add"], { stdio: "inherit" });
