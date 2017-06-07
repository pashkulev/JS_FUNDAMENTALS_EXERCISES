function matchAllWords(text) {
    if (Array.isArray(text)) {
        text = text[0];
    }

    let words = text.match(/\w+/g);
    return words.join('|');
}

let functionalMatch = text => text.match(/\w+/g).join('|');
console.log(functionalMatch('_(Underscores) are also word characters'));;