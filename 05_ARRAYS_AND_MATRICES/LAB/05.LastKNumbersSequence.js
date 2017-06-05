function solve(n, k) {
    let sequence = [1];
    for (let i = 1; i < n; i++) {
        let startIndex = i - k > 0 ? i - k : 0;
        let kSequence = sequence.slice(startIndex, i);
        sequence.push(kSequence.reduce((a, b) => a + b));
    }
    console.log(sequence.join(' '));
}

solve(8, 2);