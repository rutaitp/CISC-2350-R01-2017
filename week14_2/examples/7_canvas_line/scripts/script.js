$(document).ready(function() {
	//access canvas from HTML
	var c = document.getElementById("myCanvas");
	var ctx = c.getContext("2d");

	//say where the line should start
	ctx.moveTo(0,0);
	//say where the line should move: x to 200, y to 100
	ctx.lineTo(300,300);
	//say the line should actually be a stroke - visible
	ctx.stroke();
});