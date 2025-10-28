/*********Loops for Arrays*****/

// const arr = [1, 2, 3, 4, 5, 6];

// for (const num of arr) {
//     console.log(num);
// }

// const greet = "Hello World !";

// for (const str of greet) {
//     console.log(str);
// }

//*********MAPS******** */

const map = new Map();
map.set('IN',"india");
map.set('USA',"United States of America");
map.set('Fr',"France");
map.set('UK',"United Kingdom");

map.set('IN',"india"); //Holding Unique Values only

// console.log(map);

// for (const [key,value] of map) {
//     console.log(key," :- ",value);
// }

// for of are not applicable on objects


const myObject = {
    js : "JavaScript",
    cpp : "C++",
    rb : "Ruby",
    swift : "swift by Apple"
}

for (const key in myObject) {
    // console.log(`${key} for shortcut values are : ${myObject[key]}`);
}

const programing = ['Js','Cpp','Java','Python','C'];

for (const key in programing) {
    console.log(programing[key]);
}

//Maps are not Iteratable, So we are not able to apply loops.
//Objects : for-in, Array : for-of


