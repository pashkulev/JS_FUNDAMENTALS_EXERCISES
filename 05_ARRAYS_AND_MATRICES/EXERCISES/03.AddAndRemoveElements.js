function solve(commands) {
    let elements = [];
    for (let i = 0; i < commands.length; i++) {
        if (commands[i] === 'add') {
            elements.push(i + 1);
        } else {
            elements.pop();
        }
    }

     console.log(elements.length !== 0 ? elements.join('\n') : 'Empty');
}

// solve(['add', 'add', 'remove', 'add', 'add']);
solve(['remove', 'remove', 'remove']);