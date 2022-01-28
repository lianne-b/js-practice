"use strict";

// Array


// 1. Declaration

const arr1 = new Array();
const arr2 = [1, 2];



// 2. Index position

const fruits = ["🍎", "🍋"];
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
fruits.push("🍅", "🍐");
console.log(fruits);

//: pop remove an item from the end
fruits.pop();
console.log(fruits);

// unshift: add an item to the beginning
fruits.unshift("🥝", "🍊");
console.log(fruits);

// shift: remove an item from the beginning
fruits.shift();
fruits.shift();
console.log(fruits);

// note! shift, unshift are much slower than pop, push
// 배열 맨 끝에서부터 삭제하거나 추가하는 것은 끝자락에 공간 하나를 삭제하거나 추가로 만드는 것이라 앞에 있는 데이터들은 그대로 둔다 / 반면 배열의 시작 부근에서 수정을 가할 경우 아이템이 뒤로 밀려나거나(unshift) 앞당겨오기 때문에(shift) 데이터가 하나하나 처리가 되어 배열 length가 길면 길수록 처리하는 시간이 길어진다.

// splice: remove an item by index position
fruits.push("🍍", "🍉", "🍒");
console.log(fruits);
fruits.splice(1, 1); // delete every item from the index, if the second parameter is not specified
console.log(fruits);
fruits.splice(1, 1, "🍈", "🍑");
console.log(fruits);

// combine two arrays
const fruits2 = ["🫐", "🍇"];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);



// 5. Searching
// indexOf: find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf("🍎"));

// includes: check whether the item is included in the array
console.log(fruits.includes("🍓")); // returns boolean

// lastIndexOf: find the last index of the item
console.clear();
fruits.push("🍎");
console.log(fruits);
console.log(fruits.indexOf("🍎")); // indexOf returns the very first item in the list even if there is multiple of the same item
console.log(fruits.lastIndexOf("🍎"));

