// IIFE: Immediately Invoked Function Expression
(function (a,b) {
    console.log("hello");
})(1,2);

(() => {
    console.log("IIFE... arrow func")
})()