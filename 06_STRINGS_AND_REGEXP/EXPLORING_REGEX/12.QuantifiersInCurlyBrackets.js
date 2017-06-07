/**
 * {n}
 * Matches exactly n occurrences of the preceding expression. N must be a positive integer.
 * For example, /a{2}/ doesn't match the 'a' in "candy," but it does match all of the a's in "caandy,"
 * and the first two a's in "caaandy."
 *
 * {n,}
 * Matches at least n occurrences of the preceding expression. N must be a positive integer.
 * For example, /a{2,}/ will match "aa", "aaaa" and "aaaaa" but not "a"
 *
 * {n,m}
 * Where n and m are positive integers and n <= m. Matches at least n and at most m occurrences
 * of the preceding expression. When m is omitted, it's treated as +infinity.
 * For example, /a{1,3}/ matches nothing in "cndy", the 'a' in "candy," the first two a's in "caandy,"
 * and the first three a's in "caaaaaaandy". Notice that when matching "caaaaaaandy",
 * the match is "aaa", even though the original string had more a's in it.
 */

function quantifiersInCurlyBrackets() {
    let text = "candy caandy, caaandy cndy";

    let twoTimesA = /a{2}/g;
    processRegex(text, twoTimesA, 'Examples with {n}');

    let twoOrMoreTimesA = /a{2,}/g;
    processRegex(text, twoOrMoreTimesA, 'Examples with {n,}');

    let oneToThreeTimesA = /a{1,3}/g;
    processRegex(text, oneToThreeTimesA, 'Examples with {n,m}');

    function processRegex(text, regex, message) {
        let found;
        console.log(message);
        while (found = regex.exec(text)) {
            let startIndex = text.lastIndexOf(' ', found.index) + 1;
            let endIndex = text.indexOf(' ', startIndex + 1);
            let word = text.substring(startIndex, endIndex);
            console.log(`Found match of \"${regex.source}\" within \"${word}\" at index ${found.index}`);
        }
    }
}

quantifiersInCurlyBrackets();
