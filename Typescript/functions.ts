// Function - is a set of instructions that performs a specific task


function login(){
    // fill the username
    // fill the password
    // click on the login button
}

login()


// 100 TCs - 
// Duplication of code - 300 lines of code -105
// Mintainability - difficult to maintain the code - 100 Tcs - 1 step
// Reusability - 


// 1. Named Function - Function Declaration - Name function will be utilised most of the time inside the framework of automation testing.
// 2. Anonymous Function - Function Expression
// 3. Arrow Function - ES6 - 2015
// 4. Constructor Function  - Class


// 1. Named Function - Function Declaration - A function which will be declared with a name is known as Function Declaration or Named Function
// Syntax:

/*
function functionName(parameter:datatype(Optional),parameter1,...): return datatype(Optional)
{
    // code
    return - This function is returning something

}

const result = functionName(arguments)


*/


// Addition of 2 numbers

// Parametrized and non-returning function
function add1(a:number,b:number) // a,b - parameters
{
    console.log(a+b);
    let c = a+b
    return c
}

const sum1  = add1(10,90) // 10,90 - arguments
console.log(sum1);


// Parametrized and returning function
function addition(x,y,z){
    return x+y+z
}


const sum = addition(10,20,30)
console.log(sum);

// Non-parametrized and non-returning function
function greet(){
    console.log("Hello, Welcome to TypeScript");
}

greet()

// Non-parametrized and returning function

function message1(){
    return "Hello, Welcome to TS"
}

const msg = message1()
console.log(msg);

// 2. Anonymous Function - Function Expression - A function which is declared without any name is known as Anonymous Function or Function Expression. That function we store it inside a varaible. 


// let i = 10 - Expression  - let i = Function(){}

// Syntax:
/*

let variable = function(parameter:datatype(Optional)): return datatype(Optional)
{
 // code
}

variable(arguments)

*/

// Anonymous function and Arrow function - Will be used for call back function 

// Callback function - A function which is passed as an argument to another function is known as Callback function



// function add1(a:number,b:number) // a,b - parameters
// {
//     console.log(a+b);
// }
// add1(45,34)


let anonynousFun = function(a:number,b:number){
   // console.log(a+b);
   return a-b
}

let sumResult = anonynousFun(43,23)
console.log(sumResult);

// 3. Arrow Function - ES6(ECMA SCRIPT 6) - 2015 - =>
// 1. This function is also a part of anonymous function and will not have name as well.
// 2. This function is declared by using arrow (=>) symbol after the parameter list.
// 3. Arrow function use to shorten the number of lines of code.
// 4. This function can be utilised for a single line function.
// 5. If there is only one line of code then we can skip the curly braces "{}" and the "return" keyword.
// 6. If there is only one parameter then we can skip the paranthesis () as well.

// Syntax:

/*

let varaible = (parameter:datatype(Optional)) =>{
  // code
}
varaible(arguments)

*/


function multiply(x:number,y:number){
    return x*y
}

let multiply1 = (x:number,y:number) => (x*y)

let result = multiply1(5,6)
console.log(result);

let square = (a:number) => console.log(a*a)


// 5. Method Overloading - A method which have same name but different parameter list is known as Method Overloading.

// function display(a:number){
//     console.log("Number: "+a);
// }

// function display(a:number, b:number){
//     console.log("Number: "+a, b);
// }

// function display(a:number, b:number, c:number){
//     console.log("Number: "+a, b);
// }

// display(5)
// display(5,10)
// display(5,10,15)

// 6. Default Parameters - A parameter which is assigned with a default value is known as Default Parameter.

function display(a:number, b:number=90){
    console.log("Number: "+a, b);
}

display(5)
display(5,56)



// 7. Optional Parameters - A parameter which may or may not be provided with a value during the function call is known as Optional Parameter.

function show(name:string, age?:number){
    if(age==undefined){
        console.log("Your name is: "+name);    
    }else{
        console.log("Your name is : "+name + " and Your age is " +age);
    }
}

show("Rahul")
show("Joe",20)

// 8. Rest Parameters - A parameter which can take multiple number of arguments is known as Rest Parameter. It is represented by using 3 dots (...) before the parameter name. It will be treated as an array inside the function.

// [1,2,3,4,5]
function sumAll(a:number, ...num:any){
    console.log(a);
    console.log(num);
}

sumAll(10, 1,2,"JS",57,"TS")






