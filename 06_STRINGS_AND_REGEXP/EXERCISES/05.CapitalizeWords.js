function capitalizeWords(input) {
    let words = input.split(/\s+/);
    console.log(words.map(capitalize).join(' '));

    function capitalize(word) {
        let firstLetter = word.charAt(0).toUpperCase();
        let restOfWord = word.slice(1).toLowerCase();
        return firstLetter + restOfWord;
    }
}

capitalizeWords('Was that Easy? tRY thIs onE for SiZe!');