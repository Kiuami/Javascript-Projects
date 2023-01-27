var nann = 0/0; // Declare NaN as a value in a variable

document.write(nann); // Print the value of NaN

document.write(isNaN(0/0)); // Check if it is NaN or not

document.write(isNaN(1/1));

document.write(typeof "Word"); // Print the data type of the argument

document.write(typeof 3); // Print the data type of the argument

document.write("10" + 5); // Print true or false based on a comparison

document.write(10 > 5); // Print true or false based on a comparison

document.write(10 < 2); // Print true or false based on a comparison

console.log(2 + 2); // Press F12 to open the console and see this

console.log(12 < (2 + 2)); // Press F12 to open the console and see this

document.write(10 == 1); // Print true or false based on a comparison

document.write(3 == 3); // Print true or false based on a comparison

document.write(3 === 3); // Print true or false based on a triple comparison

document.write(3 === "String"); // Print true or false based on a triple comparison

document.write(3 === "3"); // Print true or false based on a triple comparison

document.write(3 === 2); // Print true or false based on a triple comparison

document.write(5 > 2 && 10 > 4); // Print true or false if both comparisons are correct

document.write(5 > 10 && 10 > 4); // Print true or false if both comparisons are correct

document.write(5 > 10 || 10 > 4); // Print true or false if at least one comparisons is correct

document.write(5 > 10 || 10 > 20); // Print true or false if at least one comparisons is correct

document.write(!(5 > 10)); // Print true or false if the inverse is true

document.write(!(20 > 10)); // Print true or false if the inverse is true
 
function BaseInfinity() { // Function prototyping, defining a Function
    document.getElementById("InfinityParagraph").innerHTML = 9E654; // Calling a Method to change the text of an Element
}

function NegativeInfinity() { // Function prototyping, defining a Function

    document.getElementById("NegativeInfinityParagraph").innerHTML = -9E654; // Calling a Method to change the text of an Element
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



