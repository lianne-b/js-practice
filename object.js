"use strict";

// Objects 
// One of the JavaScript's data types
// A collection of related data and/or functionality
// Nearly all objects in JavaScript are instances of Objects


// 1. Literals & Properties 

const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

function print(person) {
    console.log(person.name);
    console.log(person.age);
}

const gildong = {name: "gildong", age: 6};
print(gildong);

gildong.hasHair = true;

// delete gildong.hasHair;
console.log(gildong.hasHair);



// 2. Computed properties
// key should be always string

console.log(gildong.name);
console.log(gildong['name']);
gildong['hasHair'] = true;
console.log(gildong.hasHair);

// example situation where it is useful to use computed property names
function printValue(obj, key) {
    console.log(obj[key]);
}
printValue(gildong, "name");
printValue(gildong, "age");



// 3. Property value shorthand

const person1 = {name: "bob", age: 2};
const person2 = {name: "steve", age: 3};
const person3 = {name: "dave", age: 5};

function makePerson(name, age) {
    return {
    name,
    age,
    }
}

const person4 = makePerson("dingdong", 20);
console.log(person4);



// 4. Constructor function

function Person(name, age) {
    this.name = name;
    this.age = age;
}

const person5 = new Person("dongdong", 21);



// 5. in operator
// Property existence check (key in an object)

console.log("name" in gildong); // true
console.log("random" in gildong); // false
console.log(gildong.random); // undefined



console.clear();



// 6. for...in vs. for...of

// for (key in object)
for (let key in gildong) {
    console.log(key);
}

// for (value of iterable) 배열 리스트
const array = [1, 2, 3, 5];
for (let value of array) {
    console.log(value);
}



// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])

const user = {name: "gildong", age: "20"};
const user2 = user;
user2.name = "coder";
console.log(user.name); // "coder"

// old way
const user3 = {}; // 텅 빈 객체 생성
for (let key in user) { // user 안에 있는 key들을 돈다
    user3[key] = user[key]; // user3에 새로운 속성명을 추가하는데 값은 기존 user의 key에 해당하는 값: "coder"를 할당한다
}
console.clear();
console.log(user3);

// preferred way #1
const user4 = {};
Object.assign(user4, user); // 자바스크립트에 내장된 객체 / 자바스크립트 안 모든 객체는 이 Object를 상속한다
console.log(user4);

// preferred way #2
const user5 = Object.assign({}, user);
console.log(user5);


// another example: Object.assign with multiple sources
const fruit1 = {color:"red"};
const fruit2 = {color:"blue", size:"big"};
const mixed = Object.assign({}, fruit1, fruit2); // color의 값이 중복되는 두 가지의 소스를 받아옴
console.log(mixed.color); // "blue"
console.log(mixed.size); // "big"