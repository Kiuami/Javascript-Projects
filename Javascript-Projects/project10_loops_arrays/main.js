function WhileLoop() {
var String = "";
var X = 1;
while (X < 11) {
    String += "<br>" + X;
    X++;
}

document.getElementById("WhileLoopA").innerHTML = String;

}

function ForLoop() {
    var Numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var String = "";
    var X
    for (X = 0; X < Numbers.length; X++) {
    String += Numbers[X] + "<br>";
    }
    
document.getElementById("ForLoopA").innerHTML = String;
    
    }

function ArrayObject() {
   var ArrayA = [];
   ArrayA[0] = "Walking";
   ArrayA[1] = "Jogging";
   ArrayA[2] = "Running";
   ArrayA[3] = "Sprinting";

   let State = ArrayA[3];

        
document.getElementById("ArrayObjectA").innerHTML = State;
        
 }