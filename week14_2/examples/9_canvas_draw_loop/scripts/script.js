$(document).ready(function() {
	//access canvas from HTML
	var c = document.getElementById("myCanvas");
	var context = c.getContext("2d");
	
	// Set the variable where x and y should start
	var x = 0;
	var y;

    var draw = function() {
        //we set to begin drawing a path
        context.beginPath();
        // Set a random color
		context.strokeStyle='#'+(Math.random()*0xFFFFFF<<0).toString(16);
        //we tell where the line should end
        context.moveTo(x,y);
        //end bigin in the middle of canvas
        context.lineTo(c.width/2,c.height/2);
        //use stroke to actually draw it
        context.stroke();
        
        //we need to use x++, so lines increment, otherwise they just draw on top of another
        x++;
        //if x exceeds canvas width, start from zero
        if (x > c.width) { 
        	x = 0;
        }
        // Set that y should be random and go to all directions
        y = Math.random()*c.width;
    };

    /* to make it actually work we need to use setInterval
    to set how often the function should run */
    setInterval(draw,1000/30); // 30 x per second
});