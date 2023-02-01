function Time_function() { // Function prototyping
    var Time = new Date().getHours; // Get the current time in hours
    var Reply;
    if (Time < 12 && Time > 0) { // Conditional statement comparison
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply; // Set the text of the element to the variable
}


function ConcatenateFunc() { // Function prototyping
    var part1 = "This is "; // Variable assignment
    var part2 = "now a ";
    var part3 = "complete sentence. ";
    var sentence = part1.concat(part2, part3); // concentate the text together
    document.getElementById("Concatenate").innerHTML = sentence; // Set the text of the element to the variable
}


function SliceFunc() { // Function prototyping
    var Sentence = "Hello, this is a long sentence." // Variable assignment
    var Section = Sentence.slice(12,20); // slice a part of the sentence off
    document.getElementById("Slicing").innerHTML = Section; // Set the text of the element to the variable
}


function toUpperCaseFunc() { // Function prototyping
    var Example = "This is an UpperCase SentencE!"; // Variable assignment
    var Example2 = Example.toUpperCase(); // convert the sentence to uppercase entirely
    document.getElementById("Uppercasing").innerHTML = Example2; // Set the text of the element to the variable
}


function SearchFunc() { // Function prototyping
    var Example = "This is a sentence for searching."; // Variable assignment
    var Example2 = Example.search("searching."); // list the character position of the word
    document.getElementById("Searching").innerHTML = Example2; // Set the text of the element to the variable
}


function StringFunc() { // Function prototyping
    var Number = 0983712; // Variable assignment
    document.getElementById("NumberString").innerHTML = Number.toString(); // Convert the integer to a string
}


function PrecisionString() { // Function prototyping
    var Number = 0983712.16439721; // Variable assignment
    document.getElementById("Precision").innerHTML = Number.toPrecision(10); // print the number but only to the 10th place
}


function ToFixedFunc() { // Function prototyping
    var Number = 0983712.16439721; // Variable assignment
    var Number2 = Number.toFixed(8); // print the number but only by the 8th place
    document.getElementById("ToFixedFunc").innerHTML = Number2; // Set the text of the element to the variable
}

function ValueOfFunc() { // Function prototyping
    var String = "0983712.16439721"; // Variable assignment
    var String2 = String.valueOf(); // print the raw value of the string
    document.getElementById("ValueOfFunc").innerHTML = String2; // Set the text of the element to the variable
}
