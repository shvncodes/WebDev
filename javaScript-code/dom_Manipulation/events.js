// node.event = () => {
        //handle here
// } 

// Js event handler > inline event handler
// (e, evt or event..)(any variable) :- event object (contains all the information about the event, what type of event happened, mouse events or keyboard events)

let btn = document.querySelector("#btn");
btn.onclick = (e) => {
    console.log("got it");
    console.log(e);
    console.log(e.type);
    console.log(e.target);
}

let box = document.querySelector("div");
box.onmouseover = () => {
    console.log("you are inside div");
}

//Event Listeners:-
// node.addEventListener(event, callback(function));            //to add
// node.removeEventListener(event, callback(function));         //to remove

let yes = document.querySelector("#btn1");
let no = document.querySelector("#btn2");
let ok = document.querySelector("#btn3");

//we use arrow function in this
yes.addEventListener("click", () => {
    console.log("YES");
})

no.addEventListener("dblclick", ()=> {
    console.log("NO");
});

ok.addEventListener("click", ()=> {
    console.log("OKK1");
})
ok.addEventListener("click", ()=> {
    console.log("OKK2");
})

const okk = ()=> {
    console.log("OKK4");
}
ok.addEventListener("click", ()=> {
    console.log("OKK3");
})
ok.removeEventListener("click", okk);

//Example:- Dark & Light Mode
let mode = document.querySelector("#toggle");
let allButtons = document.querySelectorAll(".buttons");
const heading = document.getElementById("heading");

let isDarkMode = false;
mode.addEventListener("click", ()=> {
    if(!isDarkMode) {
        for(let i = 0; i < allButtons.length; i++) {
            allButtons[i].className = 'buttons';
        }
        box.className = 'div';
    } else {
        for(let i = 0; i < allButtons.length; i++) {
            allButtons[i].className = 'buttons-dark';
        }
        box.className = 'div-dark';
    }
    isDarkMode = !isDarkMode
})




