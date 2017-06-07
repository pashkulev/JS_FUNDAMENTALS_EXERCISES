function matchTheDates(datesArr) {
    let regex = /\b(\d{1,2})-([A-Z][a-z]{2})-(\d{4})\b/g;
    for (let dateStr of datesArr) {
        let matchResults;
        while (matchResults = regex.exec(dateStr)) {
            let entireMatchResult = matchResults[0];
            let date = matchResults[1];
            let month = matchResults[2];
            let year = matchResults[3];
            console.log(`${entireMatchResult} (Day: ${date}, Month: ${month}, Year: ${year})`);
        }
    }
}

matchTheDates(['1-Jan-1999 is a valid date.',
    'So is 01-July-2000.',
    'I am an awful liar, by the way – Ivo, 28-Sep-2016.']);