// JSON (JavaScript Object Notation)



// 1. Object to JSON
// stringify(obj)

let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']); // single quote ('') -> changed to double (""): JSON's rule - means it is converted to JSON
console.log(json);

const rabbit = {
    name: "tori",
    color: "white",
    size: null,
    birthDate: new Date(),
   //  symbol: Symbol("id"), // **error** cannot convert Symbol data into JSON / Symbol - exclusive to JavaScript
    jump: () => { // methods cannot be included in JSON
        console.log(`${name} can jump!`);
    },
};

json = JSON.stringify(rabbit, ["name", "size"]); // replacer parameter: include only the desired properties

json = JSON.stringify(rabbit, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === "name" ? "gildong" : key === "color" ? "blue": value;
});

console.log(json);

console.clear();



// 2. JSON to Object
// parse(json)

json = JSON.stringify(rabbit);
const obj = JSON.parse(json, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === "birthDate" ? new Date(value) : value;
});
console.log(obj);
rabbit.jump();
// obj.jump(); methods not included in JSON / no jump() in JSON / parsed JSON (which is obj)

console.log(rabbit.birthDate.getDate()); // accessing to rabbit object's Date APIs
console.log(obj.birthDate.getDate()); // **error if reviver callback is not specified** methods not working in parsed JSON / because when they were converted to JSON, they've become strings