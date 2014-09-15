function salesClerk() {
	var purchasePrice=14.95;
	var taxRate=.05;
	var taxOnPrice=purchasePrice * taxRate;
	var total=purchasePrice + taxOnPrice;
	alert("Your bill is $" + total);
}