function escapeHtml(input) {
    let result = '<ul>\n';
    for (let str of input) {
        result += '  <li>';
        str = str.replace(/&/g, '&amp;');
        str = str.replace(/</g, '&lt;');
        str = str.replace(/>/g, '&gt;');
        str = str.replace(/"/g, '&quot;');
        result += str;
        result += '</li>\n';
    }
    result += '</ul>';

    console.log(result);
}

escapeHtml(['<div style=\"color: red;\">Hello, Red!</div>', '<table><tr><td>Cell 1</td><td>Cell 2</td><tr>']);