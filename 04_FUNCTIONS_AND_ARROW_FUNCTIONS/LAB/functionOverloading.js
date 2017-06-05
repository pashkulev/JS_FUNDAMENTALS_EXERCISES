function printName(firstName, lastName) {
    let name = firstName;
    if (lastName !== undefined) {
        name += ' ' + lastName;
    }

    console.log(name);
}

printName('Maria');
printName('Maria', 'Nikolova');