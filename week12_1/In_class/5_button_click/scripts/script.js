console.log("hello");

function changeColor() {
	//get an element with id hello
	var newColor = document.getElementById("hello");
	// access style and change backgroundColor property 
	newColor.style.backgroundColor = "lightgreen";
}