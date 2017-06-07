function backSlash() {
    let text = 'Marine mammal training is the training and caring for marine life such as, \n' +
        'dolphins + killer whales + sea lions, walruses, and other marine mammals.\n' +
        'It is also a duty of the trainer to do mental and physical exercises to keep the animal healthy and happy.';

    /**
     * When backslash is used with non special characters, it makes them special.
     * For example '\b' is not looking for the letter 'b' but for word boundaries
     * at the beginning or at the end of the word. '\b' should always be used
     * with prefix or suffix!!! For example '\bal' or 'al\b'. Never use just '\b'!!!
     * @type {RegExp}
     */
    let regex = /al\b/g;
    printResults(text, regex);

    /**
     * If we want to use a special character as non special character we could escape it with backslash.
     * For example if we want to look for the special character '+' in a string,
     * then we should use '\+'
     */
    regex = /\+/g;
    printResults(text, regex);

    function printResults(text, regex) {
        let target = regex.source;
        let found;
        while (found = regex.exec(text)) {
            let index = found.index;
            let wordStartIndex = text.lastIndexOf(' ', index) + 1;
            let wordEndIndex = text.indexOf(' ', index);
            let word = text.substring(wordStartIndex, wordEndIndex);
            console.log(`Found "${target}" within "${word}" at position ${index}`);
        }
    }
}

backSlash();
