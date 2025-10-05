// Synchronous -
    // Things happen one after another, in order.
    // Each task waits for the previous one to finish before starting.

// Asynchronous -
    // Tasks don’t wait for each other.
    // While one task is waiting (like for data to load), the program can move on to do other work.

    // Example (Sync): OUTPUT- One Two Three Four
console.log("One");
console.log("Two");
console.log("Three");
console.log("Four");

// Example (Async): OUTPUT- One Two Three Four Hello
console.log("One");
console.log("Two");

setTimeout(()=> {
    console.log("Hello");
}, 3000);

console.log("Three");
console.log("Four");

// Important Note:- First all sync line run then all async run
// If sync line of code take 1 min to completely execute and async take 5 sec to excute irrespective of this firstly sync line of code excute then, after 1 min async line of code execute.

// Example- OUTPUT: 1 2 4 6 7 3 5
console.log("1");   //Sync
console.log("2");

setTimeout(()=> {   // Async
    console.log("3");
}, 0);

console.log("4");

setTimeout(()=> {
    console.log("5");
}, 0);

console.log("6");
console.log("7");


//Callbacks: It is a function passed as an argument to another function.

// Synchronous Callback
function sum(a, b) {
    console.log(a+b);
}

function calculator(a, b, sumCallback) { // callback
    console.log("The sum of", a, "and", b, "is", sumCallback(a, b)); // calling the callback
}

calculator(3, 5, sum);
// OUTPUT: The sum of 3 and 5 is 8.

// Asynchronous Callback
function hello() {
    console.log("Hello");
}

console.log("Start");

setTimeout(hello, 2000); //callback

console.log("End");
// OUTPUT: Start End Hello


//Callback Hell: Nested callbacks stacked below one another forming a pyramid structure.

function main(data, callback) {
    console.log("Data is", data);
    if(callback) callback();
}
//callback hell
main(1, () => {
    console.log("Inside callback function 1")
    main(2, () => {
        console.log("Inside callback function 2")
        main(3)
    }) 
})



/*
Things that makes Javascript Asynchronous
    1. setTimeout()
    2. setInterval()
    3. fetch()
    4. promises
    5. async/await

*/