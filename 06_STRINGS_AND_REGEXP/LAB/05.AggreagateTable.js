function aggregateTable(strArray) {
	let towns = [];
	let totalSum = 0;
	
	for (let i = 0; i < strArray.length; i++) {
		let tokens = strArray[i].split("|");
		towns.push(tokens[1].trim());
		totalSum += Number(tokens[2].trim());
	}
	
	console.log(towns.join(', '));
	console.log(totalSum);
}