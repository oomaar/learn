// function getSum(num1: number, num2: number): number{
//     return num1 + num2;
// };
const getSum = (num1: number, num2: number): number => num1 + num2;
console.log("🚀 ~ file: functions.ts ~ line 2 ~ getSum ~ getSum", getSum(1,5));

let mySum = function(num1: any, num2: any): number{
    typeof num1 == 'string' ? num1 = parseInt(num1) : null;
    typeof num2 == 'string' ? num2 = parseInt(num2) : null;
    return num1 + num2;
};
console.log("🚀 ~ file: functions.ts ~ line 10 ~ mySum ~ mySum", mySum("3", 5));

// the question mark makes the paramter optional so we can call the function with 1 paramter ex: getName("omar");
// function getName (Fname: string, Lname?: string): string {
    // if (Lname == undefined) {
    //     return Fname;
    // };
    // return Fname + " " + Lname;
    // OR ->
    // return Lname == undefined ? Fname : Fname + " " + Lname;
// };
const getName = (Fname: string, Lname?: string): string => Lname == undefined ? Fname : Fname + " " + Lname;
console.log("🚀 ~ file: functions.ts ~ line 15 ~ getName ~ getName", getName("Omar"));

function myVoid(): void {
    return;
}