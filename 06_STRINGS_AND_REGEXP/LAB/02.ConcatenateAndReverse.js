function concatAndReverse(strArray) {
	let result = strArray.join("").split("").reverse().join("");
	console.log(result);
}

function concatenateAndReverse(arr) {
  let allStrings = arr.join('');
  let chars = Array.from(allStrings); // that's the to convert strings to array
  let revChars = chars.reverse();
  let revStr = revChars.join('');
  return revStr;
}

concatenateAndReverse(['I', 'am', 'student']);