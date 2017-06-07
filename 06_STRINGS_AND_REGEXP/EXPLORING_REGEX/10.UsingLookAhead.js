/**
 * x(?=y)
 * Matches 'x' only if 'x' is followed by 'y'. This is called a lookahead.
 * For example, /Jack(?=Sprat)/ matches 'Jack' only if it is followed by 'Sprat'.
 * /Jack(?=Sprat|Frost)/ matches 'Jack' only if it is followed by 'Sprat' or 'Frost'.
 * However, neither 'Sprat' nor 'Frost' is part of the match results.
 */

function lookAhead() {
    let text = 'Marine mammal training is the training and caring for marine life such as,\n' +
        'dolphins, killer whales, sea Jack lions, Jack Frost, walruses, and other marine mammals.\n' +
        'It is also a duty of the Jack Sprat to do mental and physical exercises ' +
        'to keep the animal healthy and happy.';

    let regex = /(Jack\s)(?=Sprat|Frost)/g;
    let found;
    while (found = regex.exec(text)) {
        console.log(`Found match of \"${regex.source}\" at index ${found.index}`);
        console.log(`This is the match result: ${found[0]}`);

    }
}

lookAhead();