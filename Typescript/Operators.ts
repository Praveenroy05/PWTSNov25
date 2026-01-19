// Operators - Operators is a symbol which perform certain operations.


// 1. Arithmetic Operators
// 2. Comparison Operators
// 3. Logical Operators
// 4. Assignment Operator
// 5. Ternary Operator - Condition Statement


// 1. Arithmetic Operators
     // 1. Addition (+)
     // 2. Subtraction (-)
     // 3. Multiplication (*)
     // 4. Division (/)
     // 5. Modulus (%) - Remainder after the division
     // 6. Exponential (**) - Power
     // 7. Increment Operator (++)
     // 8. Decrement Operator (--)

     let num3 = 10
     let num4 = 3

     // 1. +
     console.log(num3 + num4); // 13

     // 2. -
     console.log(num3-num4); // 7

     // 3. *
     console.log(num3*num4); // 30

     // 4. / 
     console.log(num3/num4); // 10/3

     // 5. Modulus (%)
     console.log(num3 % num4); // 10 % 3 // 1
     console.log(10 % 4); // 2

     // 6. Exponential - (**) - Power of first value to the 2nd value
     console.log(3 ** 2); // 3^2 // 

     // 7. Increment Operator  (++) - It will increase the value of the varaible by 1

     let num5 = 10 // num5++/++num5

     // Pre-increment (++num5) - First the value of the varaible will be incremented by 1 and then the action will be performed

     console.log(++num5) // 11


     // Post-increment (num5++) - First action will be performed and then the value of the varaible will be incremented by 1.

     let num6 = 5
     console.log(num6++) //5
     console.log(num6); // 6

     // 8. Decrement Operator (--) - It will decrease the value of the varaible by 1

     let num7 = 10
     // Pre-decrement (--num7) - First the value of the varaible will be decremented by 1 and then the action will be performed

     console.log(--num7); // 9


     let num8 = 7
    // Post-decrement (num5--) - First action will be performed and then the value of the varaible will be decremented by 1.

    console.log(num8--); //7
    console.log(num8); // 6

    console.log("*********************************");

  // 2. Comparison Operators - Compares the 2 values of the variables and return the result in the form of boolean (true or false)
      // 1. Equal To (==)
      // 2. Not Equal to (!=)
      // 3. Strict Equal to (===)
      // 4. Strict Not Equal to (!==)
      // 5. Greater than (>)
      // 6. Greater than or equal (>=)
      // 7. Less than (<)
      // 8. Less then or equal (<=)


      let num9 =   10
      let num10 = "10"

      // 1. Equal to (==) - Compares the VALUES of the variable are same or not

      console.log(num9 == num10)
     

      // 2. Not Equal to (!=) - Compares the VALUES of the varaible should not be same

      console.log(num9 != num10)

      // 3. Strict Equal to (===) - Compares the VALUES and the DATATYPE of the varaibles
      console.log(num9 === num10);


      // 4. Strict Not Equal to (!==) - Compares the VALUES and the DATATYPE of the varaibles should not be same

        console.log(num9 !== num10);

      // 5. Greater (>)
      console.log(10 > 5); // true

      // 6. Greater than or Equal (>=)
      console.log(10 >= 10); // true

      // 7. Less than (<)
      console.log(100 < 50); // false

      // 8. Less than or equal (<=)
      console.log(21 <= 20); // true


      console.log("******************************************");

 // 3. Logical Operator - Used to combine multiple condition to get the final result. Result should be in the form of boolean

    // 1. Logical AND (&&) - Both the condition should be treu to gt the result as true
    // 2. Logical OR (||) - Either of the condition has to be true to get the true result.
    // 3. Logical NOT (!) - It will reverse the result from true to false and false to true

    // 1. AND (&&)

    // true && true  - true
    // true && false - false
    // false && true - false
    // false && false - false

    console.log("AND (&&)", ("TS" == "TS") && (23>12));
    console.log("AND (&&)", (10>5) && (23>120));
    console.log("AND (&&)", (10>50) && (23>12));
    console.log("AND (&&)", (10>50) && (23>102));



// 2. OR (||)

    // true || true  - true
    // true || false - true
    // false || true - true
    // false || false - false


    console.log("OR (||)", (10>5) || (23>12));
    console.log("OR (||)", (10>5) || (23>120));
    console.log("OR (||)", (10>50) || (23>12));
    console.log("OR (||)", (10>50) || (23>102));


    // 3. Logical NOT (!)  - Reverse the result from true to false and false to true
    console.log(!(100>40)) // !true - false
    console.log(!(100>400)) // !false - true


// 4. Assignment Operator (=)

   let i1 = "Typescript"

      // What is difference between =, == and ===

      // = - is used to assign the value to a varaible
      // == - Compares if the values of the varaibles are same or not
      // === -  Compares if both the Values and the datatype of the varaibles are same or not

