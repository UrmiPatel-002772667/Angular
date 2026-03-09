"use strict";
// String
let lname = "John Doe";
let upperName = lname.toUpperCase();

// Number
let age = 30;

// Boolean
let isValid: boolean = true;

// Array
let arr : string[] = ["apple", "banana", "cherry"];
let numlist : Array<number> = [1, 2, 3, 4, 5];

// Enum
enum color {    
    Red,
    Green,
    Blue
};
let c: color = color.Green;

// Tuple
let tuple: [number, number] = [40, 30];

function swapNums(num1: number, num2: number): [number, number] {
    return [num2, num1];
};
swapNums(tuple[0], tuple[1]);   

// Any
let department: any;
department = "Sales";
department = 123; // No error, but not recommended

// Void
function logMessage(message: string): void {
    console.log(message);
}
logMessage("Hello, World!");

// Filter numbers greater than 2
let result = numlist.filter((num) => num > 2);
// Find the first number that is equal to 3
let num = numlist.find((num) => num === 3);
// Calculate the sum of all numbers in the list
let sum = numlist.reduce((acc, num) => acc + num, 0);

console.log(upperName);
console.log(age);
console.log(isValid);
console.log(arr);
console.log(numlist);
console.log(result);
console.log(num);
console.log(sum);
console.log(department)