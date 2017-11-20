// use jquery to make sure page loads before any javascript code
$( document ).ready (function() {

	// declare our list of people
	var peopleInClass = ["Tasfia", "Keba", "Jake", "Sean", "Noelle", 
	"Salvatore", "Chrissy", "Claire", "Jenna", "John", "Ish", "Sayed", 
	"Will", "Caroline", "Julian", "Michaela", "Lea", "Hayden",
	"David", "Briana", "Md", "Danielle"];

	// get div element that will contain our text from the list
	var parToShowText = document.getElementById("list");
	//declare variable that we'll use to put our text in
	var textToShow;

	// loop through array
	for (var i=0; i<peopleInClass.length; i++) {

		// for each element create span element
		textToShow = document.createElement("SPAN");
		// put an item from the list
		textToShow.innerHTML = peopleInClass[i] + " ";
		// append to parent div to hold it
		parToShowText.appendChild(textToShow);
	}

});