// Arrays in JavaScript - Beginner Examples

// 1. Creating an array
let fruits = ["Apple", "Banana", "Cherry"];
console.log("Fruits array:", fruits);

// 2. Accessing elements by index (starts from 0)
console.log("First fruit:", fruits[0]);
console.log("Second fruit:", fruits[1]);
console.log("Third fruit:", fruits[2]);

// 3. Array length
console.log("Number of fruits:", fruits.length);

// 4. Adding elements to the end (push)
fruits.push("Orange");
console.log("After adding Orange:", fruits);

// 5. Removing the last element (pop)
let removedFruit = fruits.pop();
console.log("Removed fruit:", removedFruit);
console.log("Array after pop:", fruits);

// 6. Adding elements to the beginning (unshift)
fruits.unshift("Grape");
console.log("After adding Grape at start:", fruits);

// 7. Removing the first element (shift)
let firstFruit = fruits.shift();
console.log("Removed first fruit:", firstFruit);
console.log("Array after shift:", fruits);

// 8. Looping through an array
console.log("Looping through fruits:");
for (let i = 0; i < fruits.length; i++) {
    console.log(`Fruit ${i + 1}: ${fruits[i]}`);
}

// 9. Using forEach (another way to loop)
console.log("Using forEach:");
fruits.forEach(function(fruit, index) {
    console.log(`Fruit ${index + 1}: ${fruit}`);
});

// 10. Checking if an element exists (includes)
console.log("Does array include 'Banana'?", fruits.includes("Banana"));
console.log("Does array include 'Mango'?", fruits.includes("Mango"));

// 11. Finding index of an element
console.log("Index of 'Cherry':", fruits.indexOf("Cherry"));
console.log("Index of 'Mango':", fruits.indexOf("Mango")); // -1 if not found

// 12. Slicing an array (creating a subarray)
let slicedFruits = fruits.slice(1, 3);
console.log("Sliced fruits (index 1 to 3):", slicedFruits);

// 13. Joining array elements into a string
let fruitString = fruits.join(", ");
console.log("Fruits as string:", fruitString);
