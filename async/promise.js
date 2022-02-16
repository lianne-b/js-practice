"use strict";

// Promise is a JavaScript object for asynchronous operation. (can be used instead of callback functions)

// State: pending -> fulfilled or rejected
// Producer vs. Consumer

// Promise attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
// var Promise: PromiseConstructor 프로미스 생성자
// Syntax: new Promise(executor callback(resolve, reject(reason?)))


// 1. Producer
// (Caution) when new Promise is created, the executor runs automatically.
const promise = new Promise((resolve, reject) => {
    // some heavy works (e.g. network, read files)
    console.log("doing something...");
    setTimeout(() => {
        // resolve("gildong");
        reject(new Error("no network"));
    }, 2000);
})


// 2. Consumers: then, catch, finally
promise
    .then((value) => { // when Promise is resolved
        console.log(value); 
    })
    .catch(error => { // when Promise is rejected
        console.log(error);
    })
    .finally(() => { // executed either way
        console.log("finally");
    })


// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
})

fetchNumber
.then(num => num * 2)
.then(num => num * 3)
.then(num => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(num - 1), 1000);
    })
})
.then(num => console.log(num));


// 4. Error Handling
const getHen = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve("🐓"), 1000);
    })
const getEgg = hen => 
    new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error(`error! ${hen} => 🥚`), 1000));
    });
const cook = egg => 
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${egg} => 🍳`), 1000);
    });


getHen()
.then(getEgg)
.catch((error) => {
    return "🍞";
})
.then(cook)
.then(console.log)
.catch();