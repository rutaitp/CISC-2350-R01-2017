function buttonClicked() {

		// get the first name value from the form
		var firstName = document.getElementById("firstName");
		var firstNameToShow = firstName.value;

		// get the last name value from the form
		var lastName = document.getElementById("lastName");
		var lastNameToShow = lastName.value;

		//display text on the page
		var textToShow = document.getElementById("fullNameToShow");
		textToShow.innerHTML = firstNameToShow + " " + lastNameToShow;

}
