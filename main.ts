#! /usr/bin/env node
import inquirer from "inquirer";
// String Concatenation

let firstName1: String = "Muhammad Tahir";
let lastName1: String = "Hasni";
let fullName1: String = (firstName1 + ' ' + lastName1);
console.log(fullName1);

// // with Template Literals:

let firstName2: String = "Muhammad Tahir";
let lastName2: String = "Hasni";
let fullName2: String = (`${firstName2} ${lastName2}`);
console.log(fullName2);
