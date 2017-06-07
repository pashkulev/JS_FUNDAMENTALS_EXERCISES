/**
 * (?:x)
 * Matches the pattern inside the brackets but does not remember the match.
 * The parentheses are called non-capturing parentheses,
 * and let you define subexpressions for regular expression operators to work with.
 * Consider the sample expression /(?:foo){1,2}/.
 * If the expression was /foo{1,2}/, the {1,2} characters would apply only to the last 'o' in 'foo'.
 * With the non-capturing parentheses, the {1,2} applies to the entire word 'foo'.
 */
function nonCapturingGroups() {
    let text = 'Marine mammalal training is the training and caring for marine life such as,\n' +
        'foo bar foo bar and tip top tip top' +
        'dolphins + killer whales + sea lions, walruses, and other marine mammals.\n' +
        'kik ass kik ass' +
        'It is also a duty of the trainer to do mental and physical exercises to keep the animal healthy and happy.';

    let regex = /(?:al){1,2}\b\s([a-z]{3,9})\b/g;
    let found;
    while (found = regex.exec(text)) {
        console.log(`Found match of \"${regex.source}\" at index ${found.index}`);
        console.log(`This is the entire match:\n${found[0]}`);
        console.log(`This is the only captured group:\n${found[1]}`);
    }
}

nonCapturingGroups();