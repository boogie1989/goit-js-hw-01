function getShippingMessage(country, price, deliveryFee) {
	stringGuard(country, "country");
	numberGuard(price, "price");
	numberGuard(deliveryFee, "deliveryFee");

	return `Shipping to ${country} will cost ${price + deliveryFee} credits`;
}

logResults("Get Shipping Message", [
	getShippingMessage("Australia", 120, 50),
	getShippingMessage("Germany", 80, 20),
	getShippingMessage("Sweden", 100, 20),
]);
