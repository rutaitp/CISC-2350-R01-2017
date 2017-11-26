// use jquery to make sure page loads before any javascript code
$( document ).ready (function() {

	// Get data from external file
	var peopleInClass = jQuery.get("data/names.txt", function(data) {
		console.log(data);

		//turn returned data string into array
		var dataInArray = data.split(", ");
		console.log(dataInArray);

		// get div element that will contain our text from the list
		var parToShowText = document.getElementById("list");
		//declare variable that we'll use to put our text in
		var textToShow;

		//loop through array and display one by one
		for (var i=0; i<dataInArray.length; i++) {
			// for each element create span element
			textToShow = document.createElement("SPAN");
			// put an item from the list
			textToShow.innerHTML = dataInArray[i] + "<br>";
			// append to parent div to hold it
			parToShowText.appendChild(textToShow);
		}
	});

});