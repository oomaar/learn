// Simple Types
var myString;
var myNum;
var myBool;
var myVar;
myString = "Hello World!";
myNum = 11 + 11;
myBool = false;
myVar = "true: this variable can hold a number, a string or a boolean or anything";
console.log("🚀 ~ file: types.ts ~ line 4 ~ myString", myString);
console.log("🚀 ~ file: types.ts ~ line 7 ~ myNum", myNum);
console.log("🚀 ~ file: types.ts ~ line 10 ~ myBool", myBool);
console.log("🚀 ~ file: types.ts ~ line 10 ~ myVar", myVar);
// Arrays
var strArray;
strArray = ["hello", "world"];
console.log("🚀 ~ file: types.ts ~ line 20 ~ strArray", strArray);
var numArray;
numArray = [1, 2, 3];
console.log("🚀 ~ file: types.ts ~ line 26 ~ numArray", numArray);
var boolArray;
boolArray = [true, true, false];
console.log("🚀 ~ file: types.ts ~ line 30 ~ boolArray", boolArray);
// Another way to declare types for an Array
var strTwo;
strTwo = ["Another way to declare a type for an array"];
console.log("🚀 ~ file: types.ts ~ line 33 ~ strTwo", strTwo);
// An array with a defined elements
var strNumTuple;
// this says that this array can hold a string and a number
strNumTuple = ["String and Number", 5];
console.log("🚀 ~ file: types.ts ~ line 39 ~ strNumTuple", strNumTuple);
// Void (null and undefined)
var myVoid = null;
console.log("🚀 ~ file: types.ts ~ line 43 ~ myVoid", myVoid);
var myVoid2 = undefined;
console.log("🚀 ~ file: types.ts ~ line 45 ~ myVoid2", myVoid2);
// null and undefined
var myNull = undefined;
console.log("🚀 ~ file: types.ts ~ line 50 ~ myNull", myNull);
var myUndefined = null;
console.log("🚀 ~ file: types.ts ~ line 51 ~ myUndefined", myUndefined);
