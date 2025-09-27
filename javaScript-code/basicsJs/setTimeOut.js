// SetTimeout - to execute any function after this particular time at once.
let a = setTimeout(function() {
    alert('hello')
}, 2000)

const sum = (a, b, c) => {
    console.log(a, "+", b, "+", c, "=", a+b+c);
}
setTimeout(sum, 2000, 5, 5, 5);

// to remove setTimeout -
clearTimeout(a);

let b = prompt("Do you want to run the settimeout?");
if(b == 'no') clearTimeout(a);

// setInterval - to execute any function after this particular time again & again (just like infinte loop).
let x = setInterval(function() {
    alert("hello");
}, 2000);

// to remove setInterval -
clearInterval(x);



// ----------------------------------------------------------------------------------------------------------
// Usage of setInterval. => make a timer 
const timerNode = document.getElementById("timer")
const time = {
    minutes: 2,
    seconds: 0
}

let intervalId = null;
intervalId = setInterval(() => {
    timerNode.textContent = time.minutes + ':' + time.seconds;
    if(time.seconds === 0) {
        time.minutes -= 1;
        time.seconds = 59;
    } else {
        time.seconds -= 1;
    }
    if(time.minutes === 0 && time.seconds === 0 && intervalId) {
        // clear interval
        clearInterval(intervalId);
    }
}, 1000)


