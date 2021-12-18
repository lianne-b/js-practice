// 1. String concatenation

console.log('my' + 'cat');
console.log('1' + 2);
console.log(`string literals: 1 + 2 = ${1 + 2}`);
console.log("my cat's \n\t book"); // \n: line break \t: tab



// 2. Numeric operators 

console.log(1 + 1); // add
console.log(1 - 1); // subtract
console.log(1 / 1); // divide
console.log(1 * 1); // multiply
console.log(5 % 2); // remainder
console.log(2 ** 3); // exponentiation



// 3. Increment and decrement operators 

let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1;
// preIncrement = counter;
const postIncrement = counter++;
// postIncrement = counter;
// counter = counter + 1;
const preDecrement = --counter;
// counter = counter - 1;
// preDecrement = counter;
const postDecrement = counter--;
// postDecrement = counter;
// counter = counter - 1;



// 4. Assignment operators

let x = 3;
let y = 6;
x += y; // x = x + y;
x -= y;
x *= y;
x /= y;



// 5. Comparison operators

console.log(10 < 6); // less than
console.log(10 <= 6); // less than or equal to
console.log(10 > 6); // greater than
console.log(10 >= 6); // greater than or equal to



// 6. Logical operators: || (or), && (and), ! (not)

const value1 = false;
const value2 = 4 < 2;

// || (or) finds the first truthy value (and stops)

console.log(`or: ${value1 || value2 || check()}`);

// && (and) finds the first falsy value

console.log(`and: ${value1 && value2 && check()}`);

// often used to compress long if-statement
// (nullableObject && nullableObject.something);
// if (nullableObject != null) {
//     nullableObject.something;
// }

function check() {
    for (let i = 0; i < 10; i++) {
        // wasting time
        console.log("💡");
    }
    return true;
}

// ! (not) reverses the value
console.log(!value1);



// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion

console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strick equality, no type conversion

console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// object equality by reference

const gildong1 = { name: 'gildong'};
const gildong2 = { name: 'gildong'};
const gildong3 = gildong1;
console.log(gildong1 === gildong2);
console.log(gildong1 === gildong2);
console.log(gildong1 === gildong3);

// equality - puzzler

console.log(0 == false);
console.log(0 === false);
console.log('' == false);
console.log('' === false);
console.log(null == undefined);
console.log(null === undefined);



// 8. Conditional operators: if

// if, else if, else

const name = 'gildong';
if (name === 'gildong') {
    console.log('Welcome, Gildong!');
} else if (name === 'coder') {
    console.log('You are a coder!');
} else {
    console.log('unknown');
}



// 9. Ternary operator: ?

// condition ? value1 : value2;

console.log(name === 'gildong' ? 'yes' : 'no');



// 10. Switch statement

// used for multiple if checks
// used for enum-like value check
// used for multiple type checks in TS

const browser = 'IE';
switch (browser) {
    case 'IE':
        console.log('go away!');
        break;
    case 'Chrome':
    case 'Firefox':
        console.log('love you!');
        break;
    default:
        console.log('same all!');
        break;
}



// 11. Loops

// while loop; body code is executed while the condition is truthy

let i = 3;
while (i > 0) {
    console.log(`while: ${i}`);
    i--;
}

// do while loop; body code is executed first, then check the condition 

do {
    console.log(`do while: ${i}`);
    i--;
} while (i > 0);

// for loop; for(begin; condition; step)

for (i = 3; i > 0; i--) {
    console.log(`for: ${i}`);
}

for (let i = 3; i > 0; i = i - 2) {
    // inline variable declaration
    console.log(`inline variable for: ${i}`);
}

// nested loops

for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        console.log(`i: ${i}, j:${j}`);
    }
}



//////////////////////////////

// Ex 1. Iterate from 0 to 10 and print only even numbers

for (let i = 0; i < 11; i += 2) {
    console.log(`result a:${i}`);
}

//// using continue

for (let i = 0; i < 11; i ++) {
    if (i % 2 !== 0) {
        continue;
    }
    console.log(`result a2:${i}`);
}


// Ex 2. Iterate from 0 to 10 and print numbers until reaching 8

for (let i = 0; i < 11; i++) {
    if (i < 9) {
        console.log(`result b:${i}`);
    }
}

//// using break

for (let i = 0; i < 11; i++) {
    if (i > 8) {
        break;
    }
    console.log(`result b2:${i}`);
}