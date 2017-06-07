function extractText(str) {
	let startIndex = str.indexOf('(');
	let resultList = [];
	
	while (startIndex > -1) {
		let endIndex = str.indexOf(')', startIndex);
		if (endIndex === -1) {
			break;
		}
		
		let text = str.substring(startIndex + 1, endIndex);
		resultList.push(text);
		
		startIndex = str.indexOf('(', endIndex);
	}
	
	console.log(resultList.join(', '));
}

extractText('Rakiya (Bulgarian brandy) is self-made liquor (alcoholic drink)');