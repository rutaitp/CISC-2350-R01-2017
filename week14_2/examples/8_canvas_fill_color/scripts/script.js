$(document).ready(function() {
	//access canvas from HTML
	var c = document.getElementById("myCanvas");
	var context = c.getContext("2d");
	//say which color should fill in
	context.fillStyle="#FF0000";
	// use fillRect to actually fill it in
    context.fillRect(0,0,c.width,c.height);
});