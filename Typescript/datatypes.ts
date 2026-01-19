// Datatypes - Which defines what type of data a variable is storing

// let i = 10

// There are 2 types of data types:

// 1. Primitive data types - Only have a single

     // 1. number
     // 2. string
     // 3. boolean
     // 4. null
     // 5. undefined

     // 6. union (|) - Combination of other data types (number | string)
     // 7. any
     // 8. void - Function


     // 1. By default the datatype of a varaible is "any" for anytype varaible.
     // 2. By default the value of the varaible is "undefined" for any type of datatype


     // Syntax:
     // Keyword(var/let/const) variableName : datatype(Optional) =  values - TS
     // Keyword(var/let/const) variableName  =  values - JS


     // 1. number  - Combination of integers (34, -45) and floating point number (34.46, 56456.4566)

     let num : number = 100  // Type annotation
     let num1 = 3545.64474



     // typeof - Operator which return the datatype of a variable

     console.log(typeof num1)

     // 2. string - Combination of characters. Hello, string

     // 3 ways in which we can declare string

     /*
        1. By using single quote ('') - String literal
        2. By using double quote ("") - String Literal
        3. By using backtick (``) - Template literal

     */

        let singlQuote :string  = 'This is a single quote string' // 'a'
      //  singlQuote = 797
        let doubleQuote = "This is a double quote string"
        let backtick = `This is a backtick string`

        // There are 2 main purpose of defining the string by using backtick

        // 1. Mutli line string

        let multiline :string = `This is
         a multi line 
         string`


        // 2. For string parametrisation - ${variableName} - Calling a variable inside a string

        let age = 20

        let message = `Your age is ${age}`
        console.log(message)

     // Type annotation and Type inference
     // Type Annotation - Whenever you have given the datatype of a variable explicitly is known as Type Annotation

     // Type inference - JS/TS will automatically infer/identify the datatype of a variable depending on the value that you have assigned to a variable.


     // 3. boolean - true /false
     let isAdmin = true
     let isEmployee = false

     // 4. null - Intentional absence of a value 

     let nul11 :null = null

     // 5. undefined - Whenever you do not define the value of a varaible is consider as an undefined datatype. 

     let var1 
     console.log(var1);


     var1 = 10
     console.log(var1);

     // initialization - let i =10
     // declaration - let i


     // 6. union (|) - Combination of multiple datatypes

     // number or string

     let union : number | string = 100
     union = "Typescript"
     console.log(union);


     // 7. any - Free to accept any type of datatype
     let any1 : any = 10000
     any1 = "TS"
     any1 = true
     any1 = null
     any1 = undefined
     console.log(any1);     

     // 8. void - nothing - Ifa function is not returing anything by default that function will have a datatype as void

     function add(){
      console.log("THis is a add function");

     }
     


// 2. Non-primitive data types - Can have multiple values

    // 1. Array
    // 2. Object
    // 3. Function