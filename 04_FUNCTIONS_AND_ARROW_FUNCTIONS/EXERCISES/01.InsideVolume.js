function insideOrOutside(nums) {
    for (let i = 0; i < nums.length; i += 3) {
        let x = nums[i];
        let y = nums[i + 1];
        let z = nums[i + 2];

        if (isInside(x, y, z)) {
            console.log(`inside`);
        } else {
            console.log(`outside`);
        }
    }

    function isInside(x, y, z) {
        "use strict";
        let xMin = 10;
        let xMax = 50;
        let yMin = 20;
        let yMax = 80;
        let zMin = 15;
        let zMax = 50;

        return (x >= xMin && x <= xMax) && (y >= yMin && y <= yMax) && (z >= zMin && z <= zMax);
    }
}

insideOrOutside([13.1, 50, 31.5, 50, 80, 50, -5, 18, 43]);