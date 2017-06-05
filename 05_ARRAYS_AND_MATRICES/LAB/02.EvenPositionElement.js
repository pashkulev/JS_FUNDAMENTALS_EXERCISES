function filterEvenPositionElements(array) {
    let evenPositionElements = [];
    for (let i in array) {
        if (i % 2 === 0) {
            evenPositionElements.push(array[i]);
        }
    }

    console.log(evenPositionElements.join(" "));
}

filterEvenPositionElements(['5', '10']);