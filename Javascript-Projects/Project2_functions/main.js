alert("It's Working!"); // Creates an alert pop-up with text
var A = "This is a string printed using Document Write!"; // Variable assigned to a string
var B = "This is a string printed using Window.Alert()!"; // Variable assigned to a string
var C = "This is a string printed with an apostrophe. It\'s a escape character! (The apostrophe is \')"; // Variable assigned to a string
var D = 4 // Variable assigned to a number
var E = 9 // Variable assigned to a number
document.write("This is a Document Write!"); // Write a string into the current HTML document
document.write(A); // Write a variable value into the current HTML document
document.write(C); // Write a variable value into the current HTML document
document.write(D + E); // Write a variable value into the current HTML document
document.write(3 + 3); // Write an expression result into the current HTML document
window.alert(B); // Write a variable value into the current HTML document

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

function Subtraction() { // Function prototyping, defining a Function
    var SubtractionVariable = 5 - 2; // Variable assigned to an arithmetic expression
    document.getElementById("SubtractionParagraph").innerHTML = "5 - 2 = " + SubtractionVariable; // Calling a Method to change the text of an Element
}

function Multiplication() { // Function prototyping, defining a Function
    var MultiplicationVariable = 5 * 2; // Variable assigned to an arithmetic expression
    document.getElementById("MultiplicationParagraph").innerHTML = "5 * 2 = " + MultiplicationVariable; // Calling a Method to change the text of an Element
}

function MultiMath() { // Function prototyping, defining a Function
    var MultiMathVariable = 5 * 2 + 4 - 8 / 2; // Variable assigned to an arithmetic expression
    document.getElementById("MultiMathParagraph").innerHTML = "5 * 2 + 4 - 8 / 2 = " + MultiMathVariable; // Calling a Method to change the text of an Element
}

function Modulus() { // Function prototyping, defining a Function
    var ModulusVariable = 5 % 2; // Variable assigned to an arithmetic expression
    document.getElementById("ModulusParagraph").innerHTML = "5 % 2 = " + ModulusVariable; // Calling a Method to change the text of an Element
}

function UnaryNegation() { // Function prototyping, defining a Function
    var NegationVariable = 10; // Variable assigned to an arithmetic expression
    document.getElementById("UnaryParagraph").innerHTML = " Negation Variable = " + -NegationVariable; // Calling a Method to change the text of an Element
}


