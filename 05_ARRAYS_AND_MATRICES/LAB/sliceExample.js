function sliceDemo(arr) {
    let firstNums = arr.slice(0, 2);
    console.log(firstNums);
    let lastNums = arr.slice(2, arr.length);
    console.log(lastNums);
    let midNums = arr.slice(1, 3);
    console.log(midNums);
    console.log(arr);
}

sliceDemo(['one', 'two', 'three', 'four']);