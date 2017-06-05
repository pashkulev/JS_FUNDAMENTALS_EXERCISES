function formatXML(arr) {
    let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
    xml += `<quiz>\n`;
    for (let i = 0; i < arr.length; i += 2) {
        let question = arr[i];
        let answer = arr[i + 1];
        xml += formatQA(question, answer);
    }
    xml += `</quiz>`;
    return xml;

    function formatQA(question, answer) {
        return `  <question>\n` +
            `    ${question}\n` +
            `  </question>\n` +
            `  <answer>\n` +
            `    ${answer}\n` +
            `  </answer>\n`;
    }
}

console.log(formatXML(["Who was the forty-second president of the U.S.A.?",
    "William Jefferson Clinton"]
));