# ModuleLoader

ModuleLoader is a JavaScript library that simplifies dynamic module importing in both Node.js and browser environments. With ModuleLoader, you can asynchronously load modules and conveniently access them in your code, making it easier to organize and modularize your JavaScript applications.

## Installation

You can install ModuleLoader via npm:

```bash
npm install moduleloader
```

## Usage

To use ModuleLoader in your project, you can import the `from` function from the library:

```javascript
import { from } from "moduleloader";

// Example 1: Import the 'readFileSync' function from the 'fs' module and assign it to a variable
const readFileSync = await from("fs").import("readFileSync");
console.log(readFileSync);
//Output: [Function: readFileSync]

// Example 2: Import the 'writeFileSync' function from the 'fs' module without assigning it to a variable
await from("fs").import("writeFileSync");
console.log(writeFileSync);
//Output: [Function: writeFileSync]

// Example 3: Import the 'mkdirSync' function from the 'fs' module and assign it to a different variable using an alias
await from("fs").as("mkdirSyncAlias").import("mkdirSync");
console.log(mkdirSyncAlias);
//Output: [Function: mkdirSync]
```

## License

This project is licensed under the GPL-3.0 License. See the [LICENSE.txt](LICENSE.txt) file for details.

## Author

ModuleLoader is developed and maintained by [Dux Tecnologia](https://github.com/duxtec).
