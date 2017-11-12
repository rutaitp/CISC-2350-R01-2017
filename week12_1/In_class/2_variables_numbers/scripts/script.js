// use jquery to load the page first
$(document).ready(function() {
	// check if it's loading
	console.log("hello");

	// define your variables
	var price;
	var quantity;
	var total;

	// assign values to variables
	price = 5;
	quantity = 14;
	total = price * quantity;

	//check data type
	console.log(typeof total);

	// check again if it's working
	console.log(total);

	// display the total on the page
	// first, get the element by id hello
	var textToShow = document.getElementById("hello");
	// add text in it
	textToShow.innerHTML = "Total cost is: " + "$" + total;

});