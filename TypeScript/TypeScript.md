# TypeScript

* **Strongly typed programming language**
* Created and maintained by Microsoft
* **Superset of** JavaScript
* TypeScript **compiles (transpiles) into JavaScript**
* Supported by major frameworks like Angular, React, and Vue.js
* Provides **type safety and better error detection during development**
* Improves **code readability, maintainability, and scalability**
* Supports **modern ES6+ features** before they are fully supported by browsers
* Works well with **object-oriented programming concepts** like classes, interfaces, and inheritance

### Additional TypeScript Features

* **Interfaces** – define structure of an object
* **Classes** – used to create objects with properties and methods
* **Generics** – allow reusable components with different types
* **Modules** – help organize code into separate files
* **Type inference** – TypeScript automatically detects types in many cases

Example:

```ts
interface Person {
  name: string;
  age: number;
}
```

---

# Single Page Application (SPA)

A **Single Page Application** loads a single HTML page and dynamically updates content without refreshing the page.

### Features

* Faster navigation
* Better user experience
* Dynamic content updates
* Reduced server requests

### Frameworks used for SPA

* Angular
* React
* Vue.js

### Advantages

* Faster performance
* Smooth user interaction
* Less server load
* Reusable components

### Disadvantages

* Initial load time can be higher
* SEO can be harder without **Server Side Rendering (SSR)**

Angular provides:

* **Routing module** for navigation
* **Component-based architecture**
* **Built-in services and dependency injection**
* **SSR support using Angular Universal**

---

# Data Types

### String

```ts
let name: string = "Urmi";
```

### Number

```ts
let age: number = 25;
```

### Boolean

```ts
let isValid: boolean = false;
```

### Array

```ts
let arr: string[] = ["apple", "banana", "cherry"];
let numList: Array<number> = [1,2,3];
```

### Enum

Used to define a set of named constants.

```ts
enum Color { Red, Green, Blue }
let c: Color = Color.Green;
```

### Tuple

Stores multiple types in a fixed order.

```ts
let tuple: [number, string] = [1, "Angular"];
```

### Any

Disables type checking.

```ts
let department: any = "IT";
```

### Void

Function does not return a value.

```ts
function logMessage(message: string): void {
  console.log(message);
}
```

### Never

Function that **never returns**.

```ts
function throwError(msg: string): never {
  throw new Error(msg);
}
```

---

# Functions (Array Methods)

### filter()

Returns elements that match a condition.

```ts
let numbers = [1,2,3,4];
let result = numbers.filter(n => n > 2);
```

### find()

Returns the **first element** that matches the condition.

```ts
let result = numbers.find(n => n > 2);
```

### reduce()

Reduces an array into a single value.

```ts
let sum = numbers.reduce((total, n) => total + n, 0);
```

---

# Additional Useful Array Methods

### map()

Transforms each element in an array.

```ts
let doubled = numbers.map(n => n * 2);
```

### forEach()

Executes a function for each element.

```ts
numbers.forEach(n => console.log(n));
```

### some()

Checks if **at least one element** satisfies a condition.

```ts
numbers.some(n => n > 3);
```

### every()

Checks if **all elements** satisfy a condition.

```ts
numbers.every(n => n > 0);
```
