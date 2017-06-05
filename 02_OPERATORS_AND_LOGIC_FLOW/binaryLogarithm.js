function binaryLogarithm(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(Math.log2(array[i]));
        console.log(`number ${i}`);
    }
}

binaryLogarithm([29, 4, 32, 10]);