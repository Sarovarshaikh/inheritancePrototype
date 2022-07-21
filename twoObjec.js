//Create 2 objects - parent and child. Attach methods to parent and use those methods in child object using parents prototype.
var Parent = {
    calculateAge(){
        console.log(`My name is ${this.fName} and my surename, ${this.lName} and current age is ${this.birthYear}`);
    }
}

var childObj1 = Object.create(Parent);
childObj1.fName = "Sarovar";
childObj1.lName = "Shaikh";
childObj1.birthYear = 1997;
childObj1.calculateAge();

var childObj2 = Object.create(Parent);
childObj2.fName = "YuNus";
childObj2.lName = "Shaikh";
childObj2.bYear = 2000;
childObj2.calculateAge();



//Question2
//Write code to explain prototype chaining.
const Person = {
    profile(){
        console.log(`My name is ${this.name} ,rollno is ${this.rollno} and current age is ${2022 - this.DOB}.`);
    },
    initialise(name,rollno,DOB){
        this.name = name;
        this.rollno = rollno;
        this.DOB = DOB;
    }
}

const sarovar = Object.create(Person);
arpana.initialise("Aditya",22,1996);
arpana.profile();
console.log(sarovar);

const studentProto = Object.create(Person);
studentProto.initial = function (name,rollno,DOB,course) {
    Person.initialise.call(studentProto,name,rollno,DOB);
    this.course = course;    
}

studentProto.introduce = function(){
    console.log(`Student name is ${this.name} and his DOB is ${this.DOB}.`);
}


const newProto = Object.create(studentProto);
newProto.initial("Rahul",20,1997,"CSE");
newProto.introduce();
newProto.profile();

//Question3
//Add a method to calculate sum of all elements in Array in array's protype, use that method to calculate sum for multiple arrays.
function arraySum(a){
    let sum=0;
    for(let i in a) { 
        sum += a[i];
    }
    return sum;
}
let array = [1,3,5,8]; 
let tSum= arraySum(array);

//Question4
//Write a JavaScript function to retrieve all the names of object's own and inherited properties.
function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}
  
Person.prototype.nationality = "English";
const myFather = new Person("John", "Doe", 50, "blue");
console.log(myFather);
console.log("The nationality of my father is " + myFather.nationality);