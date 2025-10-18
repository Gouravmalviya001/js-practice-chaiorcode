//?????????????NUMBERS//???????????????????????????????

// const score = 100;
// console.log(score);  // Output without Type

// const balance = new Number(100);
// console.log(balance);  // Output with Type

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));
// console.log(balance.toLocaleString('IN-eng'));

// const precisonNum = 1123.8933;
// console.log(precisonNum.toPrecision(5));


// const hundreds = 1000000;
// console.log(hundreds.toLocaleString('en-IN'));
// console.log(hundreds.toLocaleString());

//*************MATHS************ */

// console.log(Math);

// console.log(Math.abs(-4));
// console.log(Math.sqrt(144));
// console.log(Math.round(4.5));
// console.log(Math.ceil(4.9));
// console.log(Math.floor(4.1));
// console.log(Math.min(4,10,14,3,5,13,9,19));
// console.log(Math.max(4,10,14,3,5,13,9,19));

// console.log(Math.random());
// console.log(((Math.random())*10) + 1);

const min = 10;
const max = 20;
// const res = ((Math.random()*10) + 1) + min;
// console.log(Math.floor(res));

//Another way :

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
