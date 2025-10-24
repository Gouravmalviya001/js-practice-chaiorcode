const user = {
    userName : "Gourav",
    price : 999,
    welcomeMessage : function() {
        console.log(`${this.userName} , welcome to the Website.`);
        // console.log(this);
    }
}

// user.welcomeMessage();
// user.userName = "Sam";
// user.welcomeMessage();
// console.log(this);


// function learnThisKeyword(){
//     console.log(this);
// }

// learnThisKeyword();

// const chai = () => {
//     let userName = "Einstein";
//     console.log(this);
// }

// chai();

const addNum = (num1,num2) => {
    return num1 + num2;
}

// OR

let addnumber = (num1,num2) => (num1 + num2);  // let addnumber = (num1,num2) => num1 + num2;
console.log(addnumber(3,7));