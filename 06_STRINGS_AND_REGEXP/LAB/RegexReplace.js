// Example of String.replace() with capturing groups
function regexReplace() {
    let str = 'Visit <link>http://fb.com</link> or <link>http://softuni.bg</link>.';
    str = str.replace(/<link>(.*?)<\/link>/g,
        '<a href="$1">Link</a>');
    console.log(str);
}

regexReplace();

// functional replace
let functionalReplace = text => text.replace(/(-?\d+)\s*\*\s*(-?\d+(\.\d+)?)/g,
    (match, num1, num2) => Number(num1) * Number(num2));

console.log(functionalReplace('My bill: 2*2.50 (beer); 2* 1.20 (kepab); -2  * 0.5 (deposit).'));