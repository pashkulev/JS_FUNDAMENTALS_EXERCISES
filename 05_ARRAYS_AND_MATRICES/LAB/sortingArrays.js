function arraySort() {
    let nums = [20, 40, 10, 30, 100, 5];
    console.log(nums.join('|'));

    /**
     *  Works incorrectly on array of numbers!!!
     *  It compares them as strings!!!
     */
    nums.sort();
    console.log(nums.join('|'));

    /**
     * That is why we should always pass a comparator function
     */
    nums.sort((a, b) => a - b); // compares elements as numbers in ascending order
    console.log(nums.join('|'));

    nums.sort((a, b) => b - a); // compares elements as numbers in descending order
    console.log(nums.join('|'));
}

arraySort();