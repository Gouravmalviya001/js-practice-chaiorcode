// let score = "33abc";          // NaN
// let score = null;             // 0
// let score = undefined;           // NaN ("Not a Number")
// let score = true;                //  1
let score = "Gourav";             //  NaN

console.log(score);

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);

let isBooleanLoggedIn = "Gourav"; // true

// if value is "" then output returns false

let ans = Boolean(isBooleanLoggedIn);
console.log(ans); 


let number = 33;

let numberInString = String(number);
console.log(numberInString);
console.log(typeof numberInString); 