$(document).ready (function () {
//My form with all names
        var myForm = document.getElementById("myForm");
        var sortButton = document.getElementById("sortButton");
        var names = [];
    
        
        sortButton.onclick = function () {
            //Figure out how many names there were
            var numberChooser = document.getElementById("numberChooser").value;
            
            //Add each name to my names array
            /*start from the top and take all the existing values
            for the number that was entered to the question "how many people in class?"*/
            for(i = 0; i<numberChooser; i++){
                names.push(myForm.elements[i].value);
            }
            
            //current index keeps track of the names being randomized
            //shows the same number that was selected for numberChooser
            var currentIndex = names.length, temporaryValue, randomIndex;
            
            // While there remain elements to shuffle...
            // This is written to randomize all the names
            while (0 !== currentIndex) {
                // Pick a remaining element...
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex -= 1;
                // And swap it with the current element.
                temporaryValue = names[currentIndex];
                names[currentIndex] = names[randomIndex];
                names[randomIndex] = temporaryValue;
            } 
            
            //Write the names below
            for(i=0; i<names.length; i=i+2){
                document.getElementById("groupNames").innerHTML += names[i] + " with " + names[i+1] + "<br/>";
            }
        }
});