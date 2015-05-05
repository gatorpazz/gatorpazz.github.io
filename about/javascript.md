#Javascript  

Basic Literal Types  

Javascript has a number of value types that have unique properties: 

1. Null: basically a null value has no value at all, you can think of this in the terms of null and void, which means something is insignificant, having no value.  
  *Example: A variable initialized by typing var a; if no value is assigned by to it, a is a null value  

2. Boolean: a boolean value is easy, there are only two possible choices for what can be a boolean value and that is true and false. This is used in javascript (and other programming languages) to branch directions code can take. This type of value can be declared directly by typing 'true' or 'false', or through the use of comparison operators such as < or >.  
  *Examples: var a = true; a is a boolean value, var a = 5 < 3; evaluating that 5 is not less than 3 makes a evaluate to 'false'  
  
3. Number: this one is easy, a number is a number like 4 or 8  
  *Examples: I'm not going to give you examples of numbers  
  
4. String: a string value basically refers to sequences of characters, strings can be numbers or letters and are made by putting " " around characters.  
  *Examples: "A" "352" "Michael Pascuzzi" are all strings, in this case "352" is not a number literal type  
  
Special Constants  

Javascript has some weird special constants that pop up from time to time:  

1. Ifinity: Infinity is basically a way for javascript to say the number you have is too big. Infinity is displayed when a number exceeds the upper limit of the floating point numbers, which is 1.797693134862315E+308. Infinity can be negative or positive.  

2. NaN: NaN stands for not a number. This will pop up generally when you try some weird or impossible math.  
  *Examples: dividing any number by zero will evaluate to NaN because it's impossible. Taking a square root of a negative number will evaluate to NaN. Trying to do math with number values and string values will give you NaN unless the string is only made up of number characters, in which case javascript will convert the string to a number.  
  
