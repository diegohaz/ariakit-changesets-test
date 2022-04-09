const spawn = require("cross-spawn");

const changeset = spawn.sync("npx", ["changeset", "publish"]);

console.log(changeset.stderr.toString());
console.log(changeset.stdout.toString());

const tag = process.env.RELEASE_TAG;

if (!tag) process.exit();

const packages = changeset.stdout
  .toString()
  .split("\n")
  .filter((line) => /^\S+@\S+$/.test(line.replace("🦋  ", "")))
  .map((line) => line.replace("🦋  ", ""));

for (const package of packages) {
  spawn.sync("npm", ["dist-tag", "add", package, tag], { stdio: "inherit" });
}
