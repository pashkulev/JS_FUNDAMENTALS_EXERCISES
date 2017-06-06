function countOccurences(target, text) {
	let startIndex = text.indexOf(target);
	let count = 0;
	
	while (startIndex !== -1) {
		count++;
		startIndex = text.indexOf(target, startIndex + 1);
	}
	
	console.log(count);
}