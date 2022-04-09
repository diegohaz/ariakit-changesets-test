const spawn = require("cross-spawn");

const changeset = spawn.sync("npx", ["changeset", "publish"]);

const releaseTags = process.env.RELEASE_TAGS;

console.log(releaseTags);

if (!releaseTags) process.exit();

const tags = releaseTags.split(",");

const packages = changeset.stdout
  .toString()
  .split("\n")
  .filter((line) => /^\S+@\S+$/.test(line));

for (const package of packages) {
  for (const tag of tags) {
    spawn.sync("npm", ["dist-tag", "add", package, tag], { stdio: "inherit" });
  }
}
