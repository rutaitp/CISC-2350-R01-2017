// use jquery to load the page first
$(document).ready(function() {
	// check if it's loading
	console.log("hello");

	// define your variables
	var myName;
	var myMessage;
	var myMessageTwo;

	// assign values to variables
	myName = "Ruta";
	myMessage = "I am binge watching 'The Big Bang Theory'!"
	myMessageTwo = "I am binge watching \'The Big Bang Theory\'!";

	console.log(typeof myName);
	console.log(typeof myMessage);

	// check again if it's working
	console.log(myName + " " + myMessage);

	// display myName on the page
	// first, get the element by id myName
	var myNameShow = document.getElementById('myName');
	myNameShow.innerHTML = "My name is " + myName + "<br>";

	// display myMessage on the page
	var myMessageShow = document.getElementById('myMessage');
	myMessageShow.innerHTML = "What I want to say is... " + myMessage + "<br>";

	// display myMessageTwo on the page
	var myMessageTwoShow = document.getElementById('myMessageTwo');
	myMessageTwoShow.innerHTML = "What I want to say is... " + myMessageTwo;

});