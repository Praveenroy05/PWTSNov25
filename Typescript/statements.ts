// Conditional Statements - It allows us to execute the different block of code {...} based on different condition

// if statement - This will handle only the positive scenario
// if else statement - This will handle both positive and negative scenario
// if else if statement - This will validate multiple conditions
// switch statement - This will also validate multiple conditions
// Ternary Operator (?:) - if else statement


// drop down - which n countries - India

// for(let i=0; i<numberOcCountries; i++){
//     text = Locators
//      if(countryName == text){
//         //click on the country
//      }

// }

// 1. if statement

// Syntax:
/*

if(condition)
{
  // code
}

*/

if(100 > 400){
   console.log("First number is greater than 2nd number");
}


// 2. if else statement
// Syntax:

/*

if(condition){
 // code will be executed if the condition is true
}
else
{
  // code will be execute if the condition is false    
}

*/


if(100 > 400){
   console.log("First number is greater than 2nd number");
}
else{
    console.log("Second number is greater than first number");
}


// 3. if else if statement
// SYntax:

/*

if(condition1)
{
  // code - if the condition1 is true
}
else if(condition2)
{
  // code - if the condition2 is true
}
else if(condition3)
{
 // code - if the condition3 is true
}
else
{
 // code - if none of the conditions is true    
}


*/

let browser = "edge"

if(browser == "chrome") // ("edge" == "chrome")
{
    console.log("Launch the chrome browser");
}
else if(browser == "firefox")
{
    console.log("Launch the firefox browser");
}
else if(browser == "safari"){
   console.log("Launch the safari browser");
}
else{
    console.log("Invalid browser");
}


// When can we use if else if statement
// 1. Condition have ranges (>90) <80, >10
// 2. Datatypes are different - name = "Joe", salary > 100000
// 3. Logical Operator (&&) or (||)


// 4. switch statement - Validate  multiple conditions

// Syntax:

/*

switch(expression){

   case value1:
    // code
    break; // Terminate the execution
   case value2:
    // code
    break;

    default:
        //code
}



*/

//if(browserName == "chrome")

let browserName = "safari"

switch(browserName){ // switch("chrome")
    case "chrome":
        console.log("Launch the chrome browser")
        break
    case "firefox":
        console.log("Launch the firefox browser")
        break;
    case "safari":
        console.log("Launch the safari browser")
        break;
    default:
        console.log("Invalid browser name");
}



// 5. Ternary Operator (?:) - alternative for if else statement

// syntax:

/*

(condition)? if true - value : if false -value

*/


// Ternary Operator is a shorthand way of writing if-else statement. It consists of 3 parts

// 1. condition?
// 2. The value if the condition i true and 
// 3. The vaue if the condition is false

// 2 and 3 will be separated with : (colon)

let age1  =10;

const result = (age1>= 18)? "You are eligible for voting" : "You are not eligible for voting"
console.log(result);

if(age1> 18){
    console.log("You are not eligible for voting");
}
else{
    console.log("You are not eligible for voting")
}
