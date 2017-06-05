function binaryToDecimal(binary) {
    let result = 0;
    let powValue = 0;
    for (let i = binary.length - 1; i >= 0; i--, powValue++) {
        let digit = Number(binary.charAt(i));
        if (digit == 1) {
            result += Math.pow(2, powValue);
        }
    }

    console.log(result);
}

binaryToDecimal('11110000');
