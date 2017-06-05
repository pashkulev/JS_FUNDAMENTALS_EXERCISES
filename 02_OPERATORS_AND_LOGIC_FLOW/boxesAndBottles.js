function calcBoxes(bottlesCount, boxCapacity) {
    let reminder = bottlesCount % boxCapacity;
    if (reminder === 0) {
        console.log(bottlesCount / boxCapacity);
    } else {
        console.log(Math.floor(bottlesCount / boxCapacity) + 1);
    }
}

calcBoxes(5, 10);