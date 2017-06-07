/**
 * Groups match the pattern inside the brackets and remember the match, as the following example shows.
 * The parentheses are called capturing parentheses.
 * The '(foo)' and '(bar)' in the pattern /(foo) (bar) \1 \2/
 * match and remember the first two words in the string "foo bar foo bar".
 * The \1 and \2 in the pattern match the string's last two words.
 * Note that \1, \2, \n are used in the matching part of the regex.
 * In the replacement part of a regex the syntax $1, $2, $n must be used,
 * e.g.: 'bar foo'.replace( /(...) (...)/, '$2 $1' ).
 * $& means the whole matched string.
 */
function usingGroups() {
    let text = 'Marine mammal training is the training and caring for marine life such as,\n' +
            'foo bar foo bar and tip top tip top' +
        'dolphins + killer whales + sea lions, walruses, and other marine mammals.\n' +
        'kik ass kik ass' +
        'It is also a duty of the trainer to do mental and physical exercises to keep the animal healthy and happy.';

    let regex = /([a-z]{3})\b\s\b([a-z]{3})\s\1\s\2/g;
    let found;
    while (found = regex.exec(text)) {
        let startIndex = found.index;
        let endIndex = startIndex + found[0].length;
        let word = text.substring(startIndex, endIndex);
        console.log(`Found match of \"${regex.source}\" within \"${word}\" at index ${found.index}`);
    }

    // usint string.replace();
    let replacedText = text.replace(regex, '$2-$1 ($&)');
    console.log(replacedText);
}

usingGroups();