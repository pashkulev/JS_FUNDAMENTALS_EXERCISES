function printTrackInfo(trackData) {
    let [trackName, artist, duration] = trackData;
    console.log(`Now Playing: ${artist} - ${trackName} [${duration}]`);
}

printTrackInfo(['Number One', 'Nelly', '4:09']);