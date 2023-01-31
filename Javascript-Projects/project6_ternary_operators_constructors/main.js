function BaseInfinity() { // Function prototyping, defining a Function
    document.getElementById("InfinityParagraph").innerHTML = 9E654; // Calling a Method to change the text of an Element
}

function NegativeInfinity() { // Function prototyping, defining a Function

    document.getElementById("NegativeInfinityParagraph").innerHTML = -9E654; // Calling a Method to change the text of an Element
}

function Ride_Function() { // Function prototyping
    var Height, Can_ride; // Variable definition
    Height = document.getElementById("Height").value; // Finding the element to edit
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough"; // Value comparison with a conditional operator
    document.getElementById("Ride").innerHTML = Can_ride + " to ride."; // Change the text to the proper value
}

function Vote_Function() { // Function prototyping
    var Age, Can_vote; // Variable definition
    Age = document.getElementById("Age").value; // Finding the element to edit
    Can_vote = (Age < 18) ? "You are not old enough":"You are old enough"; // Value comparison with a conditional operator
    document.getElementById("VoteMachine").innerHTML = Can_vote + " to vote."; // Change the text to the proper value
}

function Vehicle(Make, Model, Year, Color) { // Create a class
    this.Vehicle_Make = Make; // Create class properties
    this.Vehicle_Model = Model; // Create class properties
    this.Vehicle_Year = Year; // Create class properties
    this.Vehicle_Color = Color; // Create class properties
} 
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red") // Create class constructor
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black")
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard")

function myFunction() {
    document.getElementById("New_and_This").innerHTML = // Set the text to class instance properties
    "Erik drives a" + Erik.Vehicle_Color + "-colored" + Erik.Vehicle_Model +
    " manufactured in " + Erik.Vehicle_Year;
}

function Computer(MB, PSU, CPU, GPU) { // Create a class
    this.Motherboard = MB; // Create class properties
    this.PowerSupply = PSU; // Create class properties
    this.CentralProcessing = CPU; // Create class properties
    this.GraphicsProcessing = GPU; // Create class properties
}

var Average = new Computer("Asus MTX", "Gen PSU", "Intel I5", "GTX 1060") // Create class constructor

function Computerfunc() {
    document.getElementById("Computer_Example").innerHTML = // Set the text to class instance properties
    "This computer has a " + Average.Motherboard + "with a " + Average.PowerSupply +
    " and the CPU is a " + Average.CentralProcessing
}

function NestedFunction() { // Function prototyping, defining a Function

    
    function NestedFunction2() {
        document.getElementById("NestedFunctionV").innerHTML = "Nested Function Test" // Calling a Method to change the text of an Element
    }
    
    function NestedFunction2();
}


