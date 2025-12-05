// var function scope 
var x = 10;
console.log("Initial x:", x); // 10
x = 20;
console.log("Reassigned x:", x); // 20
// let block scope {.....}
let y = 15;
console.log("Initial y:", y); // 15
y = 25;
console.log("Reassigned y:", y); // 25
// const block scope {..... cannot be reassigned }
const z = 30;
console.log("Initial z:", z); // 30
// z = 40; // This will throw an error: TypeError: Assignment to constant variable. Uncommenting this line will demonstrate that const variables cannot be reassigned.      
