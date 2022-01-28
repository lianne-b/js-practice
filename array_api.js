"use strict";

// example arrays
const hearts =["🧡", "💛", "💚", "💙", "💜", "🤎", "🖤", "🤍", "❤️‍🩹", "💖"];
const datesOfJanuary = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];


// List of APIs: 

// length: gets or sets the length of the array
const numberOfHearts = hearts.length;
console.log(numberOfHearts);


// toString(): returns a string representation of an array
console.log(datesOfJanuary.toString());


// pop(): removes the last element from an array & returns it
const poppedNumber1 = datesOfJanuary.pop();
const poppedNumber2 = datesOfJanuary.pop();
const poppedNumber3 = datesOfJanuary.pop();
if ((poppedNumber1 + poppedNumber2 + poppedNumber3) === 90) {
    console.log("Correct!");
} 


// concat(): combines two or more arrays & returns a new array without modifying the existing arrays
const specialHearts = ["💕", "💞", "💓", "💗", "💖", "💘"];
const newHearts = hearts.concat(specialHearts);
console.log(newHearts);


// join(): adds all the elements of an array into a string (& can be separated by the specified separator string)
console.log(newHearts.join("/"));
console.log(datesOfJanuary.join(" Jan, "));


// reverse(): reverses the elements in an array in place & mutates the array & returns a reference to the same array
const reversedHearts = newHearts.reverse();
console.log(reversedHearts);

if (reversedHearts === newHearts) {
    console.log("Correct!");
}

const reversedHeartsReversed = reversedHearts.reverse();

if (reversedHeartsReversed === newHearts && reversedHeartsReversed === reversedHearts) {
    console.log("Yes that's right!")
}

console.log(reversedHeartsReversed);
console.log(reversedHearts);
console.log(newHearts);
// caution: reversedHeartsReversed, reversedHearts, and newHearts are all the references of the same array
// both reversedHearts and newHearts have been modified


// shift(): removes the first element & returns it
const heartShifted = hearts.shift();
console.log(heartShifted, hearts);


// slice(): returns a copy of a section of an array
console.log(hearts.slice(0, 3));
console.log(hearts.slice(undefined,3)); // if start is undefined, the slice begins at index 0
console.log(datesOfJanuary.slice(5, -1)); // a negative number can be used for (start, end) to indicate an offset from *the end of the array*
console.log(datesOfJanuary.slice(5)); // if end is undefined, the slice extends to the end of the array

// ************************ 
// sort(): sorts an array in place & mutates the array & returns a reference to the same array
console.log(datesOfJanuary.sort((a, b)=> a - b));
console.log(hearts.sort((a,b) => a - b));
console.log([1,4,6,2].sort((a, b) => a = b));


// splice(): removes elements from an array (& inserts new elements instead) & returns the deleted elements
console.log(hearts.splice(0, 4));
console.log(hearts.splice(1, 1, "🧡"));
console.log(hearts);


// unshift(): inserts new elements at the start of an array & returns the new length of the array
const shiftedJanuary = datesOfJanuary.unshift("2022");
console.log(shiftedJanuary);


// indexOf / lastIndexOf: 



// every():



// some()



// forEach():



// map():



// filter():



// reduce():



// reduceRight():




