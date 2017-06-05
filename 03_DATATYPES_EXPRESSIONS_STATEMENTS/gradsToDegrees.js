function toDegrees(grads) {
    "use strict";
    let oneGradInDegrees = 360 / 400;
    let degrees = (grads * oneGradInDegrees) % 360;
    if (degrees < 0) {
        degrees += 360;
    }
    console.log(degrees)
}

toDegrees(-50);