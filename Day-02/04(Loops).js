// for loop
for (let i =0; i<5; i++) {
    console.log("Iteration number:", i);
}

// while loop
let count = 0;
while (count < 5) {
    console.log("Count is:", count);
    count++;
}

// do...while loop
let num = 0;
do {
    console.log("Number is:", num);
    num++;
} while (num < 5);

//for in loop
let person = {name: "Alice", age: 25, city: "New York"};
for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}

// for of loop
let colors = ["Red", "Green", "Blue"];
for(let color of colors){
    console.log(color);
    

}


