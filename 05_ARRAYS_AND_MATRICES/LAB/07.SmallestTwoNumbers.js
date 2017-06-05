function getSmallestTwoNumbers(numbers) {
    numbers.sort((a, b) => a - b);
    console.log(numbers.slice(0, 2).join(' '));
}

getSmallestTwoNumbers([3, 0, 10, 4, 7, 3]);