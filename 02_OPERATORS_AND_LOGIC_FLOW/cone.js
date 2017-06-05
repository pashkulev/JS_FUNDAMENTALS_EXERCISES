function calcConeAreaAndVolume(radius, height) {
    let volume = (1/3) * Math.PI * Math.pow(radius, 2) * height;
    let slantHeight = Math.sqrt(Math.pow(radius, 2) + Math.pow(height, 2));
    let lateralSurface = Math.PI * radius * slantHeight;
    let baseSurface = Math.PI * Math.pow(radius, 2);
    let totalSurface = lateralSurface + baseSurface;

    console.log("volume = " + volume);
    console.log("area = " + totalSurface);
}

calcConeAreaAndVolume(3.3, 7.8);