function calendar(array) {
    let [day, month, year] = array.map(Number);
    let today = new Date(year, month - 1, day);
    let dayOneNextMonth = new Date(year, month, 1);
    let monthIndex = today.getMonth();

    // find first sunday in the calendar - this is our starting date
    let currentDate = new Date(year, month - 1, 1);
    let dayOfWeekIndex = currentDate.getDay();
    currentDate.setDate(currentDate.getDate() - dayOfWeekIndex);

    dayOfWeekIndex = 0;
    let html = `<table>\n`;
    html += `  <tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr>\n`;

    while (true) {
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

            if (dayOneNextMonth <= currentDate) {
                break;
            }
        }
    }

    html += `</table>`;
    return html;
}

console.log(calendar([1, 1, 1900]));