// const arr = ["Shivani", 2, "three", {name: "Gaurav", age: 25}];

const arr = ['One', "Two", "Three", "Four", "Five"];

// forEach
arr.forEach((val , index) => {
    console.log(val);
})


// map
const mapResult = arr.map((value, index) => {
    return value + " " + (index+1)
})

console.log(mapResult)


let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let squared = numbers.map((num, index) => {
    if(index == 0) {
        return num;
    }
    return num*index;
});
console.log(squared); // [1, 2, 6, 12]


// filters
const evenNumbers = numbers.filter((value) => {
    if(value%2 === 0) {
        return true;
    }
    return false;
})

console.log(evenNumbers); // [2,4,6,8,10]

// find
const data = numbers.find((value) => {
    if(value%2 !== 0) {
        return true;
    }
    return false;
})


// some
const isPresent  = numbers.some(num => num > 3);
// const isPresent = numbers.some((value) => {
//     if(value > 3) return true;
//     return false;
// })


// every
const isAllPositive  = numbers.every(num => num > 0); // [1,2,0,5,6]

// sort
numbers.sort(); // Ye numbers ko directly sort kar deta hai.

// includes
const isIncluded = numbers.includes(2)




// --------------------------------------------------------------------------------------------------

// *reduce => isko baad me padhenge
let sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // 10