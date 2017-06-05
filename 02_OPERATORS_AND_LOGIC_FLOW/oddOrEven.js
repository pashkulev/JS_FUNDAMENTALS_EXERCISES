function oddOrEven(num) {
    if (Math.floor(num) != num) {
        console.log("invalid");
    } else if (num % 2 == 0) {
        console.log("even");
    } else {
        console.log("odd")
    }
}

oddOrEven(1.1);