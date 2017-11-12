// use jquery to load the page first
$(document).ready(function() {
	// check if it's loading
	console.log("hello");

	// define your variables, array literal
	var movies = ["The Lobster", "Get Out", "Blade Runner"];

	//console the type and output
	console.log(typeof movies);
	console.log(movies);

	// define your variables, array constructor
	var moviesTwo = new Array("The Lobster", "Get Out", "Blade Runner");

	// console the type and output
	console.log(typeof moviesTwo);
	console.log(moviesTwo);

	// console the third movie in the array
	var thirdMovie = movies[2];
	console.log(thirdMovie);

	//check number of items in the array
	var moviesLength = movies.length;
	console.log(moviesLength);

	//update the third item in an array
	var newThirdMovie = "Gone Girl";
	movies[2] = newThirdMovie;
	console.log(movies);

});