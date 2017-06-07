/**
 * (The decimal point) matches any single character except the newline character.
 * For example, /.n/ matches 'an' and 'on' in "nay, an apple is on the tree", but not 'nay'.
 */

function usingDot() {
    let text = 'Marine mammal training is the training and caring for marine life such as,\n' +
        'dolphins + killer whales + sea lions, walruses, and other marine mammals.\n' +
        'It is also a duty of the trainer to do mental and physical exercises to keep the animal healthy and happy.';

    let regex = /.n/g;
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
        console.log(`Found match of \"${regex.source}\" within \"${word}\" at index ${found.index}`);
    }
}

usingDot();