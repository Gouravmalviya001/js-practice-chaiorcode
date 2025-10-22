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

// let username1 = loginUserMessagen("Gourav123");
// let username2 = loginUserMessage("");
// console.log(username1);
// console.log(username2);

function calculateCartPrice(val1,val2,...num){
    return val1,val2,num;
}

const res = calculateCartPrice(100,200,10000);
console.log(res);

const user = {
    username : "gourav@123",
    price : 199
}

function handleObject(anyobject){
    console.log(`${anyobject.username} is the userame and the price is ${anyobject.price}`);
}  

handleObject(user);

const myNewArray = [100, 200,400, 600 ];

function returnSecondValue(getArray){
    return getArray[1];
}

console.log(returnSecondValue(myNewArray));
