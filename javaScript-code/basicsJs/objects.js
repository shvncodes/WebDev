// variable define -
const age = 19;
const name = "Shivani"
const weight = 30.5
const arr = [1, 2, 3, 4, 5]

            // Object can contain - (property & behavior) variable, function, array, string, object, etc.

//Example 1
const student = {
    //property -
    name: "Shivani",
    marks: 72,
    //behavior -
    printMarks: function () {
        console.log("marks =", this.marks);  //this.marks => student.marks
    }
}

//Example 2
const mobilePhone = {
    camera: 4,
    size: 6.7,
    ram: "8 GB",
    isSmartPhone: true,
    // call: function() {
    //     console.log("calling....");
    // },
                //OR,
    call() {
        console.log("calling....");
    },
    apps: [
        'WhatsApp', 'Youtube', 'Gmail', 'Camera', 'Gallery', 'File Manager'
    ],
    setting: {
        brightness: '50%',
        volume: '70%',
        mode: 'Dark',
        isRotated: false,
        lowVolume: (v) => {
            console.log(".... Low volume....", v)
        }
    }
}
//how to access any object element 
mobilePhone.setting.lowVolume(80);

//Example 3 (object for each product in amazon)
const data = {
    Publisher: 'Wisdom Tree; First Edition (13 May 2023); Wisdom Tree, 4779/23, Ansari Road, New Delhi-2. www.wisdomtreeindia.com, wisdomtreebooks@gmail.com',
    rating: {
        '5-star': 50,
        '4-star': 20,
        '3-star': 30,
        '2-star': 0,
        '1-star': 0,
    }
}

//Example 4 (object of a single page)
const page = {
    padeID: "id",
    content: "text",
    name: "name",
    location: "add",
    createdAt: "date",
    updatedAt: "update",
    isDeleted: false
}

//Example 5 (chatgpt object for each chat)
const chat = {
    id: '68cebac9-5700-8324-a617-38fe2469e668',
    name: 'Import in vanilla JS',
    content: 'grbgregi4orhyfo834fg34g 5gh54g9854g5450',
    createdAt: '20 Sep 2025, 7:00PM',
    createdBy: 'shivani-account-id'
}

            // Prototype: Objects have a special property called prototype(reference to an object).

const employee = {
    calcTax() {
        console.log("the tax is 10%");
    }
}

const arjun = {
    salary: 5000,
}

const karan = {
    salary: 20000,
    calcTax() {
        console.log("the tax is 20%");
    }
}
arjun.calcTax() //result: arjun.calcTax is not a function.

// we can set prototype using object1. _ _ proto _ _ = "object2"
arjun.__proto__ = employee;
karan.__proto__ = employee;

arjun.calcTax(); // result: the tax is 10%

//if object & prototype have same method, object's method will be used.
karan.calcTax(); // result: the tax is 20%



//-----------------------------------------------------------------------------------------------------------------

// Google:- Search, Gmail, GooglePay, Youtube, Android, Google Cloud AI,...
// Meta:- Facebook, Instagram, WhatsApp.... MetaAI
// Zomato:- Food App, Blinkit
// Amazon:- Shopping App, Service App, AWS
// Zuddl:- Setup, Webinar, Studio, Attendee Side(Event Side),....



// Pizza.com -> Gaurav & Shivani
// Pizza Pvt. ltd. -> Gaurav & Shivani
// CEO - Gaurav (Barath)
// CTO - Shivani (Vedha)



//For import an object file in your js file

export const questions = [
    {
        id: 'questionId1',
        name: 'question 1',
        options: ['option1', 'option2'],
        rightOption: 'option1'
    },
    {
        id: 'questionId2',
        name: 'quetsion 2',
        options: ['option1', 'option2', 'option3', 'option4'],
        rightOption: 'option3'
    }
]
// import {questions} from "./objects"