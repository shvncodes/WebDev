                // Slection with
let mainHeading = document.getElementsByClassName("heading");   //Class Name
let first = document.getElementById("firstPara");               //ID
let para1 = document.getElementsByClassName("one");
let para2 = document.getElementsByClassName("two");
let para3 = document.getElementsByClassName("three");   
let para4 = document.getElementsByTagName("p");                 //Tag    
first.style.background="pink";
mainHeading[0].style.color="red";
para1[0].style.color="blue";
para2[0].style.color="white";
para3[0].style.color="brown";
para2[0].style.background="purple";
para3[0].style.background="yellow";
para4[1].style.background="skyblue";
para4[1].style.color= "green";

                // Query Selector

let firstpara = document.querySelector("p");    //for 1st element of that tag
console.log(firstpara);

let allpara = document.querySelectorAll("p");   //for all element of that tag
console.log(allpara);

let firstclass = document.querySelector(".box");    //for 1st element of that class
console.log(firstclass);

let allclass = document.querySelectorAll(".box");   //for all element of that class
console.log(allclass);

let myid = document.querySelector("#firstPara");    //for 1st element of that id
console.log(myid);  

                //to access all the children of an parent
let lastDiv = document.querySelector("#last");
let childnodes = lastDiv.children;
console.log(childnodes);
for(let x = 0; x < childnodes.length; x++) {
    if(x%2 == 1) {
        childnodes[x].style.color="red";
    } else {
        childnodes[x].style.color="blue";
    }
}

                // add text-

let head = document.querySelector(".lastHeading");
// head.append(" from apna college");                   //way1
head.innerText = head.innerText + " from apna college"; //way2

let h4 = document.querySelector("h4");
h4.append(" hello everyone");
h4.innerText = h4.innerText + " learning JS";

let divs = document.querySelectorAll(".boxes");
// divs[0].append(" iusto molestias vero quaerat porro voluptate voluptatem itaque, iste repudiandae.");
// divs[1].append(" porro voluptate voluptatem itaque, iste repudiandae.");
// divs[2].append(" itaque, iste repudiandae.");

divs[0].innerText = "hello my name is shivani";     //remove prev. text and write this
divs[1].innerText = "hello my name is nisha";
divs[2].innerText = "hello my name is anshika";

                //to get attribute value

let id = firstPara.getAttribute("id");
console.log("the id is ", id);

let cls = para2[0].getAttribute("class");
console.log("the class is ", cls);

// para2[0].setAttribute("class", "abc");
para2[0].setAttribute("age", "19");     //append a mnew attribute

                // Add Elements(button, div, span, heading ,etc..)
let newButton = document.createElement("button");
newButton.innerText= "Click here!";
newButton.style.backgroundColor="red";
newButton.style.color="white";
// h4.prepend(newButton);   //add at the end of the node(inside)
document.querySelector("body").prepend(newButton);  //add at the start of the node(inside)
// h4.before(newButton);       //add before the node(outside)
// h4.after(newButton);       //add after the node(outside)
console.log(newButton);

let newHead = document.createElement("h1");
newHead.innerText="Hii, I am new!";
document.querySelector("body").prepend(newHead);

                //to delete node
let elm = document.querySelector(".random");
elm.remove();

        //add a new class in html (new class make in css)
let paragraph = document.querySelector(".lastpara");
//newLastpara make in style.css
paragraph.classList.add("newLastpara");     //to add
// paragraph.classList.remove("newLastpara");  //to remove