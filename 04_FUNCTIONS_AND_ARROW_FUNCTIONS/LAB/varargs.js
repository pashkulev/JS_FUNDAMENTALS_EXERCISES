// JS HAS A SPECIAL ARRAY CALLED ARGUMENTS. It is similar to varargs in Java
function sum() {
    console.log("args count: " + arguments.length);
    console.log(arguments);
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    console.log(sum);
}

sum();
sum(5, 3);
sum(4, 2, 3);