function matchMultiplication(text) {
    let regex = /(-?\d+)\s*\*\s*(-?\d+(\.\d+)?)/g;
    let matchResults;
    while (matchResults = regex.exec(text)) {
        let fullMatch = matchResults[0];
        let a = Number(matchResults[1]);
        let b = Number(matchResults[2]);
        let product = a * b;
        text = text.replace(fullMatch, product);
    }

    console.log(text);
}

// functional solution
function performMultiplications(text) {
    text = text.replace(/(-?\d+)\s*\*\s*(-?\d+(\.\d+)?)/g,
        (match, num1, num2) => Number(num1) * Number(num2));
    console.log(text);
}

performMultiplications('My bill: 2*2.50 (beer); 2* 1.20 (kepab); -2  * 0.5 (deposit).');