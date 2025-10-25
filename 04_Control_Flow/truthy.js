// EXAMPLE OF TRUTHY :

let userEmail = [];

// if(userEmail){
//     console.log("Got User Email");
// }else{
//     console.log("Don't have User's Email.");
// }

// FALSY VALUES :
// false, 0, -0, 0n (BigInt), "", null, undefined, NaN 

//TRUTHY VALUES :
// "0" ,'false', " ", {}, [], function(){}

// if(userEmail.length === 0){
//     console.log("Array is Empty.");
// }

const myObj = {};

if(Object.keys(myObj).length === 0){
      console.log("Object is empty");
}

//Nullish Coalescing Operator (??) : null , undefined

// let val1;

// val1 = 5 ?? 10;
// val1 = 10 ?? 5;
// val1 = null ?? 5;
// val1 = 5 ?? null ?? 10;
// val1 = undefined ?? 10;

// console.log(val1);

//****TERNARY OPERATOR***** */

// condition : true ? false ;

//Example :

let iceCreamPrice = 100;

iceCreamPrice >= 80 ? console.log("Ice Cream Price more then 80") : console.log("Ice Cream Price Less Then 80");