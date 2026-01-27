// Variable - Storage - Which store either a single value or multiple values
let m = 10
let array =[10,20,30,40,50]

// int i = 10

/*
1. var - Modern  JS/TS  - ES6 (ECMA SCRIPT 6 - 2015) we do not var
2. let - When we know that the value of varaible can chnge at any point of time
3. const - When we have to declare a constant varaible
*/

// Variable declaration
// Syntax:
// keyword(var/let/const) variableName = value - JS
//  keyword(var/let/const) variableName :datatype(Optional) = value - JS

// Scope of a variable:
// 1. Global scoped variable  - Which is accessible from any part of the code inside the file
// 2. Local scoped variable {...} - Which is accessible only within the block where it is declared.



// let and const - 2015 before that - var - also introudce class

let k1 = 30


{
    let k1 = 10 // local varaible
    console.log(k1); // window
}

console.log(k1);


// var
// 1. Scope - Global or functional scope
// 2. Whenever you declare a variable using a var keyword it can be redeclared and can also be reinitialised
// 3. It is not mandatory to assign the value of the variable at the time of declaration


var l3


l3 = "Java"

var l2 = 100000
var l2 = 46546456
var l2 = 454645547
console.log(l2);



var l1 = "TS"
l1 = "Python"

function add(){
    var l5 = "1000"
    if(true){
        let k5 =10
    }
  //  console.log(k5);
}

//console.log(l5);


// let
// 1. Scope - Block {...} level scope
// 2. Whenever you declare a variable using a let keyword it cannot be redeclared but can be reinitialised
// 3. It is not mandatory to assign the value of the variable at the time of declaration


let var2



let variable  = "Java" // Global
//let variable = "Python"
variable  = "JS"

{
    let var1 = "Python" // Local
    //let var1 = "JS"
}

//console.log(var1);

var2 = 40

// const
// 1. Scope - Block {...} level scope
// 2. Whenever you declare a variable using a const keyword it cannot be redeclared and  cannot be reinitialised
// 3. It is mandatory to assign the value of the variable at the time of declaration

{
const var3 = 20 // local
}


const var4 = 90
const VAR4 = 1000


// var
// 1. Scope - Global or functional scope
// 2. Whenever you declare a variable using a var keyword it can be redeclared and can also be reinitialised
// 3. It is not mandatory to assign the value of the variable at the time of declarationd

// let
// 1. Scope - Block {...} level scope
// 2. Whenever you declare a variable using a let keyword it cannot be redeclared but can be reinitialised
// 3. It is not mandatory to assign the value of the variable at the time of declaration

// const
// 1. Scope - Block {...} level scope
// 2. Whenever you declare a variable using a const keyword it cannot be redeclared and  cannot be reinitialised
// 3. It is mandatory to assign the value of the variable at the time of declaration


let lang = "ts"

{
    console.log((window).lang);
    let lang = "TS"
}