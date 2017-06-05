function printTriangle(n) {
    // this is my first solution
    // "use strict";
    // let result = "";
    // for (let i = 0; i < n; i++) {
    //     for (let j = 0; j <= i; j++) {
    //         result += '$';
    //     }
    //     result += "\n";
    // }
    //
    // console.log(result);



    for (let row = 1; row <= n; row++) {
        // variant 2
        // let arr = new Array(row + 1);
        // console.log(arr.join('$'));

        // variant 3
        console.log('$'.repeat(row));
    }
}

printTriangle(4);