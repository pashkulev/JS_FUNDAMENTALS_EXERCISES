function calendar(array) {
    let [day, month, year] = array.map(Number);
    // validate input
    if (year < 1900 || year > 2100) {
        return `<div>Invalid year!</div>`;
    } else if (month < 1 || month > 12) {
        return `<div>Invalid month!</div>`;
    } else {
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
                let isLeap = ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0);
                daysInCurrentMonth = isLeap ? 29 : 28;
                break;
        }

        if ((day < 1 || day > daysInCurrentMonth)) {
            return `<div>Invalid date!</div>`;
        }
    }

    // declare variables
    let currentDate = new Date(year, month - 1, day);
    let firstDayOfCurrentMonth = new Date(year, month - 1, 1);
    let lastDayOfCurrentMonth = new Date(year, month, 0);

    // set current date to first sunday in our calendar
    let dayOfWeek = firstDayOfCurrentMonth.getDay();
    currentDate.setDate(firstDayOfCurrentMonth.getDate() - dayOfWeek);

    // start building our table
    let html = "<table>\n";
    html += `  <tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr>\n`;
    dayOfWeek = 0;

    while (true) {
        if (dayOfWeek === 0) {
            html += `  <tr>`;
        }

        if (currentDate < firstDayOfCurrentMonth) {
            html += `<td class="prev-month">${currentDate.getDate()}</td>`;
        } else if (currentDate <= lastDayOfCurrentMonth) {
            let date = currentDate.getDate();
            if (date === day) {
                html += `<td class="today">${date}</td>`;
            } else {
                html += `<td>${date}</td>`;
            }
        } else {
            html += `<td class="next-month">${currentDate.getDate()}</td>`;
        }

        currentDate.setDate(currentDate.getDate() + 1);
        dayOfWeek++;
        dayOfWeek %= 7;

        if (dayOfWeek === 0) {
            html += `</tr>\n`;

            if (currentDate > lastDayOfCurrentMonth) {
                break;
            }
        }
    }

    html += `</table>`;
    return html;
}

function getYear() {
    let date = new Date();
    return date.getFullYear();
}

function getMonth() {
    let date = new Date();
    return date.getMonth() + 1;

}

function getDate() {
    let date = new Date();
    return date.getDate();
}

console.log(calendar([1, 1, 2016]));
