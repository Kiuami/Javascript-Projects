function WhileLoop() { // function prototyping
var String = "";
var X = 1;
while (X < 11) {  // If X is not greater then 11 then execute the operations below
    String += "<br>" + X; // Concatenate string by printing the value of the index that X is equal to and add a line break.
    X++; // Increment X by 1
}

document.getElementById("WhileLoopA").innerHTML = String;

}

function ForLoop() { // function prototyping
    var Numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Array
    var String = "";
    var X
    for (X = 0; X < Numbers.length; X++) { // for loop, it increase by 1 every time X is smaller then the length of the Array
    String += Numbers[X] + "<br>"; // Concatenate string by printing the value of the index that X is equal to and add a line break.
    }
    
document.getElementById("ForLoopA").innerHTML = String;
    
    }

function ArrayObject() { // function prototyping
   var ArrayA = []; // Array creation
   ArrayA[0] = "Walking"; // Array object creation
   ArrayA[1] = "Jogging";
   ArrayA[2] = "Running";
   ArrayA[3] = "Sprinting";

   let State = ArrayA[3]; // Make state temporarily equal to the value of index 3.

        
document.getElementById("ArrayObjectA").innerHTML = State;
        
 }