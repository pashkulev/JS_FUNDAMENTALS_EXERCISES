/**
 * The caret ('^') matches beginning of input. If the multiline flag is set to true (m),
 * also matches immediately after a line break character.
 * For example, /^A/ does not match the 'A' in "an A", but does match the 'A' in "An E".
 */

function caret() {
    let text = 'Marine mammal training is the training and caring for marine life such as, \n' +
        'dolphins + killer whales + sea lions, walruses, and other marine mammals.\n' +
        'It is also a duty of the trainer to do mental and physical exercises to keep the animal healthy and happy.';

    let regex = /^do/mg;
    let found;
    while (found = regex.exec(text)) {
        let index = found.index;
        let word = text.substring(index, text.indexOf(' ', index));
        console.log(`Found match within ${word} at index ${index}`);
    }
}

caret();

/**
 * The '^' has a different meaning when it appears as the first character in a character set pattern.
 * See complemented character sets for details and an example.
 */
