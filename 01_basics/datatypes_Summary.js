/**************PRIMITIVE DATATYPES************* */
/* 7 Types : String, Number, Boolean, BigInt, Symbol, null, undefined.*/

//example :
let name = "Gourav";
let marks = 97;
let isPresent = true;
let mobNumber = 88175323932039934523n;
let temp = null;
let stu_class; //undefined
console.log(typeof mobNumber);

//example of symbol :
let id = Symbol('123');
let anotherId = Symbol('123');

//comparison :

console.log(id === anotherId); // false


// Non-Primitive / Referenced Datatypes****************

//Arrays , Objects, Functions
//examples :
let superHeros = ["Shaktiman","Iron Man","SuperMan"];
let myObj = {
    name : "Gourav",
    age : 24,
    contNum : 8817532393,
};
const myFunction = function(){
    console.log("hello WORLD!");
}

/**********STACK AND HEAP MEMORY ******************/
let myYoutubeName = "GARV";
let myAnotherYoutube = myYoutubeName;
myAnotherYoutube = "GouravMalviyaCreation";
console.log(myAnotherYoutube);
console.log(myYoutubeName);

let userOne = {
    email : "gourav@123.com",
    upi : "gouravm@Sbi",
};

let userTwo = userOne;

console.log(userTwo.email);
console.log(userOne.email);
