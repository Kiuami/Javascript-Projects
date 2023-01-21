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

function ButtonClick() { // Function prototyping, defining a Function
    var ParagraphString = "I changed the text!"; // Variable assigned to a string
    document.getElementById("ParagraphText").innerHTML = ParagraphString; // Calling a Method to change the text of an Element
}

function ButtonConcatenate() { // Function prototyping, defining a Function
    var ParagraphString = "I changed the text"; // Variable assigned to a string
    ParagraphString += " by using a function!"; // Concatenating a string
    document.getElementById("Button_Concatenate").innerHTML = ParagraphString; // Calling a Method to change the text of an Element
}

