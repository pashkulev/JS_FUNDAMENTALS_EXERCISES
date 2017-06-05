function roadRadar(arr) {
    "use strict";
    let [speed, area] = arr;
    let speedLimit = getSpeedLimit(area);
    return evaluateSeverity(speed, speedLimit);

    function getSpeedLimit(area) {
        switch (area) {
            case 'motorway': return 130;
            case 'interstate': return 90;
            case 'city': return 50;
            case 'residential': return 20;
        }
    }

    function evaluateSeverity(speed, limit) {
        if (speed > limit) {
            let speedOverLimit = speed - limit;
            if (speedOverLimit <= 20) {
                return 'speeding';
            } else if (speedOverLimit <= 40) {
                return 'excessive speeding';
            } else {
                return 'reckless driving';
            }
        }

        return "";
    }
}

console.log(roadRadar([21, 'residential']));;