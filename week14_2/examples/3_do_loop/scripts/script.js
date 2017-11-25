function myFunction(event) {
	// check if the pressed key is enter
	// if yes, execute the code below
	if ((event.keycode == 13) || (event.which == 13)) {

		// get the value of the entered input 
		var numberToCount = document.getElementById("numberToCount").value;
		var i=1;
		var msg = "";

		// execute a while loop
		do {
			msg += i + " x " + i +  " = " + (i*i) + "<br>";
			i++;
		} while (i < numberToCount);

		// put the text on the page in a p element
		document.getElementById("name").innerHTML = msg;


	}
	
}