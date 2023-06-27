let message = "Hello world";
console.log(message);
/*

*/
//For example, to create an object with an inferred type which includes name: string and id: number, you can write:
const user1 = {
    name: "Hayes",
    id: 0,
};
const user2 = {
    name: "Hayes",
    id: 0,
};
/*

this will throw error you cant assign string to id since it is defined as number in the interface
const user3: User = {
  name: "Abhash",
  id:"test"
}

*/
//Since JavaScript supports classes and object-oriented programming, so does TypeScript. You can use an interface declaration with classes:
/*
interface User {
  name: string;
  id: number;
}
*/
class UserAccount {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
}
const user = new UserAccount("Murphy", 1);
//You can use interfaces to annotate parameters and return values to functions:
function deleteUser(user) {
    // ...
}
function getAdminUser() {
    //...
    return {
        name: "bebu",
        id: 21
    };
}
function getLength(obj) {
    return obj.length;
}
// To learn the type of a variable, use typeof:
//For example, you can make a function return different values depending on whether it is passed a string or an array:
// hove over on obj in line number 96 and line number 101
function wrapInArray(obj) {
    if (typeof obj === "string") {
        return [obj];
    }
    return obj;
}
function logPoint(p) {
    console.log(`${p.x}, ${p.y}`);
}
// logs "12, 26"
const pointy = { x: 12, y: 26 };
logPoint(pointy);
const point3 = { x: 12, y: 26, z: 89 };
logPoint(point3); // logs "12, 26"
const rect = { x: 33, y: 3, width: 30, height: 80 };
logPoint(rect); // logs "33, 3"
//Argument of type '{ hex: string; }' is not assignable to parameter of type 'Point'.
//Type '{ hex: string; }' is missing the following properties from type 'Point': x, yts(2345)
//const color = { hex: "#187ABF" };
//logPoint(color);
