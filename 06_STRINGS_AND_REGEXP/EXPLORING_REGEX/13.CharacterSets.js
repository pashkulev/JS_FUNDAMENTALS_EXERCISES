/**
 * [xyz]
 * Character set. This pattern type matches any one of the characters in the brackets,
 * including escape sequences. Special characters like the dot(.) and asterisk (*)
 * are not special inside a character set, so they don't need to be escaped.
 * You can specify a range of characters by using a hyphen, as the following examples illustrate.
 * The pattern [a-d], which performs the same match as [abcd], matches the 'b' in "brisket"
 * and the 'c' in "city".
 */

function characterSets() {
    let text = 'Marine mammal training is the training and caring for marine life such as,\n' +
        'dolphins, killer whales, sea.Jack.lions, Jack.Frost, walruses, and other marine mammals.\n' +
        'It is also a duty of the Jack Sprat to do mental and physical exercises ' +
        'to keep the animal healthy and happy.';

    let regex = /\b[a-p.]{3,}\b/g;
    processRegex(text, regex);

    function processRegex(text, regex) {
        let found;
        while (found = text.match(regex)) {
            let startIndex = text.lastIndexOf(' ', found.index) + 1;
            let endIndex = getEndIndex(text, startIndex);
            let word = text.substring(startIndex, endIndex);
            console.log(`Found match of \"${regex.source}\" within \"${word}\" at index ${found.index}`);
        }
    }

    function getEndIndex(text, startIndex) {
        let endIndexes = [];
        endIndexes.push(text.indexOf(' ', startIndex + 1));
        endIndexes.push(text.indexOf('\n', startIndex + 1));
        endIndexes.push(text.indexOf(',', startIndex + 1));
        return endIndexes.filter(i => i !== -1).sort((a,b) => a - b)[0];
    }
}

characterSets();