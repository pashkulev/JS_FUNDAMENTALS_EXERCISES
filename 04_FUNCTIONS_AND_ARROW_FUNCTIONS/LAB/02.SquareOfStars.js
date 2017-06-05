function printSquare(count = 5) {
    function printStars(count) {
        console.log('*' + " *".repeat(count - 1));
    }

    for (let i = 0; i < count; i++) {
        printStars(count);
    }
}

printSquare();
//printSquare();