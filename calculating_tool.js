function salesClerk() {
	var purchasePrice=parseFloat(prompt("Enter the value of the item you're purchasing.", "0"), 10);
	if (purchasePrice <= 0) {
		alert ("Please input a value greater than '0'.");
	}
	//add statement to prevent user from inputing words (prevent NaN popup)
	else {
	var taxRate=.08;
	var taxOnPrice=purchasePrice * taxRate;
	var total=purchasePrice + taxOnPrice;
	alert("Your bill is $" + Math.round(total*Math.pow(10,2))/Math.pow(10,2));
	}	
}