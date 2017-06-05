function calcDistance(array) {
    let [speed1, speed2, seconds] = [array[0] / 3.6, array[1] / 3.6, array[2]];
    let distance1 = speed1 * seconds;
    let distance2 = speed2 * seconds;
    console.log(Math.abs(distance1 - distance2));
}

calcDistance([5, -5, 40]);