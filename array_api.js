"use strict";

// example arrays
const hearts =["๐งก", "๐", "๐", "๐", "๐", "๐ค", "๐ค", "๐ค", "โค๏ธโ๐ฉน", "๐"];
const datesOfJanuary = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];


// List of APIs:


// Array.from(): creates a new, shallow-copied array instance from an array-like . iterable object
console.log(Array.from("i l o v e u"));


// length: gets or sets the length of the array
const numberOfHearts = hearts.length;
console.log(numberOfHearts);


// find(): Returns the value of the first element in the array where predicate is true, and undefined
console.log(datesOfJanuary.find(date => date === 10));


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
const specialHearts = ["๐", "๐", "๐", "๐", "๐", "๐"];
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
// **** SEARCH BY INDEX ****
console.log(hearts.slice(0, 3));
console.log(hearts.slice(undefined,3)); // if start is undefined, the slice begins at index 0
console.log(datesOfJanuary.slice(5, -1)); // a negative number can be used for (start, end) to indicate an offset from *the end of the array*
console.log(datesOfJanuary.slice(5)); // if end is undefined, the slice extends to the end of the array
// *** end parameter is exclusive of the element at the index 'end' (not returned)

// ************************ 
// sort(): sorts an array in place & mutates the array & returns a reference to the same array
// The default sort order is ascending
console.log(datesOfJanuary.sort((a, b)=> a - b));
console.log(hearts.sort((a,b) => a - b));
console.log([1,4,6,2].sort((a, b) => a = b));


// splice(): removes elements from an array (& inserts new elements instead) & returns the deleted elements
// **** SEARCH BY INDEX ****
console.log(hearts.splice(0, 4));
console.log(hearts.splice(1, 1, "๐งก"));
console.log(hearts);


// unshift(): inserts new elements at the start of an array & returns the new length of the array
const shiftedJanuary = datesOfJanuary.unshift("2022");
console.log(shiftedJanuary);


// indexOf / lastIndexOf: returns the index of the first / the last occurrence of a value in an array
console.log(hearts.indexOf("๐ค"));
datesOfJanuary.push(27);
console.log(datesOfJanuary.lastIndexOf(27));


// every(): determines whether all the members of an array satisfy the specific test & returns a boolean value
datesOfJanuary.splice(0, 1);
console.log(datesOfJanuary.every(element => element < 32));


// some(): determines whether the specified callback function returns true for any element of an array
console.log(datesOfJanuary.some(element => {return element < 15}));
console.log(datesOfJanuary.some(x => x = 20));


// forEach(): performs the specified action for each element in an array
const elongatedJan = datesOfJanuary.forEach((x) => {return x + 10});
console.log(elongatedJan);


// map(): creates a new array populated with the results of calling a provided function on every element in the calling array
// (forEach()์ฒ๋ผ ๋ฐฐ์ด ๋ด ๋ชจ๋? ์์์ ๊ฐ์ ํจ์๋ฅผ ์คํํ? ๋ฟ๋ง ์๋๋ผ ํธ์ถํ ๊ฒฐ๊ณผ๋ฅผ ๋ชจ์ ์๋ก์ด ๋ฐฐ์ด์ ๋ฐํํ๋ค)
console.log(hearts.map(function(heart) {
    return heart + "!";
}))


// filter(): creates a new array with all elements that pass the test implemented by the provided function
console.log(datesOfJanuary.filter( number => number < 15 ));


// reduce(): executes a user-supplied "reducer" callback function on each element of the array / the final result of running the reducer across all elements of the array is a single value
// (์ดํด๊ฐ ์ ์๊ฐ๋ ํ๊ธ ์ค๋ช๋ ์ถ๊ฐ)
// ๋ฐํ ๊ฐ === ๋์? ๊ณ์ฐ์ ๊ฒฐ๊ณผ ๊ฐ
// ๋น ์์๋ฅผ ์?์ธํ๊ณ? ๋ฐฐ์ด ๋ด์ ์กด์ฌํ๋ ๊ฐ ์์์ ๋ํด callback ํจ์๋ฅผ ํ ๋ฒ์ฉ ์คํํ๋๋ฐ, ์ฝ๋ฐฑ ํจ์๋ ๋ค์์ ๋ค ์ธ์๋ฅผ ๋ฐ๋๋ค: 
// 1. accumulator
// 2. currentValue
// 3. currentIndex
// 4. array
console.log(hearts.reduce(function(acc, cur, idx, src) {
    return acc + cur;
}))


// reduceRight(): applies a function against an accumulator and each value of the array (from right-to-left) to reduce it to a single value. (reduce() from the end of the array)
console.log(datesOfJanuary.reduceRight(function(prev, cur, idx, src) {
    return cur - prev;
}))