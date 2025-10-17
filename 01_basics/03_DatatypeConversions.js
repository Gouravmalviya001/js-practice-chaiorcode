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


/*****************STRING OPERATIONS****************** */

let value = 3;
let negValue = -value;
// console.log(negValue);

// console.log(2+3);
// console.log(2-3);
// console.log(2*3);
// console.log(2**3); //Power
// console.log(2/3);
// console.log(2%3);  //Remender

/**********CONCATINATION*********** */

// let str1 = "Hello";
// let str2 = " Gourav";
// let str3 = str1+str2;
// console.log(str3);

// console.log("2" + 3);  //23
// console.log(2 + "3");  //23
// console.log("2"+3+3);  //233
// console.log(2+2+"3");  //43

// console.log((2 + 3) * 7 % 4); 

// let num1, num2, num3;
// num1 = num2 = num3 = 5;      //Code not easy to read for others

let gameCounter = 100;
gameCounter++;
console.log(gameCounter);