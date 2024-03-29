import { from } from './src/module-import.js';

// Example 1: Import the 'readFileSync' function from the 'fs' module and assign it to a variable
const readFileSync = await from('fs').import('readFileSync');
console.log(readFileSync); 
//Output: [Function: readFileSync]

// Example 2: Import the 'writeFileSync' function from the 'fs' module without assigning it to a variable
await from('fs').import('writeFileSync');
console.log(writeFileSync); 
//Output: [Function: writeFileSync]

// Example 3: Import the 'mkdirSync' function from the 'fs' module and assign it to a different variable using an alias
await from('fs').as('mkdirSyncAlias').import('mkdirSync');
console.log(mkdirSyncAlias);
//Output: [Function: mkdirSync]
