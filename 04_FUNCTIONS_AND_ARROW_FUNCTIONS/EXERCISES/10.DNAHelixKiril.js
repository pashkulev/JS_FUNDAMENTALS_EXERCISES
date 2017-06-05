function dnaHelix(n) {
    let sequence = `ATCGTTAGGG`;
    let index = -1;
    for (let i = 1; i <= n; i++) {
        let firstLetter = sequence.charAt(++index % sequence.length);
        let secondLetter = sequence.charAt(++index % sequence.length);

        if (i % 4 === 1) {
            console.log(`**${firstLetter}${secondLetter}**`);
        } else if (i % 4 === 3) {
            console.log(`${firstLetter}----${secondLetter}`);
        } else {
            console.log(`*${firstLetter}--${secondLetter}*`);
        }
    }
}

dnaHelix(5);