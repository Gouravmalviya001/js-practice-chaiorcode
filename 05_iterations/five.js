// const coding = ['Js','Cpp','Java','Python','C'];

// coding.forEach(function (item) {         // 1.
//     console.log(item);
// })

// coding.forEach((item) => {              // 2.
//     console.log(item);
// })

// function printItem(item){                   // 3.
//     console.log(item);
// }

// coding.forEach(printItem);

// coding.forEach((item, index, arr) => {
//     console.log(item,index,arr);
// })

// coding.forEach((item) => {
//     console.log(item)
// })

const myNum = [1,2,3,4,5,,6,7,8,9,10];

// const newNum = myNum.filter((num) => {
//     return num < 4;
// })

// console.log(newNum);

const newNum = [];

myNum.forEach( (num) => {
    if(num > 4){
        newNum.push(num);
    }
});

console.log(newNum);