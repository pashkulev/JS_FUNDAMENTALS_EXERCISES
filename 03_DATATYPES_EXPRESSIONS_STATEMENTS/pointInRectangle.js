function pointInRect(array) {
    let [x, y, xMin, xMax, yMin, yMax] = array;
    if (x <= xMax && x >= xMin && y <= yMax && y >= yMin) {
        console.log("inside");
    } else {
        console.log("outside");
    }
}

pointInRect([12.5, -1, 2, 12, -3, 3]);