function solve(numbers) {
    let result = [];
    for (let num of numbers) {
        num < 0 ? result.unshift(num) : result.push(num);
    }

    result.forEach(e => console.log(e));
}

function func(numbers) {
    let result = [];
    let process = numbers => numbers.forEach(n => n < 0 ? result.unshift(n) : result.push(n));
    process(numbers);
    console.log(result.join('\n'));
}

func([3, -2, 0, -1]);