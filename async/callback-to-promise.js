"use strict";

// Callback Hell example -> Promise

// 1. Receive user info (id & password)
// 2. Log in to server
// 3. Retrieve user id from server
// 4. Retrieve user role from server with the id


class UserStorage {
    loginUser(id, password) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (
                    (id === "gildong" && password === "12345") || 
                    (id === "maldong" && password === "23456") 
                ) {
                    resolve(id);
                } else {
                    reject(new Error("Not found"));
                }
            }, 1000);
        })
    }

    getRoles(user) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (user === "gildong") {
                    resolve({name: "gildong", role: "admin"});
                } else {
                    reject(new Error("No access"));
                }
            }, 1000);
        });
    }
}




const userStorage1 = new UserStorage();
const id = prompt("Enter your id");
const password = prompt("Enter your password");
userStorage1.loginUser(id, password)
.then(userStorage1.getRoles)
.then(user => alert(`Hello ${user.name}, you have a(n) ${user.role} role.`))
.catch(console.log);