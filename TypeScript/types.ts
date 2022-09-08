// Simple Types
let myString: string;
let myNum: number;
let myBool : boolean;
let myVar: any;

myString = "Hello World!";
myNum = 11 + 11;
myBool = false;
myVar = "true: this variable can hold a number, a string or a boolean or anything";

console.log("🚀 ~ file: types.ts ~ line 4 ~ myString", myString);
console.log("🚀 ~ file: types.ts ~ line 7 ~ myNum", myNum);
console.log("🚀 ~ file: types.ts ~ line 10 ~ myBool", myBool);

console.log("🚀 ~ file: types.ts ~ line 10 ~ myVar", myVar);

// Arrays
let strArray: string[];
strArray = ["hello", "world"];
console.log("🚀 ~ file: types.ts ~ line 20 ~ strArray", strArray);

let numArray: number[];
numArray = [1, 2, 3];
console.log("🚀 ~ file: types.ts ~ line 26 ~ numArray", numArray);

let boolArray: boolean[];
boolArray = [true, true, false];
console.log("🚀 ~ file: types.ts ~ line 30 ~ boolArray", boolArray);

// Another way to declare types for an Array
let strTwo: Array<string>;
strTwo = ["Another way to declare a type for an array"];
console.log("🚀 ~ file: types.ts ~ line 33 ~ strTwo", strTwo);

// An array with a defined elements
let strNumTuple: [string, number];
// this says that this array can hold a string and a number
strNumTuple = ["String and Number", 5];
console.log("🚀 ~ file: types.ts ~ line 39 ~ strNumTuple", strNumTuple);

// Void (null and undefined)
let myVoid: void = null;
console.log("🚀 ~ file: types.ts ~ line 43 ~ myVoid", myVoid);
let myVoid2: void = undefined;
console.log("🚀 ~ file: types.ts ~ line 45 ~ myVoid2", myVoid2);

// null and undefined
let myNull: null = undefined;
console.log("🚀 ~ file: types.ts ~ line 50 ~ myNull", myNull);
let myUndefined: undefined = null;
console.log("🚀 ~ file: types.ts ~ line 51 ~ myUndefined", myUndefined);