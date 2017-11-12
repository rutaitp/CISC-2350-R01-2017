// use jquery to load the page first
$(document).ready(function() {
	// check if it's loading
	console.log("hello");

	// define your variables
	var todayIsCloudy;
	
	todayIsCloudy = true;

	//check the type of todayIsCloudy
	console.log(typeof todayIsCloudy);

	var textToShow = document.getElementById("answer");

	// check if boolean is true or false
	if (todayIsCloudy == true) {
		// if true, show this
		console.log("Yes, today is cloudy!");
		textToShow.innerHTML = "Yes, today is cloudy!";
		// otherwise show this
	} else {
		console.log("No, it's actually sunny today!");
		textToShow.innerHTML = "No, it's actually sunny today!";
	}

});