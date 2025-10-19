const marvel_Heros = ["IronMan","SpiderMan","Hulk","Thor"];
const dc_Heros = ["SuperMan","Flash","BatMan"];

// marvel_Heros.push(dc_Heros);
// const allHeros = marvel_Heros.concat(dc_Heros);

// const allHeros = [...dc_Heros,...marvel_Heros];  // called spread method , work as concat
// console.log(allHeros);

// const newArray = [1, 2, 3, 4, [2,4,6], [3, 33, 333, [4, 44], 3333], 5, 6];
// // console.log(newArray.flat(Infinity));
// console.log(newArray.flat(10));

// console.log(Array.isArray("Gourav"));
// console.log(Array.from("Gourav"));
// console.log(Array.from({name : "Gourav"}));   //interesting...also ask in interviews

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));
