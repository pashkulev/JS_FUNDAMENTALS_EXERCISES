function processCrystals(arr) {
    let desiredThickness = arr[0];

    for (let i = 1; i < arr.length; i++) {
        let chrystal = {
            'currentThickness': arr[i],
            'initialThickness': arr[i],
            'cutsCount': 0,
            'lapsCount': 0,
            'grindsCount': 0,
            'etchCount': 0,
            'isXRayUsed': false
        };

        cut(chrystal);
        lap(chrystal);
        grind(chrystal);
        etch(chrystal);

        if (chrystal.currentThickness === desiredThickness - 1) {
            xRay(chrystal);
        }

        printChrystalData(chrystal);
    }

    // all operations are stored in nested functions which operate on the chrystal's state
    function cut(chrystal) {
        while (chrystal.currentThickness / 4 >= desiredThickness - 1) {
            chrystal.currentThickness /= 4;
            chrystal.cutsCount++;
        }

        if (chrystal.cutsCount > 0) {
            transportAndWash(chrystal);
        }
    }

    function lap(chrystal) {
        while (chrystal.currentThickness * 0.8 >= desiredThickness - 1) {
            chrystal.currentThickness *= 0.8;
            chrystal.lapsCount++;
        }

        if (chrystal.lapsCount > 0) {
            transportAndWash(chrystal);
        }
    }

    function grind(chrystal) {
        while (chrystal.currentThickness - 20 >= desiredThickness - 1) {
            chrystal.currentThickness -= 20;
            chrystal.grindsCount++;
        }
    }

    function etch(chrystal) {
        while (chrystal.currentThickness - 2 >= desiredThickness - 1) {
            chrystal.currentThickness -= 2;
            chrystal.etchCount++;
        }
    }

    function xRay(chrystal) {
        chrystal.currentThickness++;
        chrystal.isXRayUsed = true;
    }

    function transportAndWash(chrystal) {
        chrystal.currentThickness = Math.floor(chrystal.currentThickness);
    }

    function printChrystalData(chrystal) {
        let output = `Processing chunk ${chrystal.initialThickness} microns\n`;
        if (chrystal.cutsCount > 0) {
            output += `Cut x${chrystal.cutsCount}\n`;
            output += `Transporting and washing\n`;
        }

        if (chrystal.lapsCount > 0) {
            output += `Lap x${chrystal.lapsCount}\n`;
            output += `Transporting and washing\n`;
        }

        if (chrystal.grindsCount > 0) {
            output += `Grind x${chrystal.grindsCount}\n`;
            output += `Transporting and washing\n`;
        }

        if (chrystal.etchCount > 0) {
            output += `Etch x${chrystal.etchCount}\n`;
            output += `Transporting and washing\n`;
        }

        if (chrystal.isXRayUsed) {
            output += `X-ray x1\n`;
        }

        output += `Finished crystal ${desiredThickness} microns`;
        console.log(output);
    }
}

processCrystals([1375, 50000]);