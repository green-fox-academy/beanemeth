
let priceList: { [key: string]: number} = {
    "Milk":	1.07,
"Rice":	1.59,
"Eggs":	3.14,
"Cheese":	12.60,
"Chicken Breasts":	9.40,
"Apples":	2.31,
"Tomato":	2.58,
"Potato":	1.75,
"Onion":	1.10,
}

let BobList: { [key: string]: number} = {

    "Milk":	3,
    "Rice":	2,
    "Eggs":	2,
    "Cheese":	1,
    "Chicken Breasts":	4,
    "Apples":	1,
    "Tomato":	2,
    "Potato":	1,

}

let AliceList:  { [key: string]: number} = {
    "Rice":	1,
    "Eggs":	5,
    "Chicken Breasts":	2,
    "Apples":	1,
    "Tomato":	10,
}
//How much does Bob pay? without funtion:
/* let BobSum: number = 0;

for (const[product, amount]of Object.entries(BobsList)){
    BobSum = BobSum+ priceList[product] * amount;
    
}
console.log(BobSum); 
//How much does Alice pay?
let AliceSum: number = 0;


for (const[product, amount] of Object.entries(AlicesList)){
    AliceSum = AliceSum + priceList[product]*amount;
   
}
console.log(AliceSum);

*/

function howMuchPay(somebodyList:{ [key: string]: number }):void {
    let Sum: number = 0;

    for (const [product, amount] of Object.entries(somebodyList)) {
        Sum = Sum + priceList[product] * amount;
    }
    console.log(Sum);
}

howMuchPay(BobList)
howMuchPay(AliceList)

/* Who buys more Rice?
Who buys more Potato?
Who buys more Ham?
Who buys more Apples? */

function buyMore(product: string) {
    if (BobList[product] > (AliceList[product]  || AliceList.hasOwnProperty(product) ) ) {
        console.log("Bob");
    }else if (( BobList.hasOwnProperty(product) || BobList[product]) < AliceList[product]) {
        console.log("Alice");
    }else {console.log("no one");}
}

buyMore("Rice");
buyMore("Potato");
buyMore("Ham");
buyMore("Apples");

/*Who buys more of different products?
Who buys more items? (more pieces)
The full output of your main method should be the following: */

if (Object.entries(AliceList).length > Object.entries(BobList).length) {
    console.log("Alice");
}else if (Object.entries(AliceList).length < Object.entries(BobList).length) {
    console.log("Bob");
}else console.log("no one");

function howManyPieces(somebodyList:{ [key: string]: number }) :number{
    let pieces: number = 0;
    let values: number[] = Object.values(somebodyList);

    for (let i = 0; i < values.length; i++) {
        pieces += values[i];               
    }
    return pieces;          
}

if (howManyPieces(AliceList) > howManyPieces(BobList)) {
    console.log("Alice");
}else if (howManyPieces(AliceList) < howManyPieces(BobList)) {
    console.log("Bob");  
}else {console.log("no one");}

/* Represent the following products with their prices:

Product	Price
Milk	1.07
Rice	1.59
Eggs	3.14
Cheese	12.60
Chicken Breasts	9.40
Apples	2.31
Tomato	2.58
Potato	1.75
Onion	1.10
Represent Bob's shopping list:

Product	Amount
Milk	3
Rice	2
Eggs	2
Cheese	1
Chicken Breasts	4
Apples	1
Tomato	2
Potato	1
Represent Alice's shopping list:

Product	Amount
Rice	1
Eggs	5
Chicken Breasts	2
Apples	1
Tomato	10
Create an application which prints out the answers to the following questions:

How much does Bob pay?
How much does Alice pay?
Who buys more Rice?
Who buys more Potato?
Who buys more Ham?
Who buys more Apples?
Who buys more of different products?
Who buys more items? (more pieces)
The full output of your main method should be the following:

72.09
64.2
Bob
Bob
no one
no one
Bob
Alice */