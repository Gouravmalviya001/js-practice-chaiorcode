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
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));


const course = {
    courseName : "JavaScript in Hindi.",
    courseInstructor : "Hitesh Choudhary",
    price : 999
}

// Object Destructure :- 

const {courseInstructor : Instructor } = course;

// console.log(courseInstructor);
console.log(Instructor);


// Brief Intro of APIs :-

//APIs Data deliver in JSON formate

//Example :

// {
//     courseName : "Js in Hindi",
//     coursePrice : 999,
//     courseInstructor : "Hitesh"
// }

// In Array Formate

// [
//     {},
//     {},
//     {}
// ]

// Famous APIs :-

//1. Random User Me.