// const tinderUser = new Object();
// console.log(tinderUser);
const tinderUser = {};
// console.log(tinderUser);

tinderUser.name = "Gourav";
tinderUser.id = "123abc";
tinderUser.isLoggedIn = false;

// // console.log(tinderUser);

// const regularUser = {
//     email : "gouravmalviya@123",
//     fullName : {
//         userFullName : {
//             ["firstName"] : "Gourav",
//             ["lastName"] : "Malviya"
//         }
//     }
// }

// console.log(regularUser.fullName.userFullName.firstName);
// console.log(regularUser);

const obj1 = {1 : "a", 2 : "b"};
const obj2 = {3 : "a", 4 : "b"};
const obj4 = {5 : "a", 6 : "b"};

// const obj3 = {obj1, obj2};

// const obj3 = Object.assign({}, obj1, obj2, obj4);

// const obj3 = {...obj1, ...obj2, ...obj4};
// console.log(obj3); 

const user = [
    {
        id : 1,
        email : "gourav@123"
    },
    {
        id : 1,
        email : "gourav@123"
    },{
        id : 1,
        email : "gourav@123"
    },{
        id : 1,
        email : "gourav@123"
    }
]

user[1].email;
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));