function isPalindrome(str) {
    let length = str.length;
    let isPalindrome = true;
    for (let i = 0, j = length - 1; i < length / 2; i++, j--) {
        if (str[i] !== str[j]) {
            isPalindrome = false;
            break;
        }
    }

    return isPalindrome;
}

console.log(isPalindrome('abcccba'));
console.log(isPalindrome('xyz'));
console.log(isPalindrome('abba'));
console.log(isPalindrome('racecar'));