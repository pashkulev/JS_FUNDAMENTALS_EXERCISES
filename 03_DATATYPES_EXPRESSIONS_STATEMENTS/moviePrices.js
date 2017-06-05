function getMoviePrice(movieData) {
    "use strict";
    let getDayOfWeekAsIndex = function(dayOfWeek) {
        switch (dayOfWeek) {
            case 'monday': return 0;
            case 'tuesday': return 1;
            case 'wednesday': return 2;
            case 'thursday': return 3;
            case 'friday': return 4;
            case 'saturday': return 5;
            case 'sunday': return 6;
            default: return -1;
        }
    };

    let movieDatabase = {
        'the godfather': [12, 10, 15, 12.50, 15, 25, 30],
        'schindler\'s list': [8.50, 8.50, 8.50, 8.50, 8.50, 15, 15],
        'casablanca': [8, 8, 8, 8, 8, 10, 10],
        'the wizard of oz': [10, 10, 10, 10, 10, 15, 15]
    };

    let movieTitle = movieData[0].toLowerCase();
    let dayOfWeek = movieData[1].toLowerCase();
    let dayOfWeekIndex = getDayOfWeekAsIndex(dayOfWeek);
    let movieEntry = movieDatabase[movieTitle];

    if (dayOfWeekIndex == -1 || movieEntry == undefined) {
        return "error";
    }

    return movieDatabase[movieTitle][dayOfWeekIndex];
}

console.log(getMoviePrice(['star wars', 'friday']));;