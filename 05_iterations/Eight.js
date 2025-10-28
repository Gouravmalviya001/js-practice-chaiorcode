const myNums = [1,2,3];

// const myTotal = myNums.reduce(function(acc,currval) {
//     console.log(`acc : ${acc} and current Value : ${currval}`);
//     return acc + currval
// }, 0)

//**OR** */

const myTotal = myNums.reduce((acc,currval) => acc+currval,0);
// console.log(myTotal);

const shoppingCart = [
    {
        itemName : "JS Course",
        price : 1999                
    },
    {
        itemName : "Python Course",
        price : 999
    },
    {
        itemName : "Java SE Course",
        price : 12999
    }
]

const haveToPay = shoppingCart.reduce((acc,item) => acc+item.price , 0);

console.log(haveToPay);