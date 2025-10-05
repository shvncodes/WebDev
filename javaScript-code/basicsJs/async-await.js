async function callApis() {
    try {
        const google = await fetch("http://www.googe.com");
        console.log("Data from google is:", google.statusText)

    }catch(e){
        console.log("Google ka error hai")
    }

    try{
        const facebook = await fetch("http://www.facebook.com")
        console.log("Data from facebook is:", facebook.statusText)

        const chatgpt = await fetch("http://www.chatgpt.com");
        console.log("Data from chatgpt is:", chatgpt.statusText);
    } catch(error) {
        console.log("Error aaya hai")
    }
}

console.log("Start")
callApis()
console.log("End");