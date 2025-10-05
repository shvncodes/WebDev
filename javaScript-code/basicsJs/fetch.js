// console.log("start")

// fetch("http://www.google.com").then((data)=>{
//     console.log(data);
// }).catch((error)=>{
//     console.log("Error aaya hai",error)
// })

// console.log("End")


// fetch google.com then
// fetch facebook.com then
// fetch chatgpt.com

// ye promise of Response return krta hai, jiske resolve hone pe .then ke callback func me ya fir reject hone par .catch ke callback func me jata hai.

// fetch("") return: Promise<Response>
fetch("http://www.googe.com").then((google) =>{
    console.log("Google:-", google.statusText);

    fetch("http://www.facebook.com").then((facebook) =>{
        console.log("Facebook:-", facebook.statusText);

        fetch("http://www.chatgpt.com").then((chatgpt) => {
            console.log("Chatgpt:-", chatgpt.statusText);
        }).catch((er) => {
            console.log("Error:-", er);
        })
    }).catch((err) => {
        console.log("Error:-", err);
    })
}).catch((error) => {
    console.log("Error:-", error);
})

// check async-await file.