/*var students = ["Alvin", "Dom", "AngryJS"];
var spares = [];
spares.push(students[0]);
spares.push(students[1]);

var n = students.length;

var index = spares.indexOf("Alvin"); // -1 if not found
if (index > -1){
    spares = spares.splice(index, 1); // cut the array. the second arg indicate number of elements to cut
}

console.log(spares);*/



/*// loops
var students = ["Alvin", "Dom", "AngryJS"];
for(var x = 0; x < students.length; x++){
    console.log(students[x]);
}*/


// Function 
/*function area (length, width){
    return length * width;
}

var area1 = area(10,15);
console.log(area1);

// we can store function in a variable
var transaction = function(priceOfSale){
    if(priceOfSale <= 100){
        console.log("Sufficient");
    } else {
        console.log("insufficient");
    }
}

transaction(10);*/


// Object, like a hash table
var student = {
    firstName: "Jhon",
    lastName: "Parker",
    age: 7,
    greeting: function(){
        return "Hello There";
    }
};

function advanceStudent(firstName, lastName, age) {
    this.firstName = firstName,
    this.lastName = lastName,
    this.age = age
};

var student1 = new Object();
student1.firstName = "Papa";

var student2 = {};
student2.firstName = "Sherlock"

console.log(student.firstName);
console.log(student["firstName"]);
console.log(student1.firstName);
console.log(student2.firstName);
var student0 = new advanceStudent("Alvin", "Shi", 20);
console.log(student0.age);

