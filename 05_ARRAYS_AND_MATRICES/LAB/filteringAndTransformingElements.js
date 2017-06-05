function demo() {
    let nums = ['one', 'two', 'three', 'four'];
    console.log(nums.join('|'));

    let filteredNums = nums.filter(e => e.startsWith('t'));
    console.log(filteredNums.join('|'));

    let lengths = nums.map(e => e.length);
    console.log(lengths.join('|'));

    let lengthsAndFirstLetters = nums.map(e => [e.length, e[0]]);
    console.log(lengthsAndFirstLetters.join('|'));
}

demo();