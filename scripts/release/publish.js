const spawn = require("cross-spawn");

const changeset = spawn.sync("npx", ["changeset", "publish"]);

const tag = process.env.RELEASE_TAG;

console.log("tag", tag);

if (!tag) process.exit();

const packages = changeset.stdout
  .toString()
  .split("\n")
  .filter((line) => /^\S+@\S+$/.test(line));

console.log(`packages`, changeset.stdout.toString().split("\n"));

for (const package of packages) {
  console.log(`npm dist-tag add ${package} ${tag}`);
  spawn.sync("npm", ["dist-tag", "add", package, tag], { stdio: "inherit" });
}
