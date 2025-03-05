/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/


let result = "5" - 2;  // This is Correct as 5-2 is 3. THis is an example of implicit conversion
console.log("The result is: " + result);

let isValid = Boolean(false); // I fixed this so it does not run the statement as it is False.
if (isValid) {
    console.log("This is valid!");
}

let age = "25";
let realAge= Number(age);  // I converted the string to a number so it does the proper calcualtion instead of a string concatenation
let totalAge = realAge + 5;
console.log("Total Age: " + totalAge);


console.log("5"*"10"); // THis is implicit as the computer automatically converts these strings to numbers

let isLaughing=true;
console.log(isLaughing.toString()); //I explicity made this boolean convert to a string.

let num=NaN;
console.log(Boolean(num)); // Using a edge case, the variable humber is false becuase it is not a number
