var VarA = 42;

function Ride_Function() { // Function prototyping
    var Height, Can_ride; // Variable definition
    Height = document.getElementById("Height").value; // Finding the element to edit
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough"; // Value comparison with a conditional operator
    document.getElementById("Ride").innerHTML = Can_ride + " to ride."; // Change the text to the proper value
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

function myFunction() { // Function prototyping
    document.getElementById("New_and_This").innerHTML = // Set the text to class instance properties
    "Erik drives a" + Erik.Vehicle_Color + "-colored" + Erik.Vehicle_Model +
    " manufactured in " + Erik.Vehicle_Year;
}

function get_Date() { // Function prototyping
    if (new Date().getHours() < 18 ) { // Get the current time in hours
    document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}

function if_statement() { // Function prototyping
    var VarB = 2;
    if (1 < VarB) { // Conditional statement comparison
        document.write("2 is greater than 1")
    }

}

function Age_Function() { // Function prototyping
    Age = document.getElementById("Age").value;
    if (Age >= 18) { // Conditional statement comparison
        Vote = "You are old enough to vote!";
    }
    else {
        Vote = "You are not old enough to vote!";
    }
    document.getElementById("How_old_are_you?").innerHTML = Vote;
}

function Time_function() { // Function prototyping
    var Time = new Date().getHours; // Get the current time in hours
    var Reply;
    if (Time < 12 && Time > 0) { // Conditional statement comparison
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}

function ErrorFunction() { // Function prototyping
    var VarB = 2;
    if (1 < VarB) { // Conditional statement comparison
        document.write("2 is greater than 1")
    }

}

console.log(ErrorFunction); //Console Log command