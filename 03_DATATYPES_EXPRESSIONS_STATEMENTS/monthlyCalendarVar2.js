function calendar(array) {
    let [day, month, year] = array.map(Number);
    let today = new Date(year, month - 1, day);

    // find first sunday in the calendar - this is our starting date
    let currentDate = new Date(year, month - 1, 1);
    let dayOfWeekIndex = currentDate.getDay();
    currentDate.setDate(currentDate.getDate() - dayOfWeekIndex);

    // find last saturday in the calendar - this is our end date
    let daysInCurrentMonth = 0;
    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            daysInCurrentMonth = 31;
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            daysInCurrentMonth = 30;
            break;
        case 2:
            let isLeap = ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0);
            daysInCurrentMonth = isLeap ? 29 : 28;
            break;
    }

    let endDate = new Date(year, month - 1, daysInCurrentMonth);
    dayOfWeekIndex = endDate.getDay();
    endDate.setDate(endDate.getDate() + (7 - dayOfWeekIndex));

    let monthIndex = today.getMonth();
    dayOfWeekIndex = 0;
    let html = `<table>\n`;
    html += `  <tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr>\n`;

    while (currentDate < endDate) {
        let currentMonthIndex = currentDate.getMonth();
        let currentYear = currentDate.getFullYear();
        let dayOfMonth = currentDate.getDate();
        let isPreviousMonth = (monthIndex > currentMonthIndex && year >= currentYear) || (currentYear < year);

        if (dayOfWeekIndex === 0) {
            html += `  <tr>`;
        }

        if (isPreviousMonth) {
            html += `<td class="prev-month">${dayOfMonth}</td>`;
        } else if (monthIndex === currentMonthIndex) {
            if (dayOfMonth === today.getDate()) {
                html += `<td class="today">${dayOfMonth}</td>`;
            } else {
                html += `<td>${dayOfMonth}</td>`;
            }
        } else {
            html += `<td class="next-month">${dayOfMonth}</td>`;
        }

        // update
        currentDate.setDate(currentDate.getDate() + 1);
        dayOfWeekIndex++;
        dayOfWeekIndex %= 7;
        if (dayOfWeekIndex === 0) {
            html += `</tr>\n`;
        }
    }

    html += `</table>`;
    return html;
}

console.log(calendar([1, 1, 1900]));