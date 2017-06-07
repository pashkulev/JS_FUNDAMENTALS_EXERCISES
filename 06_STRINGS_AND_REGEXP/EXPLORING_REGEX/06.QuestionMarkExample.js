/**
 * The question mark (?) matches the preceding expression 0 or 1 time. Equivalent to {0,1}.
 * For example, /e?le?/ matches the 'el' in "angel" and the 'le' in "angle" and also the 'l' in "oslo".
 * If used immediately after any of the quantifiers *, +, ?, or {},
 * makes the quantifier non-greedy (matching the fewest possible characters),
 * as opposed to the default, which is greedy (matching as many characters as possible).
 * For example, applying /\d+/ to "123abc" matches "123".
 * But applying /\d+?/ to that same string matches only the "1".
 */

function questionMark() {
    let text = 'Marine mammal training is the training and caring for marine life such as,\n' +
        'dolphins + killer whales + sea lions, walruses, and other marine mammals.\n' +
        'It is also a duty of the trainer to do mental and physical exercises to keep the animal healthy and happy.';

    let regex = /le[a-z]?/g;
    let found;
    while (found = regex.exec(text)) {
        let startIndex = Math.max(text.lastIndexOf(' ', found.index) + 1, text.lastIndexOf('\n', found.index) + 1);
        let endIndeces = [];
        endIndeces.push(text.indexOf(' ', startIndex + 1));
        endIndeces.push(text.indexOf('\n', startIndex + 1));
        endIndeces.push(text.indexOf('.', startIndex + 1));
        endIndeces.push(text.indexOf(',', startIndex + 1));
        endIndex = endIndeces.filter(i => i !== -1).sort((a,b) => a - b)[0];

        let word = text.substring(startIndex, endIndex);
        console.log(`Found match of \"${regex.source}\" within ${word} at index ${found.index}`);
    }
}

questionMark();