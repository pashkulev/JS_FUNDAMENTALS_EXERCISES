function solve(numbers) {
    let k = numbers.shift();
    let firstKNumbers = numbers.slice(0, k);
    let lastKNumbers = numbers.slice(-k);
    console.log(firstKNumbers.join(' '));
    console.log(lastKNumbers.join(' '));
}

let func = numbers => {
    let k = numbers.shift();
    console.log(numbers.slice(0, k).join(' '));
    console.log(numbers.slice(-k).join(' '));
};

func([3, 6, 7, 8, 9]);