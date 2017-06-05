function printEachNthElement(array) {
    let step = Number(array.pop());
    let result = array
        .filter((n, i) => i % step === 0)
        .join('\n')
    console.log(result);
}

printEachNthElement([5, 20, 31, 4, 20, 2]);