function solve(numArr) {
    let targetSize = numArr[0];

    // operations
    let cut = c => c / 4;
    let lap = c => c * 0.8;
    let grind = c => c - 20;
    let etch = c => c - 2;
    let xRay = c => ++c;
    let transportAndWash = c => {
        console.log(`Transporting and washing`);
        return Math.floor(c);
    };
    
    function executeOperation(microns, opStr, op) {
        let newSize = op(microns);
        let counter = 0;

        while (newSize > targetSize - 2) {
            microns = newSize;
            newSize = op(microns);
            counter++;
        }

        if (counter > 0) {
            console.log(`${opStr} x${counter}`);
            microns = transportAndWash(microns);
        }

        return microns;
    }

    for (let i = 1; i < numArr.length; i++) {
        let microns = numArr[i];
        console.log(`Processing chunk ${microns} microns`);
        microns = executeOperation(microns, 'Cut', cut);
        microns = executeOperation(microns, 'Lap', lap);
        microns = executeOperation(microns, 'Grind', grind);
        microns = executeOperation(microns, 'Etch', etch);

        if (microns === targetSize - 1) {
            microns = xRay(microns);
            console.log(`X-ray x1`);
        }

        console.log(`Finished crystal ${microns} microns`);
    }
}

solve([1375, 50000]);