function rotate(input) {
    let count = Number(input.pop()) % input.length;
    for (let i = 0; i < count; i++) {
        let last = input.pop();
        input.unshift(last);
    }

    console.log(input.join(' '));
}

rotate(['Banana', 'Orange', 'Coconut', 'Apple', '15']);