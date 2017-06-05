function getLastDayOfLastMonth(dateData) {
    let [month, year] = [dateData[1], dateData[2]];
    let date = new Date(year, month - 1, 1);
    date.setDate(date.getDate() - 1);
    console.log(date.getDate());
}

getLastDayOfLastMonth([13, 12, 2004]);