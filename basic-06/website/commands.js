var cmd = require("node-command-line"),
  Promise = require("bluebird");

function runMultipleCommandWithWait() {
  Promise.coroutine(function*() {
    var commands = [
      "npm run build-css",
      "npm run compile && npm run browserify"
    ];
    for (var i = 0; i < commands.length; i++) {
      console.log(commands[i]);
      yield cmd.run(commands[i]);
    }
    console.log("Executed your command :)");
  })();
}

runMultipleCommandWithWait()
