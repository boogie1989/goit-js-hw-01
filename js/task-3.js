function getElementWidth(content, padding, border) {
	pxStringGuard(content, "content");
	pxStringGuard(padding, "padding");
	pxStringGuard(border, "border");

	return parseFloat(content) + parseFloat(padding) * 2 + parseFloat(border) * 2;
}

logResults("Get Element Width", [
	getElementWidth("50px", "8px", "4px").toString(),
	getElementWidth("60px", "12px", "8.5px").toString(),
	getElementWidth("200px", "0px", "0px").toString(),
]);
