const num = [11,12,13,14,15];

                                            // forEach
console.log("*********forEach*********");

num.forEach((val, indx, array)=> {
    console.log(indx, val, array);
})


                                            // filter
console.log("\n*********filter*********");

const EvenNum = num.filter((val)=> {
    if(val%2 === 0) return true;
    return false;
})
console.log("EvenNum:", EvenNum);

// make our new filter method: filtering
// this = [11,12,13,14,15];
// but this only work for num array, so we can use "Array.prototype.filtering" istead of "num.filtering" but its not right way to do it.
num.filtering = function(condition) {
    const ans = [];
    for(let elem of this) {
        if(condition(elem)) ans.push(elem);
    }

    return ans;
}

const oddNum = num.filtering((val) => {
    if(val%2 !== 0) return true;
    return false;
})
console.log("oddNum: ", oddNum);


                                        // Map
console.log("\n*********map*********");

const newNum = num.map((val, indx) => {
    return val *= indx;
});
console.log("newNum:", newNum);

// make our new map method: mapping
num.mapping = function(condition) {
    const ans = [];
    for(let elem of this) {
        const newElem = condition(elem);
        ans.push(newElem);
    }

    return ans;
}

const square = num.mapping((val) => val *= val);
console.log("Square:", square);


                        // Real life Example:
console.log("\n*********Combine example of filter & map*********");

const products = [
  // Electronics
  { id: 1, name: "Laptop", category: "Electronics", price: 1200, inStock: true },
  { id: 2, name: "Headphones", category: "Electronics", price: 200, inStock: true },
  { id: 3, name: "Smartphone", category: "Electronics", price: 800, inStock: false },
  { id: 4, name: "Monitor", category: "Electronics", price: 300, inStock: true },
  { id: 5, name: "Keyboard", category: "Electronics", price: 75, inStock: true },

  // Books
  { id: 6, name: "The Hobbit", category: "Books", price: 125, inStock: true },
  { id: 7, name: "A Brief History of Time", category: "Books", price: 30, inStock: true },
  { id: 8, name: "Dune", category: "Books", price: 28, inStock: false },

  // Appliances
  { id: 9, name: "Coffee Maker", category: "Appliances", price: 150, inStock: false },
  { id: 10, name: "Blender", category: "Appliances", price: 80, inStock: true },
  { id: 11, name: "Toaster", category: "Appliances", price: 45, inStock: true },
  { id: 12, name: "Microwave Oven", category: "Appliances", price: 220, inStock: true },

  // Clothing
  { id: 13, name: "T-Shirt", category: "Clothing", price: 20, inStock: true },
  { id: 14, name: "Jeans", category: "Clothing", price: 60, inStock: false },
  { id: 15, name: "Jacket", category: "Clothing", price: 110, inStock: true },

  // Home Goods
  { id: 16, name: "Desk Lamp", category: "Home Goods", price: 35, inStock: true },
  { id: 17, name: "Scented Candle", category: "Home Goods", price: 115, inStock: true },
  { id: 18, name: "Picture Frame", category: "Home Goods", price: 22, inStock: false },

  // Groceries
  { id: 19, name: "Organic Apples", category: "Groceries", price: 105, inStock: true },
  { id: 20, name: "Artisan Bread", category: "Groceries", price: 8, inStock: true }
];

const newProduct = products.filter((product) => product.price > 100).sort((a,b) => b.price - a.price); // decending order
console.log("newProduct:", newProduct);

const productsNameAndPrice = products.map((product) => ({name:product.name, price:product.price})); // ({ ... }) means you are returning an object literal, not starting a function block.
console.log("productsNameAndPrice", productsNameAndPrice);

const newCostlyProducts = newProduct.map((product) => ({name:product.name, price:product.price}));
console.log("newCostlyProducts", newCostlyProducts);


                                        // Reduce
console.log("\n*********reduce*********");

const fruits = [
    { id: 1, name: "Apple", price: 90, inStock: false },
    { id: 2, name: "Mango", price: 60, inStock: true },
    { id: 3, name: "Papaya", price: 80, inStock: false },
    { id: 4, name: "Grapes", price: 30, inStock: true },
    { id: 5, name: "Litchi", price: 75, inStock: true }
]

// initialValue → starting value for accumulator (here it’s 0).
// currentValue (currVal) → current item in the array.
//accumulator (preVal) → stores the running total/result. => 0, 60, 60, 90, 165; 
const totaPrice = fruits.reduce((preVal, currVal) => {
    if(currVal.inStock) return preVal + currVal.price;
    else return preVal;
},0) //initialValue for accumulator

console.log("TotalPrice:", totaPrice);


                                        // Data Structure: Set
console.log("\n*********Set*********");

const set = new Set();
console.log("EmptySet:", set);

// Array -> set
const s1 = new Set(num);

// Add new elements in set
s1.add(100);
s1.add('shivani');

console.log("Set:", s1);

// is element present
console.log("Is s1 has", 100, ":", s1.has(100));

// delete element
s1.delete(13);
console.log("After delete 10:", s1);

// size of set
console.log("Size of s1:", s1.size);

// clear set
s1.clear();
console.log("Clear set:", s1);

// Set -> Array
const students = ["Shivani", "Nisha", "Rishika", "Shivani", "Ruhi", "Nisha"];
console.log("Students:", students);
const studentSet = new Set(students);
console.log("Student set:", studentSet);

const uniqueStudentName = [... studentSet];
console.log("Student array:", uniqueStudentName);

// loop on set
console.log("Student name:-")
for(let name of studentSet) {
    console.log(name);
}

                                        // Data Structure: Map
console.log("\n*********Map*********");

const map = new Map();
console.log("Empty map:", map);

const m1 = new Map([
    [20, 10],
    ["name", "Shivani"],
    [10, "hello"],
    [[1,2,3], "Hii"],
    ['A', 1]
]);

// Add new elements in set
m1.set({class:"first", age:11}, "youngChild");

console.log("Map:", m1);

// is element present
console.log("Is m1 has", 10, ":", m1.has(10));

// delete element
m1.delete(20);
console.log("After delete 20:", m1);

// size of map
console.log("Size of m1:", m1.size);

// clear set
m1.clear();
console.log("Clear map:", m1);

// loop on map
const m2 = new Map([
    [1,'A'],
    [2,'B'],
    [3,'C'],
    [3,'D']
]);

console.log("Loop:");
for(let [key, value] of m2) {
    console.log(key, "->", value);
}