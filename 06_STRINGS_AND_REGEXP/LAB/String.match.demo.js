function findAllMatchesByRegex() {
    let text = "I was born at 14-Jun-1980. Today is 29-Sep-2016. " +
        "Next year starts at 1-Jan-2017 and ends at 31-Dec-2017.";

    let dateRegex = /\d{1,2}-[A-Za-z]{3}-\d{4}/g;
    let dates = text.match(dateRegex);
    dates.forEach(d => console.log(d));
}

findAllMatchesByRegex();