// variable define -
// const age = 19;
// const name = "Shivani"
// const weight = 30.5
// const arr = [1, 2, 3, 4, 5]

        // Object can contain - (property & behavior) variable, function, array, string, object, etc.

//Example 1
const student1 = {
    name: "Shivani",    //Behind the scene: "name": "Shivani"
    rollNo: 58,
    subject: "PCM",
    marks: {
      physics: 67,
      chemistry: 87,
      maths: 67
    },
    phoneNo: 9846014752,
    add: "Delhi",
    studentId() {
        // this:- reference of the object
        console.log(`Student id: ${this.name}, ${this.rollNo}, ${this.add}`);
    },
    emailId: "Shivani2025@gmail.com",
    // home town: "Bihar" -> wrong
    "home town": "Bihar"
}

// student.home town -> wrong
console.log("Home town:", student1["home town"]);

//access any element-
console.log("\nName:", student1.name);
console.log("Name:", student1["name"]);

delete student1.emailId;    //delete element

console.log("\nStudent1 Keys:", Object.keys(student1));     //get only keys
console.log("\nStudent1 Values:", Object.values(student1));   //get only values
console.log("\nStudent1 key-value:", Object.entries(student1));   //get both key-value


//for in loop direct apply on object (!Not recommanded)-
for(let keys in student1) {
    //student1.keys -> undefined (kyuki aise karne pe compiler student1 obj ke andar keys naam ka element dhundhne lagega) 
    //student1[keys] => student1["name"] && student1["rollNo"],....etc
    console.log(keys, ":",student1[keys]); 
}

//for of loop cannot apply on object so we apply it on keys array "Object.keys(student1)", values array "Object.values(student1)"or both "Object.entries(student1)" -
console.log("\n*****By using for of loop******");

console.log("\nObject.keys(student1):-");
for(let keys of Object.keys(student1)) {
    console.log(keys);
}

console.log("\nObject.values(student1):-");
for(let values of Object.values(student1)) {
    console.log(values);
}

console.log("\nObject.entries(student1):-");
for(let [key, value] of Object.entries(student1)) {
    console.log(key, ":", value);
}


// const studentName = student1.name;
// const studentRollNo = student1.rollNo; 

//Object destructing-
const {name:studentName, rollNo:studentRollNo} = student1;
console.log(studentName, studentRollNo);
//Array destructing-
let arr = [1,2,3,4,5];
const [first, second] = arr;    //first, second: variable name
console.log(first, second);


//function inside object-
const student2 = {
    name: "Akanasha",
    rollNo: 13,
    add: "U.P"
}
student2.studentId = student1.studentId;

console.log("\nStudent1 Id:-")
student2.studentId();

console.log("Student2 Id:-")
student2.studentId();


//Nested object-
console.log(student1.marks.physics);


//both have same reference- 
const student3 = student1;  // both reference one object (kisi main bhi change kro dono mai hi change hoga)
student3.name = "Nisha";    //update
student3.age = 18;       //create new element
console.log("\nStudent1:", student1);  // name: "Nisha" && age: 18
console.log("Student3:",student3);  // name: "Nisha" && age: 18


//both have different references-

// Shallow Copy:
const student4 = {...student1}; // both reference different object (std1 ka sara element & methods std4 mai copy ho jayega ab hum jo bhi changes std4 mai karenge vo std1 mai nhi hoga & vice-versa but nested wali chijo ka reference abhi bhi same hi rahega)
student4.name = "Sanvi";
delete student4.emailId; //delete only from std4
student4.marks.maths = 85;  //ye dono(std1 & std4) mai hi change ho jayega
console.log("\nStudent1:", student1);
console.log("Student4:", student4);

//Deep Copy: structuredClone() doesn't clone Functions, DOM nodes & Object prototypes.
delete student1.studentId;
const student5 = structuredClone(student1); //now it is completely different
student5.name = "Mihika";
delete student5.phoneNo;
student5.marks.maths = 90;
console.log("\nStudent1:", student1);
console.log("Student5:", student5);


//array as a object-
const numArray = [1,2,"Shivani",4,"Hello"]; //it looks like below obj
numArray = {
    0: 1, //behind the scenec: "0": 1
    1: 2,
    2: "Shivani",
    3: 4,
    4: "Hello"
}
// console.log(numArray.0); -> Wrong
console.log(numArray[0]);



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


//-----------------------------------------------------------------------------------------------------------------

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



// Google:- Search, Gmail, GooglePay, Youtube, Android, Google Cloud AI,...
// Meta:- Facebook, Instagram, WhatsApp.... MetaAI
// Zomato:- Food App, Blinkit
// Amazon:- Shopping App, Service App, AWS
// Zuddl:- Setup, Webinar, Studio, Attendee Side(Event Side),....



// Pizza.com -> Gaurav & Shivani
// Pizza Pvt. ltd. -> Gaurav & Shivani
// CEO - Gaurav (Barath)
// // CTO - Shivani (Vedha)