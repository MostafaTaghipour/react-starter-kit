#!/bin/node
var fs = require("fs");

module.exports = {
  run: function () {
    const isSpa = process.argv.includes("--spa");

    if (isSpa) {
      move("temp/index.html", "public/index.html", () => {});
      move("src/index.ts", "temp/index.ts", () => {});
      move("src/server.tsx", "temp/server.tsx", () => {});
    } else {
      move("public/index.html", "temp/index.html", () => {});
      move("temp/index.ts", "src/index.ts", () => {});
      move("temp/server.tsx", "src/server.tsx", () => {});
    }

    function move(oldPath, newPath, callback) {
      fs.rename(oldPath, newPath, function (err) {
        if (err) {
          // console.log("error", err, oldPath);
          if (err.code === "EXDEV") {
            copy();
          } else {
            callback(err);
          }
          return;
        }
        // console.log("done", oldPath);
        callback();
      });

      function copy() {
        var readStream = fs.createReadStream(oldPath);
        var writeStream = fs.createWriteStream(newPath);

        readStream.on("error", callback);
        writeStream.on("error", callback);

        readStream.on("close", function () {
          fs.unlink(oldPath, callback);
        });

        readStream.pipe(writeStream);
      }
    }
  },
};
