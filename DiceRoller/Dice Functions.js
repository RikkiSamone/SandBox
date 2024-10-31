//Function Breakdown for Dice Roller

//XdY; x- number of dice we have; y - dice type (2d6); (7d10); (1d20)

//Function that rolls 1 die (1d6)
//d - dice; y - how many sides the die will have | generate a random number between 1 and y; so my dice can have any number of sides > 1

//the code
function d(y) { 
    return Math.floor(Math.random() * y) + 1;
    //randomizes the number between 0 and not 1; generates a random string of decimals for d(y); 
    //Math.floor will remove the decimal for a random number between 0 and not 1. 
    //Note Math.random will never return 1; so add 1 to allow 1 to be randomized. 
    //(If zero, is randomly plus 1; will roll a 1 and never a zero; since die don't have a zero.)

}


//the tests
if (1(d4)) //should generate 1, 4-sided die' and return a whole number between 1 and 4.
    
