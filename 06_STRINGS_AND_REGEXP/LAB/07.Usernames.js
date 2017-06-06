function extractUsernames(emails) {
	let usernames = [];
	
	for (let email of emails) {
		let [alias, domain] = email.split('@');
		let domainTokens = domain.split(".");
		let username = alias + "." + domainTokens.map(dt => dt.charAt(0)).join("");
		usernames.push(username);
	}
	
	console.log(usernames.join(", "));
}