/*
** VARIABLES **
Use `let` for reassignable values, `const` for constants.
Avoid `var` (legacy behavior with function scope).
*/
const appName = 'MyApp'; // Immutable
let version = 1.0; // Mutable
// ❗ `var` is outdated and has unexpected scoping:
var legacyVar = 'Avoid in modern code';

/*
** DATA TYPES **
Primitive types include strings, numbers, booleans, null, undefined.
*/
const greeting = 'Hello'; // String
const year = 2025; // Number
const isReady = true; // Boolean
const emptyValue = null; // Explicit empty value
let undefinedVar; // undefined

/*
** OPERATORS **
Arithmetic: + - * / %
Comparison: === (strict equality), !==, >, <
Logical: && || !
*/
// Arithmetic
const total = 5 + 3 * 2; // 11 (operator precedence)
// Strict equality
console.log(5 === '5'); // false (type matters)
// Logical OR
const message = greeting || 'Default greeting';

/*
** CONDITIONALS **
Execute code based on conditions with if/else and switch.
*/
// if/else
const temperature = 25;
if (temperature > 30) {
  console.log('Hot day!');
} else {
  console.log('Mild day');
}
// switch
const fruit = 'apple';
switch (fruit) {
  case 'apple':
    console.log('Red fruit');
    break;
  default:
    console.log('Other fruit');
}

/*
** LOOPS **
Iterate with for, while, and array methods.
*/
// for loop
for (let i = 0; i < 3; i++) {
  console.log(`For iteration ${i}`);
}
// while loop
let counter = 0;
while (counter < 3) {
  console.log(`While iteration ${counter}`);
  counter++;
}
// Array forEach
[10, 20, 30].forEach((num, index) => {
  console.log(`Item ${index}: ${num}`);
});

/*
** FUNCTIONS **
Three syntaxes: declaration, expression, arrow.
*/
// Function declaration
function square(x) {
  return x * x;
}
// Function expression
const cube = function(x) {
  return x ** 3;
};
// Arrow function
const power = (base, exponent) => base ** exponent;
// Example usage
console.log(power(2, 3)); // 8

/*
** ASYNC FUNCTIONS **
Handle asynchronous operations with promises and async/await.
*/
async function simulateAPI() {
  return new Promise(resolve => setTimeout(resolve, 1000, 'Data loaded'));
}
// Using async/await with error handling
async function fetchData() {
  try {
    const result = await simulateAPI();
    console.log(result); // Logs after 1s
  } catch (error) {
    console.error('Fetch failed:', error);
  }
}
fetchData();

/*
** ARRAYS **
Use methods like push(), map(), filter() for transformations.
*/
const numbers = [1, 2, 3, 4];
numbers.push(5); // [1,2,3,4,5]
const doubled = numbers.map(n => n * 2); // [2,4,6,8,10]
const evens = numbers.filter(n => n % 2 === 0); // [2,4]

/*
** OBJECTS **
Store key-value pairs with methods.
*/
const car = {
  brand: 'Tesla',
  model: 'Model S',
  startEngine() {
    return `${this.brand} engine started`;
  }
};
console.log(car.startEngine()); // Tesla engine started

/*
** NODE.JS: MODULES **
Import modules using require() syntax.
*/
// Full module import
const fs = require('fs');
// Destructuring import
const { basename } = require('path');

/*
** NODE.JS: FILE SYSTEM **
Read/write files with fs.promises for async operations.
*/
async function fileDemo() {
  try {
    // Write to file
    await fs.promises.writeFile('test.txt', 'Hello Node.js!');
    // Read from file
    const data = await fs.promises.readFile('test.txt', 'utf8');
    console.log('File content:', data);
  } catch (err) {
    console.error('File error:', err.message);
  }
}
// Uncomment to run: fileDemo();

/*
** NODE.JS: PATH MODULE **
Handle file paths safely across OS.
*/
const filePath = '/home/user/docs/report.txt';
console.log('Filename:', basename(filePath)); // report.txt

/*
** BROWSER: DOM MANIPULATION **
Modify HTML elements using document API.
*/
// Run in browser console:
// document.body.style.backgroundColor = '#f0f0f0';
// const heading = document.createElement('h1');
// heading.textContent = 'Hello from JS!';
// document.body.appendChild(heading);

/*
** EVENTS **
Handle interactions in browser and Node.js.
*/
// Browser event example (run in console):
// document.addEventListener('click', () => console.log('Clicked!'));

// Node.js EventEmitter example
const EventEmitter = require('events');
const emitter = new EventEmitter();
emitter.on('greet', name => console.log(`Hello ${name}!`));
emitter.emit('greet', 'Alice');

/*
** ES6+ FEATURES **
Modern syntax for cleaner code.
*/
// Template literals
const html = `<div>${greeting} ${appName}</div>`;
// Object destructuring
const { brand, model } = car;
console.log(`Driving ${brand} ${model}`);

/*
** HOW TO USE THIS TUTORIAL **
1. BROWSER CODE:
   - Open Chrome DevTools (F12)
   - Paste code snippets into the Console
   - DOM examples need HTML elements to work

2. NODE.JS CODE:
   - Save this file as tutorial.js
   - Run `node tutorial.js`
   - Create test.txt before file operations

3. EXPERIMENT:
   - Change values in examples
   - Add console.log() statements
   - Break things intentionally to see errors
*/