// Date ********

let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toDateString());
// console.log(myDate.toJSON());

console.log(typeof myDate);  //object

// let myBirthDate = new Date(2002, 0, 16);
let myCreatedDate = new Date("01-16-2004");

// console.log(myBirthDate.toDateString());
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

console.log(Math.floor(Date.now()/100));


let newDate = new Date();
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getDay());
console.log(newDate.getMonth()+1);

// `${newDate.getDate} is the Date of Learning`

newDate.toLocaleString('default', {
   weekday : "long",
});