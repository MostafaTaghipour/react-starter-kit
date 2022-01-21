#!/bin/node
const fs = require("fs");

module.exports = {
  run: function () {
    const path = "../src/constants/env";
    //Obtain the environment string passed to the node script
    const environment = process.argv[2] || "development";
    //read the content of the json file
    const envFileContent = require(`${path}/${environment}.json`);
    //copy the json inside the env.json file
    fs.writeFileSync(`_env.json`, JSON.stringify(envFileContent, undefined, 2));
  },
};
