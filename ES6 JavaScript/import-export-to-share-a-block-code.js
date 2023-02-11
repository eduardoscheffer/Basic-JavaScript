// USE EXPORT TO SHARE A CODE BLOCK
// Imagine a file called math_functions.js that contains several functions related to mathematical operations. One of them is stored in a variable, add, that takes in two numbers and returns their sum. You want to use this function in several different JavaScript files. In order to share it with these other files, you first need to export it.

const add = (x, y) => {
    return x + y;
  }
  
  export { add };
  
  // When you export a variable or function, you can import it in another file and use it without having to rewrite the code. You can export multiple things by repeating the first example for each thing you want to export, or by placing them all in the export statement of the second example, like this:
  export { add, subtract };
  
  
  
  // REUSE JAVASCRIPT CODE USING IMPORT:
  // import allows you to choose which parts of a file or module to load. In the previous lesson, the examples exported add from the math_functions.js file. Here's how you can import it to use in another file:
  import { add, substract } from './math_functions.js';
  
  // USE * TO IMPORT EVERYTHING FROM A FILE
  // Suppose you have a file and you wish to import all of its contents into the current file. This can be done with the import * as syntax. Here's an example where the contents of a file named math_functions.js are imported into a file in the same directory:
  import * as myMathModule from "./math_functions.js";
  
  // The above import statement will create an object called myMathModule. This is just a variable name, you can name it anything. The object will contain all of the exports from math_functions.js in it, so you can access the functions like you would any other object property. Here's how you can use the add and subtract functions that were imported:
  myMathModule.add(2,3);
  myMathModule.subtract(5,3);