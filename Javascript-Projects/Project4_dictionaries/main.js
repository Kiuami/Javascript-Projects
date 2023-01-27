var nann = 0/0;

document.write(nann);

document.write(isNaN(0/0));

document.write(isNaN(1/1));

document.write(typeof "Word");

document.write(typeof 3);

document.write("10" + 5);

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



