//Class:Classes in JavaScript are a fundamental building block for creating reusable and modular code.
// They provide a blueprint for creating objects, encapsulating data and related behavior.
class Car{
    constructor(brand, model){
        this.brand = brand;
        this.model = model;
    }
    drive(){
        console.log(`The ${this.brand} ${this.model} is driving.`);
    }

}
     //Inheritance is a fundamental concept in object-oriented programming that allows you to create
  // new classes based on existing ones. This enables code reuse, modularity,
  // and the creation of hierarchical relationships between classes.   

  class Vehicle{
    constructor(brand, model){
        this.brand = brand;
        this.model = model;
    }
    drive(){
        console.log(`The ${this.brand} ${this.model} is driving.`);
    }

}
class Car extends Vehicle{
   
    contructor(brand , model){
        super(brand = brand , model = model);
    }
    brandNew(){
        console.log(`${this.brand} is brandNew`)
    }
    //Polymorphism is a fundamental object-oriented programming principle that allows objects of different classes to be
// treated as if they were objects of a common parent class. This enables you to write more flexible and reusable code.
    drive() {
        console.log("you are driving")
    }
    
}

//Encapsulation:This helps to protect data from external access and modification
// ensuring data integrity and promoting code organization.
var car = new Car("honda","civic")
car.drive()
var vehicle = new vehicle("toyota","corolla")
vehicle.drive()

// Objects are instances of a class, meaning they are created from the class's definition. 
//Each object represents a specific instance of the data and behavior defined within the class.(in var car : car is object)
var car = new Car("Honda","Civic")
car.drive()

console.log(car.brand)
//constructor:A constructor is a special method within a class that is automatically called when a new object 
//is created from that class.


class Person {
    constructor(name, age) { // Corrected typo: constructor
      this.name = name;
      this.age = age;
    }
  
    greet() {
      console.log(`Hello everyone! My name is ${this.name}`);
    }
  
    age() {
      console.log(`I am ${this.age} years old`);
    }
  }
  
  var person = new Person("Ayesha", "19"); // Corrected variable declaration (var is less common now)
  person.greet();
  console.log(person.name);
 