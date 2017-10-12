const fs = require('fs');
let jsonFileMod = exports = module.exports;

jsonFileMod.readJSON = (fileName, callback) => {
    fs.readFile(fileName, "utf-8", callback);
};

jsonFileMod.writeJSON = (fileName, callback) => {
    fs.writeFile(fileName, "utf-8", callback);
};