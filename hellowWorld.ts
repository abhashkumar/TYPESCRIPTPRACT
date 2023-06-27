let message: string = "Hello world";
console.log(message);

/*

*/

//For example, to create an object with an inferred type which includes name: string and id: number, you can write:

const user1 = {
    name: "Hayes",
    id: 0,
  };

//You can explicitly describe this object’s shape using an interface declaration:

interface User {
    name: string;
    id: number;
  }

  const user2: User = {
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
    name: string;
    id: number;
   
    constructor(name: string, id: number) {
      this.name = name;
      this.id = id;
    }
  }
   
  const user: User = new UserAccount("Murphy", 1);


  //You can use interfaces to annotate parameters and return values to functions:

  function deleteUser(user: User) {
    // ...
  }
   
  function getAdminUser(): User {
    //...
    return {
        name:"bebu",
        id: 21
    }
  }

  //There is already a small set of primitive types available in JavaScript: boolean, bigint, null, number, string, symbol, and undefined, which you can use in an interface. TypeScript extends this list with a few more, such as any (allow anything), unknown (ensure someone using this type declares what the type is), never (it’s not possible that this type could happen), and void (a function which returns undefined or has no return value).



//With TypeScript, you can create complex types by combining simple ones. There are two popular ways to do so: with unions, and with generics.

//if you hover on MyBool you will see this as boolean
type MyBool = true | false;

//A popular use-case for union types is to describe the set of string or number literals that a value is allowed to be:

type WindowStates = "open" | "closed" | "minimized";
type LockStates = "locked" | "unlocked";
type PositiveOddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;

function getLength(obj: string | string[]) {
    return obj.length;
  }

 // To learn the type of a variable, use typeof:

 //For example, you can make a function return different values depending on whether it is passed a string or an array:

 // hove over on obj in line number 96 and line number 101
 function wrapInArray(obj: string | string[]) {
    if (typeof obj === "string") {
      return [obj];
    }
    return obj;
  }

  //Generics provide variables to types. A common example is an array. An array without generics could contain anything. An array with generics can describe the values that the array contains.


type StringArray = Array<string>;
type NumberArray = Array<number>;
type ObjectWithNameArray = Array<{ name: string }>;

interface Backpack<Type> {
    add: (obj: Type) => void;
    get: () => Type;
  }
   
  // This line is a shortcut to tell TypeScript there is a
  // constant called `backpack`, and to not worry about where it came from.
  declare const backpack: Backpack<string>;
   
  // object is a string, because we declared it above as the variable part of Backpack.
  // this line while running will throw an exception saying backpack.get is not defined, during compilation it will not throw an exception,hence commenting it
 
  // const object = backpack.get();

  // Since the backpack variable is a string, you can't pass a number to the add function.
//backpack.add(23);


//In a structural type system, if two objects have the same shape, they are considered to be of the same type.

interface Point {
    x: number;
    y: number;
  }
   
  function logPoint(p: Point) {
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