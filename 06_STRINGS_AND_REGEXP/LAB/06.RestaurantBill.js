function restaurantBill(input) {
	let products = [];
	let totalPrice = 0;
	
	for (let i = 0; i < input.length; i += 2) {
		let product = input[i];
		products.push(product);
		let price = Number(input[i + 1]);
		totalPrice += price;
	}
	
	console.log(`You purchased ${products.join(', ')} for a total sum of ${totalPrice}`);
}