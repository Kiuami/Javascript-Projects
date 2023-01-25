

var F = 5; // Variable assigned to a number
F++; // Variable with an increment operator
document.write(F); // Show the results of the increment

var G = 5; // Variable assigned to a number
G--; // Variable with a decrement operator
document.write(G); // Show the results of the decrement


document.write(Math.random()); // Print a random number

document.write(math.random() * 100); // Print a random number mutliplied by 100

document.write(Math.SQRT8); // Find the square root of 8.

document.write(Math.ceil(8.7)); // Round 8.7 UP to it's nearest integer.

function ButtonClick() { // Function prototyping, defining a Function
    var ParagraphString = "I changed the text!"; // Variable assigned to a string
    document.getElementById("ParagraphText").innerHTML = ParagraphString; // Calling a Method to change the text of an Element
}

function ButtonConcatenate() { // Function prototyping, defining a Function
    var ParagraphString = "I changed the text"; // Variable assigned to a string
    ParagraphString += " by using a function!"; // Concatenating a string
    document.getElementById("Button_Concatenate").innerHTML = ParagraphString; // Calling a Method to change the text of an Element
}

function Dictionary() { // Function prototyping, defining a Function
    var Animal = {
        Species: "Dog",
        Color: "Black",
        Breed: "Labrador",
        Age: 5,
        Sound: "Bark!"
    }; // Variable assigned to a string
    delete Animal.Sound;
document.getElementById("Dictionary").innerHTML = Animal.Sound; // Calling a Method to change the text of an Element
}



