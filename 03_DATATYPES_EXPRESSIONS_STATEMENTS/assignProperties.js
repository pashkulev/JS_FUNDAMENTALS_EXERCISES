function assignProperties(properties) {
    let obj = {};
    for (let i = 0; i < properties.length; i += 2) {
        obj[properties[i]] = properties[i + 1];
    }

    console.log(obj);
}

assignProperties(['name', 'Pesho', 'age', '23', 'gender', 'male']);