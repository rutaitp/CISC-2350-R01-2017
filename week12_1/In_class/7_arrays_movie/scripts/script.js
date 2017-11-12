// use jquery to load the page first
$(document).ready(function() {
	// check if it's loading
	console.log("hello");

	// define your variables, array literal
	var movies = ["The Lobster", "Get Out", "Blade Runner"];

	// to show in one line
	//notice how there are no spaces in between movies?
	//you should add spaces in the array as well
	// var listToShow = document.getElementById("list");
	// listToShow.innerHTML = movies;


	// loop through the list and show one by one
	for (var i=0; i < movies.length; i++) {

		//create new span for each element in movies array
		var movieToShow = document.createElement("SPAN");
		//add text to each span, where value is each item from the array
		movieToShow.innerHTML = movies[i] + "<br>";
		//add it to div as well
		var container = document.getElementById("container");
		container.appendChild(movieToShow);
	};

});