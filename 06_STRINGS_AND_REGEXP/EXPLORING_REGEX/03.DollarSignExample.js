/**
 * The '$' sign matches end of input.
 * If the multiline flag (m) is set to true, also matches immediately before a line break character.
 * For example, /t$/ does not match the 't' in "eater", but does match it in "eat".
 */

function dollarSign() {
    let text = 'Marine mammal training is the training and caring for marine life such as,\n' +
        'dolphins + killer whales + sea lions, walruses, and other marine mammals.\n' +
        'It is also a duty of the trainer to do mental and physical exercises to keep the animal healthy and happy.';

    let regex = /^[A-Z].*[.,]$/mg;
    let found;
    while (found = regex.exec(text)) {
        let index = found.index;
        let word = text.substring(index, text.indexOf(' ', index));
        console.log(`Found match within ${word} at index ${index}`);
    }
}

dollarSign();