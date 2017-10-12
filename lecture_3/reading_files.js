const jsonFile = require("./jsonFileMod");
console.log("start of code");

let numVowelsInNames = 0;
let names = [];
let vowels = ["a", "e", "i", "o", "u"];

let readTeamFile = (file, callback) => {
    jsonFile.readJSON(file, callback);
}

/*
readTeamFile("the-c-team2.json", (error, data) => {
    if (error) {
        readTeamFile('the-c-team2.json', (err, data) => {

        })
        return;
    }
})
*/

jsonFile.readJSON("the-c-team.json", (err, data) => {
    if (err) throw err;

    let asObject = JSON.parse(data);

    asObject.forEach((person) => {
        names.push(person.name.toLowerCase());
    });

    let nameData = {};
    
    for (let i = 0; i < names.length; i++){
        let currentName = names[i];
        let currentNameVowels = 0;
    
        for (let i = 0; i < currentName.length; i++) {
            if (vowels.indexOf(currentName[i]) >= 0) {
                numVowelsInNames++;
                currentNameVowels++;
            }
        }
        nameData[currentName] = currentNameVowels;
    }
    console.log(nameData);
    console.log(`we have ${numvowelsInNames} vowels in their names`);
}); 

console.log("end of code");