let array  = [90,100,"200",300, true, null]  // [index:value] - [0:90, 1:100, 2:200, 3:300]

// Index in array stats with 0
// Accessing array values using index
// Syntax: arrayName[index]

console.log(array[0])
console.log(array[2]) 

// Declaration of array 

// 1. Using square brackets [] - Array Literal
// 2. Using new keyword - Array Constructor


// 1. Array Literal
let arr1 = [90,100,200,300,400]  // Type inference - TS

let arr2 : number[] = [34,45,56,67,78]  // Type annotation - TS

let arr3 : string[] = ["Hello", "World", "This", "is", "TypeScript"]

let arr4 : any = [10,20,"TS", true, null]


// 2. Array Constructor
// SYntax: let varaibleName = new Array(values)
let arr5 = new Array(10,20,30,40,50) 
console.log(arr5);


let array1 = [10,20,30,"TS", "JS", true, false, null] // [0-7] - 8 elements
console.log(array1[0]);
console.log(array1[1]);
console.log(array1[2]);


console.log("*****************************");

// length property - to get the total number of elements in an array
// Syntax:
// arrayName.length
console.log(array1.length);

for(let i=0; i<array1.length; i++){
    console.log(array1[i])
}

console.log("********************************************");

// for of loop
// Syntax:
/*

for(variable declaration of array){
       code
}

*/

//let array1 = [10,20,30,"TS", "JS", true, false, null, undefined] // [0-7] - 8 elements


for(let element of array1)
{
    console.log(element)
}



// Different types of array methods

console.log("**********Methods of an array**********");

let array2 :any= [10,20,30,40,50]
console.log(array2);

// 1. push(element1, element2,...) - To add the elements at the end of the array
// Syntax:
// arrayName.push(element1, element2,...)
array2.push(5,60,70,80)
console.log("Push()",array2);

// 2. pop() - To remove the last element from the array
// Syntax:
// arrayName.pop()
array2.pop()
console.log("Pop()",array2);


// 3. unshift(element1, element2,...) - To add the elements at the beginning of the array
// Syntax:
// arrayName.unshift(element1, element2,...)
array2.unshift("TS", 1, 2)
console.log("Unshift()",array2);

// 4. shift() - To remove the first element from the array
// Syntax:
// arrayName.shift()
array2.shift()
console.log("Shift()",array2);

// 5. splice(index, number of elements to be removed, element1, element2,...) - To add/remove elements from the array at the specified index

// Syntax:
// arrayName.splice(index, number of elements to be removed, element1, element2,...)

// index - position from where the elements to be added/removed
// number of elements to be removed - number of elements to be removed from the array
// element1, element2,... - elements to be added at the specified index

array2.splice(2,0, "TS", "JS")
console.log("Splice()", array2); // [1,2,"TS", "JS", 40,50,5,60,70]

// 1. Difference between push and unshift
// 2. Difference between pop and shift
// 3. Difference between splice and slice

// 6. slice(startIndex, endIndex) - To extract a portion of the array and return a new array
// Syntax:
// arrayName.slice(startIndex, endIndex)
// startIndex - starting index from where the extraction begins (inclusive)
// endIndex - ending index where the extraction ends (exclusive)
const slice = array2.slice(2,7) // 2,3,4,5,6
console.log(slice);

// 7. indexOf(element, startIndex) - To get the index of the first occurrence of the specified element in the array
// Syntax:
// arrayName.indexOf(element, startIndex(optional))

let array3 = [10,20,30,40,50,10,20,30,40] // 8 // 0-7 = 8
const indexOf = array3.indexOf(10)
console.log(indexOf); // 0
const indeOf1 = array3.indexOf(10,2)
console.log(indeOf1); // 5


// 8. lastIndexOf(element, startIndex) - To get the index of the last occurrence of the specified element in the array
// Syntax:
// arrayName.lastIndexOf(element, startIndex(optional))
const lastIndex = array3.lastIndexOf(10, 4)
console.log(lastIndex);

// 9. includes(element, startIndex) - To check whether the array contains the specified element or not and this will return boolean value
// Syntax:
// arrayName.includes(element, startIndex(optional))
//let array3 = [10,20,30,40,50,10,20,30,40] // 8 // 0-7 = 8

const include = array3.includes(40,4)
console.log(include); // true
const include1 = array3.includes(100)
console.log(include1); // false


// 10. concat(array1, array2,....) - To merge two or more arrays and this will return a new array
// Syntax:
// arrayName.concat(array1, array2,...)

let arr6 :any = [1,2,3]
let arr7 = [4,5,6]
let arr9 = ["TS", "JS", "Java"]
const arr8 = arr6.concat(arr7, arr9)
console.log(arr8);

// let str1 = "Hello "
// let str2 = "World"
// let str3 = str1.concat(str2)
// console.log(str3);

// const result = str3.includes("Hello")
// console.log(result);






