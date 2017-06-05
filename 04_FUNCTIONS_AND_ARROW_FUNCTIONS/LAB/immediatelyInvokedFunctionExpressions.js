(function (count) {
    for (let i = 1; i <= count; i++) {
        console.log('+'.repeat(i));
    }
})(4);

// this is called closure - a state is closed inside
let f = (function () {
    let x = 0;
    return function () {
        console.log(++x);
    }
})();
f();
f();
f();
f();