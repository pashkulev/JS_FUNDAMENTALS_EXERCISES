function unescapeHTML(html) {
    let names = [];
    let startIndex = html.indexOf("<tr><th>");
    while (startIndex > -1) {
        startIndex += 8;
        let endIndex = html.indexOf('</th>', startIndex);
        let firstName = html.substring(startIndex, endIndex);
        startIndex = html.indexOf('<th>', endIndex) + 4;
        endIndex = html.indexOf('</th>', startIndex);
        let lastName = html.substring(startIndex, endIndex);

        if (firstName !== 'first name') {
            names.push(firstName + ' ' + lastName);
        }

        startIndex = html.indexOf("<tr><th>", endIndex);
    }

    console.log(unescapeHtml(names.join(', ')));

    function unescapeHtml(safe) {
        return safe.replace(/&amp;/g, '&')
            .replace(/&lt;/g, '<')
            .replace(/&gt;/g, '>')
            .replace(/&quot;/g, '"')
            .replace(/&#039;/g, "'")
            .replace(/&copy;/g, String.fromCharCode(169));
    }
}

unescapeHTML('<table><tr><th>first name</th><th>last name</th></tr><tr><th>Edsger</th><th>Dijkstra</th></tr><tr><th>Martin &copy;</th><th>Fowler</th></tr></table>');