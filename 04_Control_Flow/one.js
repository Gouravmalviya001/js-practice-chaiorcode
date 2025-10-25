//******IF CONDITIONAL****** */

// let isLoggedIn = false;

// if(isLoggedIn){
//     console.log("User Logged In.");
// }else{
//     console.log("User Logged Out");
// }

// OPERATIONS ON CONDITIONALS**********
// <, >, <=, >=, ==, !=, ===

// if( 2 == 3){
//     console.log("Two is not eqauls to three");
// }else{
//     console.log("wrong statement");
// }

// let temperature = 41;

// if(temperature < 50){
//     console.log("Temperature is less then 50");
// }else{
//     console.log("Temperature is greater then 50");
// }

// let score = 200;

// if(score > 100){
//     let power = "FLY";
//     console.log(`User Power : ${power}`);
// }
//     console.log(`User Power : ${power}`);  //  ReferenceError: power is not defined

//******NOT A GOOD PRACTICE, UNREADABLE CODE******* */
// let balance = 1000;
// // if(balance > 500) console.log("Balance less then 500."), console.log("Please add more amount");

// if(balance < 500){
//     console.log("Balance is then 500");
// }else if(balance < 750){
//     console.log("Balance is less then 750");
// }else if(balance < 900){
//     console.log("balance is less then 900");
// }else if(balance < 1200){
//     console.log("balance is less then 1200");
// }else{
//     console.log("insufficient Balance");
// }

let userDebitCard = true;
let isLoggedIn = false;

if(userDebitCard && isLoggedIn){
    console.log("Welcome to the Account");
}else {
    console.log("Sorry..Please Collect all Docs.")
}

let loggedInFromGoogle = false;
let loggedInFromEmail = true;

if(loggedInFromEmail || loggedInFromGoogle){
    console.log("Welcome to your Account");
}else{
    console.log("please create an account");
}