/**
 * [^xyz]
 * A negated or complemented character set.
 * That is, it matches anything that is not enclosed in the brackets.
 * You can specify a range of characters by using a hyphen.
 * Everything that works in the normal character set also works here.
 * For example, [^abc] is the same as [^a-c]. They initially match 'r' in "brisket" and 'h' in "chop."
 */

function negatedCharacterSets() {
    let text = 'Marine mammal training is the training and caring for marine life such as,\n' +
        'dolphins, killer whales, sea.Jack.lions, Jack.Frost, walruses, and other marine mammals.\n' +
        'It is also a duty of the Jack Sprat to do mental and physical exercises ' +
        'to keep the animal healthy and happy.';

    let regex = /\b([^a-d .]{3,})\b/g;
    processRegex(text, regex);

    function processRegex(text, regex) {
        let found;
        while (found = regex.exec(text)) {
            let startIndex = Math.max(text.lastIndexOf(' ', found.index) + 1,
                text.lastIndexOf('.', found.index + 1) + 1,
                text.lastIndexOf('\n', found.index + 1) + 1);
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
        endIndexes.push(text.indexOf('.', startIndex + 1));
        return endIndexes.filter(i => i !== -1).sort((a,b) => a - b)[0];
    }
}

negatedCharacterSets();