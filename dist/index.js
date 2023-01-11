"use strict";
// BASIC TYPES 
let id = 5;
let age;
let company = "Box Shadow";
let isPublished = true;
let x = "hello";
let numberArray = [1, 2.3, 4, 5]; /* ARRAY CONTAINING ONLY NUMBERS*/
let anyArray = [1, true, 'hello'];
// TUPLE - SPECIFY TYPES WITHIN ARRAYS
let person = [1, 'brad', true];
// TUPLE ARRAY (ARRAY OF TUPLES)
let skillsArray;
skillsArray = [
    [1, 'html 5', true],
    [2, 'css 3', true],
    [3, 'javascript', true]
];
// UNIONS - ENABLE VARIABLES TO HOLD MORE THAN ONE TYPE
let language;
language = 'css';
language = 3;
// ENUM - ENUMERATED TYPE
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 2] = "Up";
    Direction1[Direction1["Down"] = 3] = "Down";
    Direction1[Direction1["Right"] = 4] = "Right";
    Direction1[Direction1["Left"] = 5] = "Left";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.Down);
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Right"] = "Right";
    Direction2["Left"] = "Left";
})(Direction2 || (Direction2 = {}));
console.log(Direction2.Down);
const user = {
    id: 1,
    name: 'Tumi',
    developer: true
};
// TYPE ASSERTION
let cid = 1;
// let customerID = <number>cid
let customerID = cid;
cid = 'a';
customerID = 3;
//# sourceMappingURL=index.js.map