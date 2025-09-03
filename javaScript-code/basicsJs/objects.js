
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