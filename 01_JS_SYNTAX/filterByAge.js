function filterByAge(minAge, name1, age1, name2, age2) {
   "use strict";
    let person1 = {name: name1, age: age1};
    let person2 = {name: name2, age: age2};

    if (person1.age >= minAge) console.log(person1);


    if (person2.age >= minAge) console.log(person2);
}

filterByAge(12, 'Ivan', 15, 'Asen', 9);