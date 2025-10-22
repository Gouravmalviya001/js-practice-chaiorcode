function printMyName(){
    console.log("Gourav Malviya");
}

function printSum(num1,num2){
    return num1 + num2;
}

// function Call

// let result = printSum(10,20);
// console.log("Result : "+result);
// console.log(typeof result);
// printMyName();
// printSum(2,9);
// printSum(2,"a");
// printSum(2,"3");
// printSum(2,null);

function loginUserMessage(username){
    if(!username){
        return `Please Enter a User Name...`;
    }
    return `${username}  just logged in.`;
}

let username1 = loginUserMessage("Gourav123");
let username2 = loginUserMessage("");
console.log(username1);
console.log(username2);