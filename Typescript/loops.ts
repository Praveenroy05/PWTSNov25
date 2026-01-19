// Loops - Which will execute the same block of code {...} multiple times.

console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)

console.log("****************************");

// for(let i=1; i<=50; i++){
//     console.log(i)
// }


// 1. for loop
      // a. for loop - Traditional for loop - When we know that how many times we have to run the iteration
      // b. for ...of loop - Loop through the Array, string - [1,2,3,4]
      // c. for ...in loop - Loop through the properties of an object -       {name: "Rahul", age: 30, address : "NY"}
// 2. while loop - If we do not know how many times we have to execute the loop
// 3. do while loop - If we want to execute the loop atleast for 1 time before checking the condition.



// 1. for loop - Traditional loop
// Syntax:

/*

for(initialization; condition ; increment/decrement)
{
   // code
   break;
}

initialization - Initialise the value of a variable to start the iteration. Ex:- let i=1

condition - Condition to check whether the loop should continue or not. Ex: - i<=5

increment/decrement - Increase or decrease the value of the variable after each iteration. i++/i--

*/


// 1 to 5

// let i= 0 - initialization
// let i - declaration

for(let i = 1; i<6; i++){ // i=6, 6<6 5++= 5+1 = 6
     // 1 2 3 4 5
    if(i==3){
        continue
    }
    console.log(i)
}


console.log("***********************************");

// 2. while loop
// Syntax:

/*

initialization
while(condition){
  // code
  increment/decrement
}

*/

let j = 1
while(j <6){
    console.log(j)
    j++
}

console.log("**************************************");

// 10 to 1

let k = 10
while(k >10) { //k >10, k >0, k>=1, k<=10
    console.log(k)
    k--
}

console.log("**************************************");

// 3. do while loop
// Syntax:

/*

initialization

do{
  // code
  increment/decrement
}while(condition);

*/

let l = 10
do{
    console.log(l);
    l--
}while(l>0);




// Print even number between 1 to 50
