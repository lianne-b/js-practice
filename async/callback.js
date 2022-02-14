"use strict";

// JavaScript is synchronous 자바스크립트는 동기적인 언어다.
// Execute the code block in order after hoisting

console.log("1"); // sync
setTimeout(function() { 
    console.log("2"); // async
}, 100);
console.log("3"); // sync


// Synchronous callback
function printImmediately(print) {
    print();
}

printImmediately(() => console.log("hello")); // sync


// Asynchronous callback
function printWithDelay(print, timeout) {
    setTimeout(print, timeout);
}

printWithDelay(() => console.log("asyn callback"), 200); // async




// // Callback Hell example

// 1. Receive user info (id & password)
// 2. Log in to server
// 3. Retrieve user id from server
// 4. Retrieve user role from server with the id

const UserStorage = class UserStorage {
    loginUser(id, password, onSuccess, onError) {
        setTimeout(() => {
            if (
                (id === "gildong" && password === "12345") || 
                (id === "maldong" && password === "23456") 
            ) {
                onSuccess(id);
            } else {
                onError(new Error("Not found"));
            }
        }, 100);
    }

    getRoles(user, onSuccess, onError) {
        setTimeout(() => {
            if (user === "gildong") {
                onSuccess({name: "gildong", role: "admin"});
            } else {
                onError(new Error("No access"));
            }
        }, 100);
    }
}


const userStorage1 = new UserStorage();
const id = prompt("Enter your id");
const password = prompt("Enter your password");

userStorage1.loginUser(
    id,
    password,
    (user) => {
        userStorage1.getRoles(
            user, 
            (userWithRole) => {
            alert(`Hello ${userWithRole.name}, you have a(n) ${userWithRole.role} role.`);
        }, (error) => {
            console.log(error);
        })
    },
    (error) => {console.log(error)},
);

