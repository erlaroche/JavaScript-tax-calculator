function salesClerk() {
	var purchasePrice=parseInt(prompt("Enter the value of the item you're purchasing.", "0"), 10);
	if (purchasePrice == 0) {
	 alert("There is no sales tax on '0', please input a value greater than '0'.");
	}
	if (purchasePrice < 0) {
		alert ("Please input a value greater than '0'.");
	}
	if (purchasePrice > 0) {
	var taxRate=.08;
	var taxOnPrice=purchasePrice * taxRate;
	var total=purchasePrice + taxOnPrice;
	alert("Your bill is $" + total);
	}	
}