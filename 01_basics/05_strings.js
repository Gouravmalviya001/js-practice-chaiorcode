let name = "Ram ";
const repoCountNum = 50;

// console.log(name + repoCountNum + " Values");   //   OLD Process

// NEW WAY :
console.log(`hello my name is ${name} and my repo count is ${repoCountNum}`);


const gameName = new String('Gourav-m');

// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.toUpperCase());
console.log(gameName.indexOf('r'));
console.log(gameName.charAt(1));

const newStr = gameName.substring(0,6);  // Negative values not allowed
console.log(newStr);

const anotherString = newStr.slice(-5,5);
console.log(anotherString);

const newString = String("  Gourav   ");
console.log(newString.trim());
console.log(newString);

const url = "https://gourav%20malviya.com";
console.log(url.replace('%20','-'));

const urll = url.replace('%20','-');

console.log(urll.includes('-'));

const myName = String("My-Name-is-Gourav");
console.log(myName.split('-'));