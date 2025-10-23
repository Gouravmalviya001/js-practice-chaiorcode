//Global Scope
let a = 10;
var b = 20;
const c = 30;

if(true){
    //Local Scope
    let a = 100;
    var b = 20;
    const c = 30;

    // console.log(a);

}

// console.log(a);

// using nested function

function one() {
    const username = "Gourav";
    function two(){
        const channell = "Youtube"
        // console.log(username);
    }
    // console.log(channell);

    two()
}
one();

if(true){
    const username = "Gourav";
    if(username === "Gourav"){
        const website = "garv.com";
        console.log(username+ " " + website);
    }
    // console.log(website);
}
// console.log(username);

// there are two types of function declaration, example :

const myFunction = function (num) {        //Expression function : function hold in a declarative variable
    return num + 1;
}

// in basic function we can call the function before declaraion like :
myFunction1(7);                           //without any error
function myFunction1(num) {               //Basic function
    return num + 2;
}

let res = myFunction(5);
console.log(res);