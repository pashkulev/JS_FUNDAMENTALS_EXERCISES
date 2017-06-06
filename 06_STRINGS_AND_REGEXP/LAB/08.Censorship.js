function censorship(text, arr) {
	
	for (let str of arr) {
		while (text.indexOf(str) > -1) {
			text = text.replace(str, '-'.repeat(str.length));
		}
	}
	
	console.log(text);
}