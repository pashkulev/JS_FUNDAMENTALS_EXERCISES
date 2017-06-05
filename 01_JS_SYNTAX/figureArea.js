function figureArea(w1, h1, w2, h2) {
    let area1 = w1 * h1;
    let area2 = w2 * h2;
    let shorterWidth = Math.min(w1, w2);
    let shorterHeight = Math.min(h1, h2);
    let commonArea =  shorterWidth * shorterHeight;
    let result = area1 + area2 - commonArea;
    console.log(result);
}

figureArea(13, 2, 5, 8);