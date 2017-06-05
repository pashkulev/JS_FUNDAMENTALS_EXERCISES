function composeTag(data) {
    let [location, alternateText] = data;
    console.log(`<img src="${location}" alt="${alternateText}">`)
}

composeTag(['smiley.gif', 'Smiley Face']);