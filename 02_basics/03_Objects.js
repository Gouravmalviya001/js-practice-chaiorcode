//NOTE : when we declare as a literal so in this case singleton will also not created except constructor
// object.create


//OBject literals

const mySym = Symbol("key1");

const JsUser = {
    name : "Gourav",
    "Full Name" : "Gourav Malviya",
    [mySym] : "mykey1",
    age : 23,
    location : "Bhopal",
    email : "gouravmalviya135@gmail.com",
    isLoggedIn : false,
    latLoggedIn : ['Monday','Tuesday']
}


JsUser.greetings = function(){
    console.log("Hello Users.")
}

JsUser.greetingsTwo = function(){
    console.log(`Hello Js User ${this.name}`);
}
// console.log(JsUser.email);
// // console.log(JsUser[email]);
// console.log(JsUser["Full Name"]);
// console.log(JsUser[mySym]);
// console.log(typeof JsUser[mySym]);

// console.log(JsUser.email);
// Object.freeze(JsUser);
// JsUser.email = "einstein@123";
console.log(JsUser.greetings());
console.log(JsUser.greetingsTwo());
