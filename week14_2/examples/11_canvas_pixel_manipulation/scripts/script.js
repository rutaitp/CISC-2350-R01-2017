$(document).ready(function() {
	//access canvas from HTML
	var c = document.getElementById("myCanvas");
	var context = c.getContext("2d");

    //access image element from html
    var img = document.getElementById("myImage");
    //draw it on canvas
    context.drawImage(img, 0, 0, 400, 300);

    c.addEventListener('mousedown', function(evt) {  
        // Get the CanvasPixelArray from the given coordinates and dimensions.
        var imgd = context.getImageData(0, 0, 400, 300);
        var pix = imgd.data;

        // Log what data it's returning
        // See what values it's returning - 0-255, so it's rgb
        console.log(pix);

        /* For every pixel in an ImageData object there are
        four pieces of information, the RGBA values:
        R - The color red (from 0-255)
        G - The color green (from 0-255)
        B - The color blue (from 0-255)
        A - The alpha channel (from 0-255; 0 is transparent and 255 is fully visible) */

        // Loop over each pixel and invert the color
        // i += 4 because we have to jump over 4 RGBS values
        for (var i = 0; i < pix.length; i += 4) {
            pix[i] = 255 - pix[i]; // red
            pix[i+1] = 255 - pix[i+1]; // green
            pix[i+2] = 255 - pix[i+2]; // blue
        }

        // Draw the ImageData at the given (x,y) coordinates.
        // putImageData is used to put data back
        context.putImageData(imgd, 0, 0);
    });
	
});