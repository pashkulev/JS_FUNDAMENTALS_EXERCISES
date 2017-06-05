function printDNAHelix(length) {
    let dnaLetters = `ATCGTTAGGG`;
    let dnaLettersCount = dnaLetters.length;
    let dnaLettersIndex = 0;

    let asterisks = ['**', '*', '', '*'];
    let dashes = ['', '--', '----', '--'];
    let symbolIndex = 0;

    let output = "";
    for (let i = 1; i <= length; i++) {
        output += `${asterisks[symbolIndex]}` +
            `${dnaLetters.charAt(dnaLettersIndex++ % dnaLettersCount)}` +
            `${dashes[symbolIndex]}` +
            `${dnaLetters.charAt(dnaLettersIndex++ % dnaLettersCount)}` +
            `${asterisks[symbolIndex]}\n`;
        symbolIndex++;
        symbolIndex %= 4;
    }

    return output;
}

console.log(printDNAHelix(10));;