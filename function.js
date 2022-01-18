"use strict";


// Parameters

// premitive parameters: passed by value
// object parameters: passed by reference

function changeName(obj) {
    obj.name = 'coder';
}

const gildong = {name: 'gildonghong'};
changeName(gildong);
console.log(gildong);


// default parameters

function showMessage(message, from = 'unknown') {
    console.log(`${message} by ${from}`);
}
showMessage('Hi!');


// rest parameters

function printAll(...args) {
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }
}
printAll('donghae', 'seohae', 'gildong');




// Return

function sum(a, b) {
    return a + b;
}
const result = sum(1, 2);
console.log(`sum: ${sum(1, 2)}`);


// Early return, early exit

// (bad example)
function upgradeUser(user) {
    if (user.point > 10) {
        // long upgrade logic...
    }
}

// (good example)
function upgradeUser(user) {
    if (user.point <= 10) {
        return;
    }
    // long upgrade logic... 
}


// Callback function (using function expression)

function randomQuiz(answer, printYes, printNo) {
    if (answer === 'love you') {
        printYes();
    } else {
        printNo();
    }
}

const printYes = function() {
    console.log('yes!');
}

const printNo = function print() {
    console.log('no!');
    // print(); // recursions: calls itself directly or indirectly
}

randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);



// Arrow function

const simplePrint = () => console.log('simplePrint!');
const add = (a, b) => a + b;
const simpleMultiply = (a, b) => {
    // do something more 
    return a + b;
}



// IIFE: Immediately Invoked Function Expression

(function hello() {
    console.log('IIFE');
})();