"use strict";

// Array


// 1. Declaration

const arr1 = new Array();
const arr2 = [1, 2];



// 2. Index position

const fruits = ["π", "π"];
console.log(fruits);
console.log(fruits[0]); // print the first item
console.log(fruits[fruits.length - 1]); // print the last item



// 3. Looping over an array

// a. for
console.clear();
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// b. for of
for(let fruit of fruits) {
    console.log(fruit);
}

// c. forEach
fruits.forEach(function(fruit) {
    console.log(fruit);
})

fruits.forEach((fruit) => console.log(fruit)); // short-form with an arrow function
fruits.forEach((item) => console.log(item)); // parameter name can be any



// 4. Addition, deletion, copy

// push: add an item to the end
fruits.push("π", "π");
console.log(fruits);

//: pop remove an item from the end
fruits.pop();
console.log(fruits);

// unshift: add an item to the beginning
fruits.unshift("π₯", "π");
console.log(fruits);

// shift: remove an item from the beginning
fruits.shift();
fruits.shift();
console.log(fruits);

// note! shift, unshift are much slower than pop, push
// λ°°μ΄ λ§¨ λμμλΆν° μ­μ νκ±°λ μΆκ°νλ κ²μ λμλ½μ κ³΅κ° νλλ₯Ό μ­μ νκ±°λ μΆκ°λ‘ λ§λλ κ²μ΄λΌ μμ μλ λ°μ΄ν°λ€μ κ·Έλλ‘ λλ€ / λ°λ©΄ λ°°μ΄μ μμ λΆκ·Όμμ μμ μ κ°ν  κ²½μ° μμ΄νμ΄ λ€λ‘ λ°λ €λκ±°λ(unshift) μλΉκ²¨μ€κΈ° λλ¬Έμ(shift) λ°μ΄ν°κ° νλνλ μ²λ¦¬κ° λμ΄ λ°°μ΄ lengthκ° κΈΈλ©΄ κΈΈμλ‘ μ²λ¦¬νλ μκ°μ΄ κΈΈμ΄μ§λ€.

// splice: remove an item by index position
fruits.push("π", "π", "π");
console.log(fruits);
fruits.splice(1, 1); // delete every item from the index, if the second parameter is not specified
console.log(fruits);
fruits.splice(1, 1, "π", "π");
console.log(fruits);

// combine two arrays
const fruits2 = ["π«", "π"];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);



// 5. Searching
// indexOf: find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf("π"));

// includes: check whether the item is included in the array
console.log(fruits.includes("π")); // returns boolean

// lastIndexOf: find the last index of the item
console.clear();
fruits.push("π");
console.log(fruits);
console.log(fruits.indexOf("π")); // indexOf returns the very first item in the list even if there is multiple of the same item
console.log(fruits.lastIndexOf("π"));

