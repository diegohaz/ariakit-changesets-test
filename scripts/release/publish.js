const spawn = require("cross-spawn");

const changeset = spawn.sync("npx", ["changeset", "publish"]);

console.log("dsadsadas1", changeset.stdout.toString());
console.log("dsadsadas2", changeset.stderr.toString());

// console.log(JSON.stringify(output, null, 2));

// spawn.sync("npm", ["dist-tag", "add"], { stdio: "inherit" });
