function nextDay(year, month, day) {
    var date = new Date(year, month - 1, day);
    date.setDate(date.getDate() + 1);
    console.log(date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate());
}

nextDay(2016, 9, 30);