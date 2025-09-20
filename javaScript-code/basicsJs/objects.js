
const age = 19;
const name = "Shivani"
const weight = 30.5
const arr = [1,2,3,4,5]

const mobilePhone = {
    camera: 4,
    size: 6.7,
    ram: "8 GB",
    isSmartPhone: true,
    call: () => {
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



mobilePhone.setting.lowVolume(80);



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



// Google:- Search, Gmail, GooglePay, Youtube, Android, Google Cloud AI,...
// Meta:- Facebook, Instagram, WhatsApp.... MetaAI
// Zomato:- Food App, Blinkit
// Amazon:- Shopping App, Service App, AWS
// Zuddl:- Setup, Webinar, Studio, Attendee Side(Event Side),....



// Pizza.com -> Gaurav & Shivani
// Pizza Pvt. ltd. -> Gaurav & Shivani
// CEO - Gaurav (Barath)
// CTO - Shivani (Vedha)


const page = {
    padeID: "id",
    content: "text",
    name: "name",
    location: "add",
    createdAt: "date",
    updatedAt: "update",
    isDeleted: false
}

// chatgpt object for each chat
const chat = {
   id: '68cebac9-5700-8324-a617-38fe2469e668',
   name: 'Import in vanilla JS',
   content: 'grbgregi4orhyfo834fg34g 5gh54g9854g5450',
   createdAt: '20 Sep 2025, 7:00PM',
   createdBy: 'shivani-account-id'
}

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


