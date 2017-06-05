function extract(numbers) {
    let max = numbers[0];
    numbers = numbers.filter(n => {
        if (n >= max) {
            max = n;
            return true;
        }
        return false;
    });
    console.log(numbers.join('\n'));
}

//extract([1, 3, 8, 4, 10, 12, 3, 2, 24]);
extract([20, 3, 2, 15, 6, 1]);
