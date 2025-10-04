// A class is like a blueprint or template for creating objects.
    // Template-
        // class MyClass {
        //     constructor() {...}
        //     myMethod() {...}
        // }
//  to create an object with the help of class- 
    // let myObj = new MyClass();    //new MyClass() use bcz -> JavaScript creates a new empty object.


// Constructor() method is special method:
    // - automatically invoked(Call it to make it run) by new ((let obj = new MyClass();) -> new constructor ko dhundhta hai aur agr ye nhi mila to js apne aap hi constructor ko create karta hai)
    // -  use to initializes the object


class ToyotaCar {
    constructor(color, mileage) {
        console.log("creating new object");
        // initilize the variables & values inside the constructor
        this.carColor = color;
        this.mileage = mileage;
    }
    start() {
        console.log("start")
    }
    setBrand(brand) {
        //this means each individual object jiske liye bhi setBrand call hoga
        this.brandName = brand;
    }
    stop() {
        console.log("stop");
    }
}

let fortuner = new ToyotaCar("red", 10); //constructor invoke (creating new object)
// Uses the class’s method to adding a property named "brandName" to the fortuner object.
fortuner.setBrand("Fortuner");
// directly adding a property named "name" to the fortuner object.
fortuner.name = "Shivani";

let lexus = new ToyotaCar("blue", 12); //constructor invoke (creating new object)
lexus.brandName = "Lexus";
lexus.carNumber = 1234;


// Inheritance: It is passing down properties & methods from parent class to child(or derived) class.
// extends use to inheritate
// if child & parent have same method, child's method will be used. [Method overriding]

// super keyword: it is used to call the constructor of its parent class to access the parent's property & methods.
// super() -> call's Parent's constructor
// super.parentMethod() -> call's Parent's method

class Person {
    constructor(name) {
        this.name = name;
    }
    eat() {
        console.log("eat");
    }
    type() {
        console.log("early morning");
    }
    sleep() {
        console.log("sleep");
    }
}

class Engineer extends Person{
    constructor(name) {
        super(name);    //to invoke Parent's class constructor
        console.log("Hello!");
    }
    type() {
        console.log("late night");
    }
    work() {
        super.eat();
        console.log("solve problem, build something");
    }
}

let engObj = new Engineer("Shivani");


//--------------------------------------------------------------------

// Example:
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    viewData() {
        console.log(this.name, "you are enrolled");
    }
}

class Admin extends User {
    constructor(name, email) {
        super(name, email);
    }

    editData(newName, newEmail) {
        console.log(this.name = newName, this.email = email, "Successfully edit!!");
    }
}

let student = new Admin("Shivani", "shivani@gmail.com");
student.editData("Nisha", "nisha@gmail.com");

//----------------------------------------------------------------------------------------------

// Real life example of classes & objects.
// Object -> Actual entity  => Blueprint -> of a real entity  => Inheritance

// Object -> Actual entity
const mobilePhone = {
    id: "digjr034h8grwobhgw0",
    type: "SMART_PHONE",
    size: "6.7",
    brand: "Nothing",
    modelNo: "Cmf Phone 2 Pro",
    ram: "8GB",
    rom: "128GB",
    color: "orange",
    call: () => {console.log("calling....")},
    gallery: () => {console.log("Show images")},
    clock: () => {console.log("Time: 10:30 AM")},
    // ....etc
}

// Blueprint -> of a real entity
class MobilePhone {
    constructor(id,type,size,brand,modelNo, ram, rom, color) {
        this.id = id;
        this.type = type;
        this.size = size;
        this.brand = brand;
        this.modelNo = modelNo;
        this.ram = ram;
        this.rom = rom;
        this.color = color;
        //(not methods)
        this.speaker = 10; //constant for all phones
    }

    call() {
        if(this.type === "SMART_PHONE") {
            console.log("5G Calling... from ", this.brand);
        } else {
            console.log("calling... from ", this.brand)
        }
    }

    //all others methods like gallery(), clock(), .....etc
}

const realmeMobile = new MobilePhone("43323242", "SMART_PHONE", "6.67", "Realme", "realme 7", "4GB", "128GB", "Blue");

// Inheritance
class SmartPhone extends MobilePhone {
    constructor(id,type,size,brand,camera,
        // ...
            ) {
        super(id, type,
            // ...
                );
        this.camera = camera;
    }

    clickPicture() {
        //....
    }
}
