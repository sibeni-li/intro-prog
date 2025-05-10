# Introduction to JavaScript

JavaScript is a high-level, interpreted programming language that enables interactive web pages and is an essential part of web applications. While HTML provides structure and CSS handles presentation, JavaScript adds behavior and functionality to websites.

## JavaScript Basics

### Adding JavaScript to HTML

There are three ways to include JavaScript in your HTML:

#### 1. Inline JavaScript
```html
<button onclick="alert('Hello, World!')">Click Me</button>
```

#### 2. Internal JavaScript
```html
<head>
    <script>
        function greet() {
            alert('Hello, World!');
        }
    </script>
</head>
<body>
    <button onclick="greet()">Click Me</button>
</body>
```

#### 3. External JavaScript (Recommended)
```html
<head>
    <script src="script.js"></script>
</head>
```

Where `script.js` might contain:
```javascript
function greet() {
    alert('Hello, World!');
}
```

**Best practice:** Place `<script>` tags just before the closing `</body>` tag to improve page loading performance.

### Variables and Data Types

JavaScript has several ways to declare variables:

```javascript
// Using var (older way, function-scoped)
var name = "John";

// Using let (block-scoped, can be reassigned)
let age = 30;

// Using const (block-scoped, cannot be reassigned)
const PI = 3.14159;
```

JavaScript has various data types:

```javascript
// Primitive types
let string = "Hello";           // String
let number = 42;                // Number
let decimal = 3.14;             // Number (no separate float type)
let boolean = true;             // Boolean (true or false)
let nothing = null;             // Null (explicit absence of value)
let undefined_var;              // Undefined (variable declared but not assigned)
let unique = Symbol("id");      // Symbol (unique identifier)
let bigInt = 9007199254740991n; // BigInt (for large integers)

// Object types
let array = [1, 2, 3, 4];       // Array
let object = {                  // Object
    name: "John",
    age: 30
};
let date = new Date();          // Date object
let regex = /pattern/;          // Regular Expression
```

### Operators

```javascript
// Arithmetic operators
let sum = 5 + 3;        // Addition
let difference = 10 - 5; // Subtraction
let product = 4 * 2;     // Multiplication
let quotient = 20 / 5;   // Division
let remainder = 10 % 3;  // Modulus (remainder)
let exponent = 2 ** 3;   // Exponentiation (2³ = 8)
let increment = 5;
increment++;            // Increment (now 6)
let decrement = 5;
decrement--;            // Decrement (now 4)

// Assignment operators
let x = 10;             // Assignment
x += 5;                 // Add and assign (x = x + 5)
x -= 3;                 // Subtract and assign
x *= 2;                 // Multiply and assign
x /= 4;                 // Divide and assign

// Comparison operators
let isEqual = 5 == "5";     // Equal (value only, returns true)
let isStrictEqual = 5 === "5"; // Strict equal (value and type, returns false)
let isNotEqual = 5 != "6";  // Not equal (value only)
let isStrictNotEqual = 5 !== "5"; // Strict not equal (value and type)
let isGreater = 10 > 5;     // Greater than
let isLess = 5 < 10;        // Less than
let isGreaterOrEqual = 10 >= 10; // Greater than or equal
let isLessOrEqual = 5 <= 5;  // Less than or equal

// Logical operators
let and = true && false;    // Logical AND (returns false)
let or = true || false;     // Logical OR (returns true)
let not = !true;            // Logical NOT (returns false)

// String operators
let greeting = "Hello" + " " + "World"; // Concatenation
```

### Control Flow

#### Conditional Statements

```javascript
// If statement
if (age >= 18) {
    console.log("You are an adult");
} else if (age >= 13) {
    console.log("You are a teenager");
} else {
    console.log("You are a child");
}

// Switch statement
let day = new Date().getDay();
switch (day) {
    case 0:
        console.log("Sunday");
        break;
    case 1:
        console.log("Monday");
        break;
    // ...other cases
    default:
        console.log("Unknown day");
}

// Ternary operator
let status = (age >= 18) ? "adult" : "minor";
```

#### Loops

```javascript
// For loop
for (let i = 0; i < 5; i++) {
    console.log(i); // Outputs 0, 1, 2, 3, 4
}

// While loop
let counter = 0;
while (counter < 5) {
    console.log(counter);
    counter++;
}

// Do-while loop (executes at least once)
let j = 0;
do {
    console.log(j);
    j++;
} while (j < 5);

// For...of loop (iterating over arrays)
const fruits = ["apple", "banana", "cherry"];
for (const fruit of fruits) {
    console.log(fruit);
}

// For...in loop (iterating over object properties)
const person = { name: "John", age: 30, job: "developer" };
for (const key in person) {
    console.log(`${key}: ${person[key]}`);
}
```

### Functions

```javascript
// Function declaration
function greet(name) {
    return `Hello, ${name}!`;
}

// Function expression
const sayHello = function(name) {
    return `Hello, ${name}!`;
};

// Arrow function
const welcome = (name) => `Welcome, ${name}!`;

// Default parameters
function greetUser(name = "Guest") {
    return `Hello, ${name}!`;
}

// Rest parameters
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

// Function with callback
function fetchData(callback) {
    // Simulating async operation
    setTimeout(() => {
        const data = { user: "John", id: 123 };
        callback(data);
    }, 1000);
}

fetchData(function(data) {
    console.log(data);
});
```

## Working with Data Structures

### Arrays

```javascript
// Creating arrays
const numbers = [1, 2, 3, 4, 5];
const mixed = [1, "two", true, { id: 4 }];
const empty = new Array(3); // Creates [empty × 3]

// Accessing elements
const first = numbers[0]; // 1
const last = numbers[numbers.length - 1]; // 5

// Common array methods
numbers.push(6);           // Add to end: [1,2,3,4,5,6]
numbers.pop();             // Remove from end: [1,2,3,4,5]
numbers.unshift(0);        // Add to beginning: [0,1,2,3,4,5]
numbers.shift();           // Remove from beginning: [1,2,3,4,5]
numbers.splice(2, 1, 'a'); // Remove 1 element at index 2 and insert 'a': [1,2,'a',4,5]
numbers.slice(1, 3);       // Extract elements from index 1 to 3 (exclusive): [2,'a']

// Array methods for processing
// map: creates a new array by performing a function on each array element
const doubled = numbers.map(num => num * 2); // [2,4,'a2',8,10]

// filter: creates a new array with elements that pass a test
const evenNumbers = numbers.filter(num => typeof num === 'number' && num % 2 === 0); // [2,4]

// reduce: reduces array to a single value (accumulator)
const sum = [1, 2, 3, 4].reduce((acc, curr) => acc + curr, 0); // 10

// forEach: calls a function for each element
numbers.forEach(num => console.log(num));

// find: returns the first element that passes a test
const found = numbers.find(num => num > 3); // 4

// some: tests if at least one element passes a test
const hasEven = numbers.some(num => typeof num === 'number' && num % 2 === 0); // true

// every: tests if all elements pass a test
const allEven = numbers.every(num => typeof num === 'number' && num % 2 === 0); // false

// sort: sorts the elements of an array
numbers.sort((a, b) => a - b); // Numeric sort
```

### Objects

```javascript
// Creating objects
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    hobbies: ["reading", "music", "hiking"],
    address: {
        street: "123 Main St",
        city: "Anytown",
        country: "USA"
    },
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};

// Accessing properties
console.log(person.firstName); // Dot notation
console.log(person["lastName"]); // Bracket notation

// Adding or modifying properties
person.email = "john@example.com";
person["phone"] = "555-1234";

// Deleting properties
delete person.age;

// Object methods
const keys = Object.keys(person); // Array of property names
const values = Object.values(person); // Array of property values
const entries = Object.entries(person); // Array of [key, value] pairs
const hasProp = person.hasOwnProperty("email"); // true

// Object destructuring
const { firstName, lastName, address: { city } } = person;
console.log(firstName); // "John"
console.log(city); // "Anytown"

// Spread operator
const personCopy = { ...person };

// Object.assign
const merged = Object.assign({}, person, { age: 31, job: "developer" });
```

## DOM Manipulation

The Document Object Model (DOM) is a programming interface for web documents. JavaScript can change all the HTML elements, attributes, and CSS styles in the page.

```javascript
// Selecting elements
const element = document.getElementById("myId");
const elements = document.getElementsByClassName("myClass");
const tagElements = document.getElementsByTagName("p");
const queryElement = document.querySelector(".myClass"); // First match
const queryElements = document.querySelectorAll("p.intro"); // All matches

// Changing HTML content
element.innerHTML = "<span>New HTML content</span>";
element.textContent = "New text content"; // Text only, safer
element.innerText = "New inner text"; // Text only, respects CSS

// Changing attributes
element.setAttribute("href", "https://example.com");
const href = element.getAttribute("href");
element.removeAttribute("disabled");

// Changing CSS
element.style.color = "blue";
element.style.backgroundColor = "yellow";
element.style.fontSize = "16px";

// Adding/removing CSS classes
element.classList.add("active");
element.classList.remove("hidden");
element.classList.toggle("highlight");
element.classList.contains("active"); // Check if class exists

// Creating new elements
const newDiv = document.createElement("div");
const textNode = document.createTextNode("Hello");
newDiv.appendChild(textNode);

// Adding elements to the DOM
document.body.appendChild(newDiv); // Add at end
element.prepend(newDiv); // Add as first child
element.before(newDiv); // Add before element
element.after(newDiv); // Add after element

// Removing elements
element.remove(); // Modern way
element.parentNode.removeChild(element); // Older compatibility

// Navigating the DOM
const parent = element.parentNode;
const children = element.children;
const firstChild = element.firstElementChild;
const nextSibling = element.nextElementSibling;
```

## Events

Events are actions or occurrences that happen in the browser.

```javascript
// Adding event listeners
const button = document.querySelector("button");

// Method 1: addEventListener
button.addEventListener("click", function(event) {
    console.log("Button clicked!");
    console.log(event); // Event object contains information about the event
});

// Method 2: onclick property
button.onclick = function() {
    console.log("Button clicked via property!");
};

// Removing event listeners
function handleClick() {
    console.log("Clicked!");
}
button.addEventListener("click", handleClick);
button.removeEventListener("click", handleClick);

// Common events
/* 
- Mouse events: click, dblclick, mousedown, mouseup, mouseover, mouseout, mousemove
- Keyboard events: keydown, keyup, keypress
- Form events: submit, change, focus, blur
- Window events: load, resize, scroll, unload
- Drag events: dragstart, drag, dragend, drop
*/

// Event propagation
/*
Events in DOM propagate in two phases:
1. Capturing phase (from window down to target)
2. Bubbling phase (from target up to window)
*/

// Default: bubbling phase (false)
element.addEventListener("click", handler);

// Capturing phase (true as third parameter)
element.addEventListener("click", handler, true);

// Stop propagation
element.addEventListener("click", function(event) {
    event.stopPropagation();
});

// Prevent default behavior
document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault(); // Stops form submission
});
```

## Asynchronous JavaScript

JavaScript is single-threaded, but can perform asynchronous operations via callbacks, promises, and async/await.

### Callbacks

```javascript
// Simple callback example
function fetchData(callback) {
    setTimeout(() => {
        callback("Data received");
    }, 1000);
}

fetchData(function(data) {
    console.log(data); // After 1 second: "Data received"
});

// Callback hell (nested callbacks)
fetchUserData(function(user) {
    fetchUserPosts(user.id, function(posts) {
        fetchPostComments(posts[0].id, function(comments) {
            // Deeply nested and hard to read
            console.log(comments);
        });
    });
});
```

### Promises

Promises represent a value that might be available now, later, or never.

```javascript
// Creating a promise
const promise = new Promise((resolve, reject) => {
    // Async operation
    const success = true;
    
    if (success) {
        resolve("Operation successful");
    } else {
        reject("Operation failed");
    }
});

// Using promises
promise
    .then(result => {
        console.log(result); // "Operation successful"
        return "Next step";
    })
    .then(newResult => {
        console.log(newResult); // "Next step"
    })
    .catch(error => {
        console.error(error);
    })
    .finally(() => {
        console.log("Promise settled (fulfilled or rejected)");
    });

// Promise methods
Promise.all([promise1, promise2]) // Resolves when all promises resolve, rejects if any reject
    .then(results => console.log(results)); // Array of all results

Promise.race([promise1, promise2]) // Resolves or rejects as soon as the first promise settles
    .then(result => console.log(result));

Promise.allSettled([promise1, promise2]) // Waits for all promises to settle
    .then(results => console.log(results)); // Array of objects with status and value/reason

Promise.any([promise1, promise2]) // Resolves with the first promise to fulfill
    .then(result => console.log(result));
```

### Fetch API

The Fetch API provides a modern interface for making HTTP requests.

```javascript
// Basic GET request
fetch('https://api.example.com/data')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json(); // Parse JSON response
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('Fetch error:', error);
    });

// POST request with options
fetch('https://api.example.com/posts', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer token123'
    },
    body: JSON.stringify({
        title: 'New Post',
        content: 'This is a new post.'
    })
})
    .then(response => response.json())
    .then(data => console.log(data));
```

### Async/Await

Async/await is syntactic sugar over promises, making asynchronous code look more like synchronous code.

```javascript
// Async function declaration
async function fetchUserData() {
    try {
        // await pauses execution until the promise resolves
        const response = await fetch('https://api.example.com/user');
        
        if (!response.ok) {
            throw new Error('Failed to fetch user');
        }
        
        const userData = await response.json();
        return userData;
    } catch (error) {
        console.error('Error:', error);
        throw error; // Re-throw to propagate
    }
}

// Using an async function
fetchUserData()
    .then(user => console.log(user))
    .catch(error => console.error(error));

// Async function with multiple awaits (no callback hell)
async function loadUserDetails() {
    try {
        const user = await fetchUserData();
        const posts = await fetchUserPosts(user.id);
        const comments = await fetchPostComments(posts[0].id);
        
        console.log(user, posts, comments);
    } catch (error) {
        console.error('Error in loadUserDetails:', error);
    }
}
```

## Error Handling

```javascript
// Try-catch statement
try {
    // Code that might throw an error
    const result = riskyOperation();
    console.log(result);
} catch (error) {
    // Handle the error
    console.error('An error occurred:', error.message);
} finally {
    // Code that runs regardless of whether an error occurred
    console.log('Cleanup operations');
}

// Custom errors
class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = 'ValidationError';
    }
}

// Throwing errors
function divide(a, b) {
    if (b === 0) {
        throw new Error('Division by zero');
    }
    return a / b;
}

// Error propagation
function processData(data) {
    try {
        const result = processStep1(data);
        return processStep2(result);
    } catch (error) {
        console.error('Processing error:', error);
        throw error; // Re-throw for caller to handle
    }
}
```

## ES6+ Features

JavaScript has evolved with new features in recent versions. ES6 (ECMAScript 2015) was a major update that introduced many of these features, with additional ones added in yearly releases since then:

### Template Literals
```javascript
const name = "John";
const greeting = `Hello, ${name}! Today is ${new Date().toLocaleDateString()}.`;
```

### Destructuring
```javascript
// Array destructuring
const [first, second, ...rest] = [1, 2, 3, 4, 5];

// Object destructuring
const { name, age, job = "Developer" } = person;
```

### Spread/Rest Operators
```javascript
// Spread (expanding)
const newArray = [...oldArray, newItem];
const newObject = { ...oldObject, newProp: value };

// Rest (collecting)
function logAll(first, ...others) {
    console.log(first, others);
}
```

### Arrow Functions
```javascript
const add = (a, b) => a + b;
const greet = name => `Hello, ${name}`;
const createObject = () => ({ key: "value" });
```

### Classes
```javascript
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    greet() {
        return `Hello, I'm ${this.name}`;
    }
    
    static createAnonymous() {
        return new Person("Anonymous", 0);
    }
}

class Employee extends Person {
    constructor(name, age, job) {
        super(name, age);
        this.job = job;
    }
    
    work() {
        return `${this.name} is working as a ${this.job}`;
    }
}
```

### Modules
```javascript
// Exporting (file: math.js)
export function add(a, b) {
    return a + b;
}
export const PI = 3.14159;
export default class Calculator { /* ... */ }

// Importing (another file)
import Calculator, { add, PI as MathPI } from './math.js';
```

### Map and Set
```javascript
// Map: key-value pairs (any type of keys)
const userMap = new Map();
userMap.set('user1', { name: 'John' });
userMap.set(42, 'number key');
userMap.get('user1'); // { name: 'John' }

// Set: collection of unique values
const uniqueNumbers = new Set([1, 2, 3, 2, 1]);
console.log([...uniqueNumbers]); // [1, 2, 3]
```

### Optional Chaining
```javascript
// Instead of: user && user.address && user.address.city
const city = user?.address?.city; // Undefined if any part is null/undefined
```

### Nullish Coalescing
```javascript
// Use fallback only if value is null or undefined
const username = user.name ?? 'Anonymous'; // '' is a valid name
```

## JavaScript Best Practices

1. **Use strict mode** to catch common coding mistakes
   ```javascript
   'use strict';
   ```

2. **Declare variables properly** - prefer `const` when possible, then `let` if needed

3. **Use meaningful variable and function names** that clearly explain their purpose

4. **Write modular code** - small, focused functions that do one thing well

5. **Comment your code** where necessary, but strive for self-documenting code

6. **Handle errors gracefully** with try-catch blocks

7. **Avoid global variables** to prevent naming conflicts

8. **Use modern JavaScript features** like destructuring, arrow functions, and template literals

9. **Follow a style guide** like Airbnb or Google's JavaScript style guide

10. **Use linting tools** like ESLint to catch errors and enforce coding standards

11. **Test your code** with frameworks like Jest or Mocha

12. **Optimize for performance** by avoiding unnecessary DOM manipulation and using efficient algorithms

## Debugging JavaScript

### Console Methods
```javascript
console.log("Basic logging");
console.error("Error message");
console.warn("Warning message");
console.info("Informational message");
console.table([{ name: "John", age: 30 }, { name: "Jane", age: 25 }]);
console.time("Timer");
// Code to measure
console.timeEnd("Timer");
console.group("Grouped messages");
console.log("Message in group");
console.groupEnd();
```

### Breakpoints
- Use the `debugger` statement to set a breakpoint in code
- Browser DevTools allow setting breakpoints visually

### Browser DevTools
- Sources panel for debugging scripts
- Network panel for monitoring requests
- Performance panel for optimizing code
- Memory panel for finding memory leaks

## Popular JavaScript Libraries and Frameworks

### DOM Manipulation
- **jQuery**: Simplified DOM manipulation (less needed with modern JS)

### Front-end Frameworks
- **React**: Component-based library for building user interfaces
- **Vue.js**: Progressive framework for building UIs
- **Angular**: Comprehensive framework for web applications
- **Svelte**: Compiler that generates minimal JavaScript

### State Management
- **Redux**: Predictable state container for JavaScript apps
- **MobX**: Simple, scalable state management
- **Zustand**: Lightweight state management with hooks

### Animation
- **GSAP**: Professional-grade animation for the web
- **Three.js**: 3D library that uses WebGL

### Utility Libraries
- **Lodash**: Utility functions for common programming tasks
- **Moment.js/date-fns**: Date manipulation and formatting
- **Axios**: Promise-based HTTP client

### Full-stack Frameworks
- **Next.js**: React framework with SSR and static site generation
- **Nuxt.js**: Vue framework with similar features to Next.js
- **SvelteKit**: Application framework for Svelte

## Next Steps in JavaScript Learning

1. **Master the fundamentals** - variables, functions, objects, arrays, and control flow
2. **Understand async JavaScript** deeply - callbacks, promises, and async/await
3. **Learn DOM manipulation** for interactive web pages
4. **Explore modern JavaScript features** in ES6+
5. **Study a popular framework** like React, Vue, or Angular
6. **Learn state management** patterns and libraries
7. **Explore back-end JavaScript** with Node.js
8. **Study testing frameworks** like Jest or Mocha
9. **Learn TypeScript** for type safety
10. **Practice building projects** to apply your knowledge

JavaScript's versatility makes it valuable in virtually all web development contexts, from front-end to back-end, mobile apps to desktop applications, and even game development.

By mastering JavaScript along with HTML and CSS, you'll have the essential skills to build modern web applications.
