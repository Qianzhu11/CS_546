const bluebird = require("bluebird");
const Promise = bluebird.Promise;

const fs = bluebird.promisifyAll(require("fs"));

async function getFileAsString(path) {
    if (!path || typeof path !== 'string') throw "You must provide a valid path";
    let stats = await fs.readFileAsync(path, 'utf-8');
    return stats;
}

async function getFileAsJSON(path) {
    if (!path || typeof path !== 'string') throw "You must provide a valid path";
    let stats = await fs.readFileAsync(path, 'utf-8');
    stats = JSON.parse(stats);
    return stats;
}

async function saveStringToFile(path, text) {
    if (!path || typeof path !== 'string') throw "You must provide a valid path";
    if (!text || typeof text !== 'string') throw "You must provide a valid text";
    await fs.writeFileAsync(path, text);
}

async function saveJSONToFile(path, obj) {
    if (!path || typeof path !== 'string') throw "You must provide a valid path";
    if (!obj || typeof obj !== 'object') throw "You must provide a valid path";
    const stats = JSON.stringify(obj);
    await fs.writeFileAsync(path, stats);
}

module.exports = {getFileAsString, getFileAsJSON, saveStringToFile, saveJSONToFile};
