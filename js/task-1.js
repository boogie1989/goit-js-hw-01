function makeTransaction(quantity, pricePerDroid) {
	numberGuard(quantity, "quantity");
	numberGuard(pricePerDroid, "pricePerDroid");

	return `You ordered ${quantity} droids worth ${quantity * pricePerDroid} credits!`;
}

logResults("Make Transaction", [makeTransaction(5, 3000), makeTransaction(3, 1000), makeTransaction(10, 500)]);
