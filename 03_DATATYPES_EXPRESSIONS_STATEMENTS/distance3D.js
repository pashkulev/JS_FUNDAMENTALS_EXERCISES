function calcDistance3D(array) {
    let [x1, y1, z1, x2, y2, z2] = array;
    let distanceX = Math.abs(x1 - x2);
    let distanceY = Math.abs(y1 - y2);
    let distanceZ = Math.abs(z1 - z2);

    let missingDistance = Math.sqrt(Math.pow(distanceX, 2) + Math.pow(distanceY, 2));
    let distance3d = Math.sqrt(Math.pow(missingDistance, 2) + Math.pow(distanceZ, 2));

    console.log(distance3d);
}

calcDistance3D([3.5, 0, 1, 0, 2, -1]);