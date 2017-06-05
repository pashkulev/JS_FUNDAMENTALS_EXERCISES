function forEach() {
    let capitals = ['Sofia', 'Washington', 'Paris', 'London'];
    capitals.forEach(capital => console.log(capital));
    capitals.forEach((capital, i) => console.log(i + ' -> ' + capital));
}

forEach();