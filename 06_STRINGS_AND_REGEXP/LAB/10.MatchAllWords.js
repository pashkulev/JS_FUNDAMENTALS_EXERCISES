function matchAllWords(text) {
    let regex = /\w+/g;
    let words = [];
    let match;

    while (match = regex.exec(text)) {
        words.push(match[0]);
    }

    console.log(words.join('|'));
}

let matchWords = str => str.split(/\W+/).filter(e => e !== '').join('|');

matchAllWords('A Regular Expression needs to have the global flag in order to match all occurrences in the text');