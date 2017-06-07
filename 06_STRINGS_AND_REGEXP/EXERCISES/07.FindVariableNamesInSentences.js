function findVariableNames(sentence) {
    let regex = /\b_([a-zA-Z0-9]+)\b/g;
    let variables = [];
    let match = regex.exec(sentence);
    while (match) {
        variables.push(match[1]);
        match = regex.exec(sentence);
    }

    console.log(variables.join(','));
}

let solveFunctional = sentence => sentence.match(/\b_([a-zA-Z0-9]+)\b/g).map(e => e.slice(1)).join(',');

console.log(solveFunctional('__invalidVariable _evenMoreInvalidVariable_ _validVariable'));;