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
    let firstDayOfNextMonth = new Date(year, month, 1);

    // set current date to first sunday in our calendar
    let dayOfWeek = firstDayOfCurrentMonth.getDay();
    currentDate.setDate(firstDayOfCurrentMonth.getDate() - dayOfWeek);
    dayOfWeek = 0;

    // start building our table
    let html = "<table>\n";

    // build calendar header
    let daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    html += `  <tr>`;
    for (let i = 0; i < daysOfWeek.length; i++) {
        html += `<th>${daysOfWeek[i]}</th>`;
    }
    html += `</tr>\n`;

    // print prev month dates
    while (currentDate < firstDayOfCurrentMonth) {
        if (dayOfWeek == 0) {
            html += `  <tr>`;
        }

        html += `<td class="prev-month">${currentDate.getDate()}</td>`;
        currentDate.setDate(currentDate.getDate() + 1);
        dayOfWeek++;
    }

    // print current month dates
    while (currentDate < firstDayOfNextMonth) {
        if (dayOfWeek == 0) {
            html += `  <tr>`;
        }

        let date = currentDate.getDate();
        if (date == day) {
            html += `<td class="today">${date}</td>`;
        } else {
            html += `<td>${date}</td>`;
        }

        currentDate.setDate(currentDate.getDate() + 1);
        dayOfWeek++;
        dayOfWeek %= 7;

        if (dayOfWeek == 0) {
            html += `</tr>\n`;
        }
    }

    // print next month days
    while (dayOfWeek != 0) {
        html += `<td class="next-month">${currentDate.getDate()}</td>`;
        currentDate.setDate(currentDate.getDate() + 1);
        dayOfWeek++;
        dayOfWeek %= 7;

        if (dayOfWeek == 0) {
            html += `</tr>\n`;
        }
    }

    html += `</table>`;
    return html;
}

console.log(calendar([4, 9, 2016]));;
