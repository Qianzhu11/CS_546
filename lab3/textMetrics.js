
function simplify(text) {
    text = text.toLowerCase();
    text = text.replace(/\W+/g, " ");
    return text;
}

function createMetrics(text) {
    text = simplify(text);
    wordOccurences = new Object();
    object1 = {totalLetters: 0, totalWords: 0, uniqueWords: 0, 
        longWords: 0, averageWordLength: 0, wordOccurences 
    }

    for (let i = 0; i < text.length; i++) {
        if (text.charAt(i) !== " ") {
            object1.totalLetters++;
        } else {
            object1.totalWords++;
        }     
    }
    object1.totalWords++;

    let text1 = text.split(" ");
    object1.uniqueWords = Array.from(new Set(text1)).length;

    text2 = Array.from(new Set(text1));
    for (let i = 0; i < text1.length; i++) {
        if (text1[i].length > 5) {
            object1.longWords++;
        }
    }

    object1.averageWordLength = object1.totalLetters / object1.totalWords;

    for (let i = 0; i < text2.length; i++) {
        wordOccurences[text2[i]] = 0;;
    }

    for (let i = 0; i < text1.length; i++) {
        for (let j = 0; j < text2.length; j++) {
            if (text1[i] === text2[j]) {
                wordOccurences[text2[j]]++;
            }
        }
    }

    return object1;
}

module.exports = {simplify, createMetrics};

let text = 'helloo helloo helloo';
console.log(createMetrics(text));