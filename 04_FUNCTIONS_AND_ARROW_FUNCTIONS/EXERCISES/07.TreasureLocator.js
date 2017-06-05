function findTreasureLocations(coordinates) {
    let locations = [];

    for (let i = 0; i < coordinates.length; i += 2) {
        let x = coordinates[i];
        let y = coordinates[i + 1];
        locations.push(getLocation(x, y));
    }

    console.log(locations.join('\n'));

    function getLocation(x, y) {
        "use strict";
        if (x >= 0 && x <= 2 && y >= 6 && y <= 8) {
            return `Tonga`;
        } else if (x >= 1 && x <= 3 && y >= 1 && y <= 3) {
            return `Tuvalu`;
        } else if (x >= 4 && x <= 9 && y >= 7 && y <= 8) {
            return `Cook`;
        } else if (x >= 5 && x <= 7 && y >= 3 && y <= 6) {
            return `Samoa`;
        } else if (x >= 8 && x <= 9 && y >= 0 && y <= 1) {
            return `Tokelau`;
        } else {
            return `On the bottom of the ocean`;
        }
    }
}

findTreasureLocations([4, 2, 1.5, 6.5, 1, 3]);