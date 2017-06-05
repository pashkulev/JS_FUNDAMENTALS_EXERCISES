function colorfulNumbers(num) {
    //let num = document.getElementById('num');
    let result = "<ul>\n";
    for (let i = 1; i <= num; i++) {
        let color = i % 2 != 0 ? "green" : "blue";
        result += `  <li><span style='color:${color}'>${i}</span></li>\n`;
    }
    result += "<ul>";
    // console.log(result);
    document.write(result);
    //document.getElementById('color').innerHTML = result;
}

colorfulNumbers(10);