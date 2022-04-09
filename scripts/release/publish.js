const spawn = require("cross-spawn");

const changeset = spawn.sync("npx", ["changeset", "publish"]);

const tag = process.env.RELEASE_TAG;

if (!tag) process.exit();

const packages = changeset.stdout
  .toString()
  .split("\n")
  .filter((line) => /^\S+@\S+$/.test(line));

for (const package of packages) {
  spawn.sync("npm", ["dist-tag", "add", package, tag], { stdio: "inherit" });
}
