function salesClerk() {
	var purchasePrice=parseInt(prompt("Enter the value of the item you're purchasing.", "0"), 10);
	var taxRate=.08;
	var taxOnPrice=purchasePrice * taxRate;
	var total=purchasePrice + taxOnPrice;
	alert("Your bill is $" + total);
}