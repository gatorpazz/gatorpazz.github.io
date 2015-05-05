#Javascript  

Basic Literal Types  

Javascript has a number of value types that have unique properties: 

1. Null: basically a null value has no value at all, you can think of this in the terms of null and void, which means something is insignificant, having no value.  
  * Example: A variable (basically a place we store a value) initialized and declared by typing var a = null; null basically represents no value.

2. Boolean: a boolean value is easy, there are only two possible choices for what can be a boolean value and that is true and false. This is used in javascript (and other programming languages) to branch directions code can take. This type of value can be declared directly by typing 'true' or 'false', or through the use of comparison operators such as < or >.  
  * Examples: var a = true; a is a boolean value, var a = 5 < 3; evaluating that 5 is not less than 3 makes a evaluate to 'false'  
  
3. Number: this one is easy, a number is a number like 4 or 8  
  * Examples: I'm not going to give you examples of numbers  
  
4. String: a string value basically refers to sequences of characters, strings can be numbers or letters and are made by putting " " around characters.  
  * Examples: "A" "352" "Michael Pascuzzi" are all strings, in this case "352" is not a number literal type  
  
Special Constants  

Javascript has some weird special constants that pop up from time to time:  

1. Infinity: Infinity is basically a way for javascript to say the number you have is too big. Infinity is displayed when a number exceeds the upper limit of the floating point numbers, which is 1.797693134862315E+308. Infinity can be negative or positive.  

2. NaN: NaN stands for not a number. This will pop up generally when you try some weird or impossible math.  
  * Examples: dividing any number by zero will evaluate to NaN because it's impossible. Taking a square root of a negative number will evaluate to NaN. Trying to do math with number values and string values will give you NaN unless you're using a + sign, in which case it will concatenate (glue together) the values into a single string or if your strings are made up of only numbers, in which case javascript will convert it into a number value and do normal math with any other operator besides +.  
  
3. undefined: undefined is like the null value except no value is assigned at all to an initialized variable. They're both rather worthless  
  * Example: Initializing var a; if no value is assigned then a will be undefined.

Basic Operators

Operators are basically tools used in javascript to manipulate values.

Types of Operators:

1. Arithmetic: these operators are used to make number expressions. It's elementary school math basically  
  * + will be used to add numbers, 1 + 1 is 2 and so forth  
  * - will be used to subtract numbers, 5 - 3 is 2  
  * / will be used to divide numbers  
  * The * will be used to multiply numbers, 5 * 5 is 25  

Bonus Arithmetic Operators:  
  * ++ is used to increment (increase) by 1  
   * Example: var a = 1; a++; a is now equal to 2  
  * -- is used to decrement (decrease) by 1  
   * Example: var a = 1; a--; a is now equal to 0 
  * % (modulus) gives remainders  
   * Examples: 5 % 2 will give 1 because 5 / 2 is 4 with a remainder of 1  

2. Assignment: these operators assign values to variables.  
  * =, x = 5; assigns 5 to x variable  

3. Comparison: these operators make expressions that make true or false boolean values  
  * == is	equal to, do NOT use = as equal to  
    * Examples: 2 == 2 is true, 3 == "3" is true  
  * ===	equal value and equal type, view it kind of like IDENTICAL, a stricter ==  
    * Examples: 3 === 3 is true, 3 === "3" is false because they're not the same type  
  * !=	not equal  
    * Examples: 5 != 6 is true, 6 != 6 is false  
  * !==	not equal value and not equal type  
    * Examples: 6 !== 6 is false, 6 !== "6" is true because they're different types  
  * >	greater than  
    * Examples: 5 > 2 is true, 6 > 9 is false  
  * <	less than  
    * Examples: 3 < 5 is true, 5 < 5 is false  
  * >=	greater than or equal to  
    * Examples: 5 >= 3 is true, 5 >= 5 is true  
  * <=	less than or equal to  
    * Examples: 4 <= 5 is true, 4 <= 4 is true  
