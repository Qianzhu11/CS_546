const fileData = require("./fileData");
const textMetrics = require("./textMetrics");

const bluebird = require("bluebird");
const Promise = bluebird.Promise;

const prompt = bluebird.promisifyAll(require("prompt"));
const fs = bluebird.promisifyAll(require("fs"));

async function main(path) {
    if (!path || typeof path !== 'string') throw "You must provide a valid path";
    let j;
    for (let i = path.length - 1; i > 0; i--) {
        if (path.charAt(i) === '.')
            j = i;
    }

    let newPath = path.slice(0, j);
    let result = newPath + '.result.json';

    if (fs.existsSync(result)) {
        const stats = await fileData.getFileAsJSON(result);
        console.log(stats);
    } else {
        let text = await fileData.getFileAsString(path);
        const simpleText = textMetrics.simplify(text);
        const simpleTextPath = newPath + '.debug.txt';
        await fileData.saveStringToFile(simpleTextPath, simpleText);
        const metricsText = textMetrics.createMetrics(simpleText);
        await fileData.saveJSONToFile(result, metricsText);
        console.log(metricsText);
    }
}

main("chapter1.txt");