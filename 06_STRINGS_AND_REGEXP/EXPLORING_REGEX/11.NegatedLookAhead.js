/**
 * Matches 'x' only if 'x' is not followed by 'y'. This is called a negated lookahead.
 * For example, /\d+(?!\.)/ matches a number only if it is not followed by a decimal point.
 * The regular expression /\d+(?!\.)/.exec("3.141") matches '141' but not '3.141'.
 */

function negatedLookAhead() {
    let text = 'Marine mammal training is the training and caring for marine life such as,\n' +
        'dolphins560, killer95, whales6.79, sea Jack3.141 lions, Jack Frost, walruses, and other marine mammals.\n' +
        'It is also a duty of the Jack Sprat to do mental and physical exercises ' +
        'to keep the animal healthy and happy.';

    let regex = /\d+(?!\.)/g;
    let found;
    while (found = regex.exec(text)) {
        console.log(`Found match of \"${regex.source}\" at index ${found.index}`);
        console.log(`This is the match result: ${found[0]}`);

    }
}

negatedLookAhead();