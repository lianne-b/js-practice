'use strict';

// Object-oriented programming
// class: template
// object: instance of a class
// JavaScript classes


// 1. Class declarations

class Person {  // class 키워드를 이용해서 클래스 생성
    // constructor
    constructor(name, age) {  // 생성자를 이용해서 개체를 만들 때 필요한 데이터를 전달
        // fields
        this.name = name;  // 각 속성에 전달된 데이터를 바로 할당
        this.age = age;
    }
    // methods
    speak() {  // 속성 값을 출력하는 메소드
        console.log(`${this.name}: hello!`);
    }
}


// 1.2 Object creation

const gildong = new Person("gildong", 20);
console.log(gildong.name);
console.log(gildong.age);
gildong.speak();



// 2. Getter and setters

class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get age() {
        return this._age;
    }
    
    set age(value) {
        this._age = value < 0 ? 0 : value;
        
    }
}

const user1 = new User("Min", "Pong", -2);
console.log(user1.age);



// 3. Fields (public, private)

class Experiment {
    publicField = 2;
    #privateField = 0;
}

const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);



// 4. Static properties and methods

class Article {
    static publisher = "Gildong";
    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }

    static printPublisher() {
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publisher);
Article.printPublisher();




// 5. Inheritance
// a way for one class to extend to another class

class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color; 
    }

    draw() {
        console.log(`drawing ${this.color} color of`);
    }

    getArea() {
        return this.width * this.height;
    }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
    draw() {
        super.draw();
        console.log("🔺");
    }
    getArea() {
        return (this.width * this.height) / 2;
    }
}

const rectangle = new Rectangle(20, 20, 'blue');
const triangle = new Triangle(20,20,'yellow');
rectangle.draw();
triangle.draw();
console.log(rectangle.getArea());
console.log(triangle.getArea());




// 6. Class checking: instanceOf

console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object);