// The asterisk matches the preceding expression 0 or more times. Equivalent to {0,}.
// For example, /bo*/ matches 'boooo' in "A ghost booooed" and 'b' in "A bird warbled" but nothing in "A goat grunted".

function asterisks() {
    let text = 'Marine mammal training is the training and caring for marine life such as,\n' +
        'dolphins + killer whales + sea lions, walruses, and other marine mammals.\n' +
        'It is also a duty of the trainer to do mental and physical exercises to keep the animal healthy and happy.';

    let regex = /mam*/g;
    let found;
    while (found = regex.exec(text)) {
        let startIndex = text.lastIndexOf(' ', found.index) + 1;
        let endIndeces = [];
        endIndeces.push(text.indexOf(' ', startIndex + 1));
        endIndeces.push(text.indexOf('\n', startIndex + 1));
        endIndeces.push(text.indexOf('.', startIndex + 1));
        endIndeces.push(text.indexOf(',', startIndex + 1));
        endIndex = endIndeces.filter(i => i !== -1).sort((a,b) => a - b)[0];

        let word = text.substring(startIndex, endIndex);
        console.log(`Found match of \"${regex.source}\" within ${word} at index ${fornd.index}`);
    }
}

asterisks();