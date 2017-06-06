function escape(strArray) {
	let result = '<ul>\n';
	for (let str of strArray) {
		result += '  <li>';
		for (let i = 0; i < str.length; i++) {
			let currentSymbol = str.charAt(i);
			switch (currentSymbol) {
				case '<': result += '&lt;'; break;
				case '>': result += '&gt;'; break;
				case '&': result += '&amp;'; break;
				case '"': result += '&quot;'; break;
				default: result += currentSymbol; break;
			}
		}
		result += '</li>\n';
	}
	result += '</ul>';
	
	console.log(result);
}