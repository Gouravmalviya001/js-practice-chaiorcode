// ***********ARRAY**************

const arr = [0,1,2,3,4,5,"Gourav",true];
const myHeros = ["Shaktiman","Iron Man"];
// console.log(arr[0]);

const newArray = new Array(2, 4, 6, 8, 10);
// console.log(newArray.length);

//********ARRAY METHODS************* */

// arr.push(6);
// arr.push(7);
// arr.pop()
// console.log(arr);

// arr.unshift(11);
// arr.shift();
// console.log(arr);


// console.log(arr.includes(9));
// console.log(arr.indexOf(3));

// const arrStringConversion = arr.join();
// console.log(arrStringConversion);
// console.log(typeof arrStringConversion);

//*****Slice and Splice********
console.log(arr);
console.log(arr.slice(1,4));
console.log(arr);
console.log(arr.splice(1,4));  // it changes original array and includes last end index also,
console.log(arr);