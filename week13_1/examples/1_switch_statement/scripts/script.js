function myFunction(event) {
	// check if the pressed key is enter
	// if yes, execute the code below
	if ((event.keycode == 13) || (event.which == 13)) {

		// get the value of the entered input 
		var nameToShow = document.getElementById("nameToShow").value;
		// declare the variable that we'll be using inside switch statement
		var textToShow;

		// write a switch statement
		switch(nameToShow) { //first we check a condition 
			// then write multiple cases
			case "Keba":
			case "Dekeba":
			case "Tasfia":
			case "Jake":
			case "Sean":
			case "Noelle":
			case "Salvatore":
			case "Chrissy":
			case "Claire":
			case "Jenna":
			case "John":
			case "Ish":
			case "Sayed":
			case "Will":
			case "Caroline":
			case "Julian":
			case "Michaela":
			case "Lea":
			case "Hayden":
			case "David":
			case "Briana":
			case "Md":
			case "Danielle":
				// if any match, text to show is this
				textToShow = "Hi! You're in the class! Finals are in two and a half weeks!";
				document.getElementById("name").innerHTML = textToShow;
				break;
			// if none match, show this
			default:
				textToShow = "Sorry, you're not in the class!";
				document.getElementById("name").innerHTML = textToShow;
		}

		// document.getElementById("name").innerHTML = textToShow;


	}
	
}