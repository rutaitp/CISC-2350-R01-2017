function myFunction(event) {
	// check if the pressed key is enter
	// if yes, execute the code below
	if ((event.keycode == 13) || (event.which == 13)) {

		// get the value of the entered input 
		var nameToShow = document.getElementById("nameToShow").value;
		// declare the variable that we'll be using inside switch statement
		var textToShow;

		// write an if statement

		if((nameToShow == "Keba") || (nameToShow == "Tasfia")  || (nameToShow == "Jake")) {
			textToShow = "Hi! You're in the class! Finals are in two and a half weeks!";
			document.getElementById("name").innerHTML = textToShow;
		} else {
			textToShow = "Sorry, you're not in the class!";
			document.getElementById("name").innerHTML = textToShow;
		}

	}
	
}