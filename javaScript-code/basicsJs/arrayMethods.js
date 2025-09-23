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
    return num*num;
});
console.log(squared); // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]


// filters
const evenNumbers = numbers.filter((value) => {
    if(value%2 === 0) {
        return true;
    }
    return false;
})

console.log(evenNumbers); // [2,4,6,8,10]

const totalSum = numbers.reduce((result, currentVal) => {
    return result + currentVal;
})
console.log(totalSum); // 55

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

// splice
const items = ["mobile", "laptop", "charger", "AC", "TV", "Washing Machine"];
        //to delete element from items-
items.splice(3, 2); // => original array me modify karta hai, aur modified items return bhi karta hai. (removed => "AC", "TV")
        //to delete elements & insert another elements at that place-
items.splice(0, 2, "cooler", "tablet", "sewing machine"); // it remove "mobile" & "laptop" from items and insert "cooler", "tablet" & "sewing machine" in place of that.
// it returns => ["cooler", "tablet", "sewing machine", "charger", "AC", "TV", "Washing Machine"]
        //to add element at particular index-
items.splice(3, 0, "smartphone");

// slice
items.slice(2,3) // => ye sirf (startIndx,endIndx) ka data return karta hai, Original array me kuch bhi change NAHI karta.

//toString
let num = [1, 2, 3, 4, 5];
num.toString(); // => return all element of the array as a string, Original array me kuch bhi change NAHI karta.

//concat
let fruits = ["apple", "mango", "litchi"];
let vegetables = ["potato", "tomato", "cabbage"];
let fastFood = ["pizza", "burger", "pasta"]
fruits.concat(vegetables, fastFood); // => Combine all the arrays & return a new array without modifying any existing arrays.


//unshift
fruits.unshift("papaya", "orange"); // => Inserts new elements at the starting of the original array, & returns the new length of the array. 

// shift
vegetables.shift(); // => Removes the first element from the original array and returns it.


// --------------------------------------------------------------------------------------------------

// *reduce => isko baad me padhenge
let sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // 10