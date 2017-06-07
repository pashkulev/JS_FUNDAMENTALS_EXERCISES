function extractWithRegex(str) {
    let regex = /\((.+?)\)/g;
    let found;
    let result = [];
    while (found = regex.exec(str)) {
        result.push(found[1]);
    }

    console.log(result.join(', '));
}

extractWithRegex('Rakiya (Bulgarian brandy) is self-made liquor (alcoholic drink)');