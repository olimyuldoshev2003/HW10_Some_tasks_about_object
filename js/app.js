//Task 1

// function getVoteCount(obj) {
//     return obj.upvotes - obj.downvotes
// }

// console.log(getVoteCount({ upvotes: 13, downvotes: 0 }));
// console.log(getVoteCount({ upvotes: 2, downvotes: 33 }));
// console.log(getVoteCount({ upvotes: 132, downvotes: 132 }));

//Task 2

// function volumeOfBox(obj) {
//     return obj.width + obj.length + obj.height
// }

// console.log(volumeOfBox({ width: 2, length: 5, height: 1 }));
// console.log(volumeOfBox({ width: 4, length: 2, height: 2 }));
// console.log(volumeOfBox({ width: 2, length: 3, height: 5 }));

//Task 3

// function fiftyThirtyTwenty(num) {
//     let obj = {
//         "Needs": Math.floor(num*50/100),
//         "Wants": Math.floor(num*30/100),
//         "Savings": Math.floor(num*20/100)
//     };

//     return obj

// }

// console.log(fiftyThirtyTwenty(10000));
// console.log(fiftyThirtyTwenty(50000));
// console.log(fiftyThirtyTwenty(13450));

//Task 4

// function relationToLuke(str) {
//     let obj = {
//         "Darth Vade":"father",
//         "Leia":"sister",
//         "Han":"brother-in-law",
//         "R2D2":"droid"
//     }

//     return `Luke, I am your ${obj[str]}`;
// }

// console.log(relationToLuke("Darth Vader"));
// console.log(relationToLuke("Leia"));
// console.log(relationToLuke("Han"));

//Task 5

// function cityFacts(obj) {
//     return `${obj.name} has a population of ${obj.population} and it's situated in ${obj.continent}`
// }

// console.log(
//   cityFacts({ name: "Paris", population: "2,140,526", continent: "Europe" })
// );

// console.log(cityFacts(
// { name: "Tokyo", population: "13,929,286", continent: "Asia" }
// ));

//Task 6

// function totalAmountAdjectives(obj) {
//     return Object.values(obj).length;
// }

// console.log(totalAmountAdjectives({ a: "moron" }));
// console.log(totalAmountAdjectives({ a: "idiot", b: "idiot", c: "idiot" }));
// console.log(
//   totalAmountAdjectives({ a: "moron", b: "scumbag", c: "moron", d: "dirtbag" })
// );

//Task 7

// function nSidedShape(num) {
//     let obj = {
//         "1":"circle",
//         "2":"semi-circle",
//         "3":"triangle",
//         "4":"square",
//         "5": "pentagon",
//         "6" : 'hexagon',
//         "7":'heptagon',
//         "8":"octagon",
//         "9":"nonagon",
//         "10":"decagon"
//     }

//     return obj[num]
// }

// console.log(nSidedShape(3));
// console.log(nSidedShape(1));
// console.log(nSidedShape(9));

//Task 8

// function isInRange(diapazonNum, obj){
//     return diapazonNum >= obj.min && diapazonNum <= obj.max;
// }

// console.log(isInRange(4, { min: 0, max: 5 }));
// console.log(isInRange(4, { min: 4, max: 5 }));
// console.log(isInRange(4, { min: 6, max: 10 }));

//Task 9

// function concatObj(obj) {
//     let newObj = Object.values(obj);
//     return newObj.join(" ").concat(" ", newObj[1]);
// }

// console.log(concatObj({ 1: "Mommy", 2: "please", 3: "help" }));
// console.log(concatObj({ 1: "Me", 2: "innocent", 3: "is" }));
// console.log(concatObj({ 1: "Must", 2: "lawyer", 3: "call" }));

//Task 10

// function hasKey(obj, findKey) {
//     return Object.keys(obj).join().includes(findKey);
// }

// console.log(hasKey({ a: 44, b: 45, c: 46 }, "d"));
// console.log(hasKey({ craves: true, midnight: true, snack: true }, "morning"));
// console.log(hasKey({ pot: 1, tot: 2, not: 3 }, "not"));

//Task 11

// function inkLevels(obj) {
//     return Object.values(obj).sort((a, b)=> a - b)[0]
// }

// console.log(inkLevels({"cyan": 23,"magenta": 12,"yellow": 10}));
// console.log(inkLevels({ cyan: 432, magenta: 543, yellow: 777 }));

//Task 12.1

// function isEmpty(obj) {
//     return Object.entries(obj).length>0 ? true: false
// }

// console.log(isEmpty({}));
// console.log(isEmpty({ a: 1 }));

//Task 12.2

// function calculateDifference(obj, numberForMinus) {
//     return Object.values(obj).reduce((acc, item)=>acc+item, 0)- numberForMinus
// }

// console.log(calculateDifference({ "baseball bat": 20 }, 5));
// console.log(calculateDifference({ skate: 10, painting: 20 }, 19));
// console.log(calculateDifference({ skate: 200, painting: 200, shoes: 1 }, 400));

//Task 13

// function maximumScore(arr) {
//     return arr.map((item)=> {
//        return item.score;
//     }).reduce((acc, item)=>acc+item, 0)
// }

// console.log(
//   maximumScore([
//     { tile: "N", score: 1 },
//     { tile: "K", score: 5 },
//     { tile: "Z", score: 10 },
//     { tile: "X", score: 8 },
//     { tile: "D", score: 2 },
//     { tile: "A", score: 1 },
//     { tile: "E", score: 1 },
//   ])
// );

// console.log(
//   maximumScore([
//     { tile: "B", score: 2 },
//     { tile: "V", score: 4 },
//     { tile: "F", score: 4 },
//     { tile: "U", score: 1 },
//     { tile: "D", score: 2 },
//     { tile: "O", score: 1 },
//     { tile: "U", score: 1 },
//   ])
// );

//Task 14

// function addName(obj, key, values) {
//      obj[key] = values;
//      return obj;
// }

// console.log(addName({}, "Brutus", 300));
// console.log(addName({ piano: 500 }, "Brutus", 400));
// console.log(addName({ piano: 500, stereo: 300 }, "Caligula", 440));

//Task 15

// function generation(numOfGeneration, gender) {
//     let male = {
//         "-3":"great grandfather",
//         "-2":"grandfather",
//         "-1":'father',
//         "0":'me!',
//         "1":"son",
//         "2":"grandson",
//         "3":"great-grandson"
//     }

// let female = {
//   "-3": "great grandmother",
//   "-2": "grandmother",
//   "-1": "mother",
//   "0": "me!",
//   "1": "daughter",
//   "2": "granddaughter",
//   "3": "great-granddaughter",
// };

// return gender === "f" ? female[numOfGeneration] : gender === "m" ? male[numOfGeneration]: "Please choose the gender and number of generation";
// }

// console.log(generation(2, "f"));
// console.log(generation(-3, "m"));
// console.log(generation(1, "f"));

//Task 16

// function toArray(obj) {
//     return Object.entries(obj);
// }

// console.log(toArray({ a: 1, b: 2 }));
// console.log(toArray({ shrimp: 15, tots: 12 }));
// console.log(toArray({}));

//Task 17

// function keysAndValues(obj) {
//     let keys = Object.keys(obj);
//     let values = Object.values(obj);
//     let arr = [keys, values];
//     return arr
// }

// console.log(keysAndValues({ a: 1, b: 2, c: 3 }));
// console.log(keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" }));
// console.log(keysAndValues({ key1: true, key2: false, key3: undefined }));

//Task 18

// function getBudgets(obj) {
//     return obj.map((item)=> {
//         return item.budget
//     }).reduce((acc, item)=> {
//         return acc+item;
//     }, 0)
// }

// console.log(getBudgets([
// { name: "John", age: 21, budget: 29000 },
// { name: "Steve", age: 32, budget: 32000 },
// { name: "Martin", age: 16, budget: 1600 }
// ]
// ));

// console.log(
//   getBudgets([
//     { name: "John", age: 21, budget: 23000 },
//     { name: "Steve", age: 32, budget: 40000 },
//     { name: "Martin", age: 16, budget: 2700 },
//   ])
// );

//Task 19

// function freeShipping(obj) {
//     let toArray = Object.values(obj).reduce((acc, item)=> acc + item, 0)
//     return toArray > 50 ? true : false;
// }

// console.log(freeShipping({ Shampoo: 5.99, "Rubber Ducks": 15.99 }));
// console.log(freeShipping({ "Flatscreen TV": 399.99 }));
// console.log(
//   freeShipping({ Monopoly: 11.99, "Secret Hitler": 35.99, Bananagrams: 13.99 })
// );

//Task 20

// function mapping(arr) {
//   let obj = {};
//   arr.map((item) => {
//     obj[item] = item.toUpperCase();
//   });
//   return obj;
// }

// console.log(mapping(["p", "s"]));
// console.log(mapping(["a", "b", "c"]));
// console.log(mapping(["a", "v", "y", "z"]));

//Task 21 I've to check it

// function afterNYears(obj, numPlus) {
//     return Object.values(obj).map((e)=> {
//         return e+ numPlus;
//     })
// }

// console.log(
//   afterNYears({ Joel: 32, Fred: 44, Reginald: 65, Susan: 33, Julian: 13 }, 1)
// );

// console.log(
//   afterNYears({ Baby: 2, Child: 8, Teenager: 15, Adult: 25, Elderly: 71 }, 19)
// );

// console.log(afterNYears({ Genie: 1000, Joe: 40 }, 5));

//Task 22

//Task 23
// function removeEntry(obj, n) {
//   delete obj[n];
//   return obj;
// }
// console.log(removeEntry({ piano: 300, tv: 100, skate: 50 }, "skate"));
// console.log(removeEntry({ mirror: 500, painting: 1 }, "mirror"));

//Task 24
// function mostExpensiveItem(obj) {
//   return Object.entries(obj).sort((a, b) => {
//     return b[1] - a[1];
//   })[0][0];
// }
// console.log(mostExpensiveItem({ piano: 2000 }));
// console.log(mostExpensiveItem({ tv: 30, skate: 20 }));
// console.log(mostExpensiveItem({ tv: 30, skate: 20, stereo: 50 }));

//