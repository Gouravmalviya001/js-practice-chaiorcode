/********** FOR LOOPS ************ */

//Print table using for loop

// for (let i = 0; i <= 10; i++) {
//     for (let j = 0; j <= 10; j++) {
//       console.log(i+" * "+j+" = "+(i*j));
//     }
// }

let myArray = ["Shaktiman","nagraj","IronMan"];

for (let i = 0; i < myArray.length; i++) {

    const element = myArray[i];

    if(element === "nagraj"){
        continue;
    }

    console.log(element);
}