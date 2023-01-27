var nann = 0/0;

document.write(nann);

document.write(isNaN(0/0));

document.write(isNaN(1/1));

document.write(typeof "Word");

document.write(typeof 3);

document.write("10" + 5);

document.write(10 > 5);

document.write(10 < 2);

console.log(2 + 2); // Press F12 to open the console and see this

console.log(12 < (2 + 2)); // Press F12 to open the console and see this

document.write(10 == 1);

document.write(3 == 3);

document.write(3 === 3);

document.write(3 === "String");

document.write(3 === "3");

document.write(3 === 2);

document.write(5 > 2 && 10 > 4);

document.write(5 > 10 && 10 > 4);

document.write(5 > 10 && 10 > 4);

document.write(5 > 10 || 10 > 4);

document.write(5 > 10 || 10 > 20);

document.write(!(5 > 10));

document.write(!(20 > 10));

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



