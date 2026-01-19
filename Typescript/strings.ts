// string - Combination of characters. Hello, string

     // 3 ways in which we can declare string

     /*
        1. By using single quote ('') - String literal
        2. By using double quote ("") - String Literal
        3. By using backtick (``) - Template literal

     */

        let singlQuote1 :string  = 'This is a single quote string' // 'a'
      //  singlQuote = 797
        let doubleQuote1 = "This is a double quote string"
        let backtick1 = `This is a backtick string`

        // There are 2 main purpose of defining the string by using backtick

        // 1. Mutli line string

        let multiline1 :string = `This is
         a multi line 
         string`


        // 2. For string parametrisation - ${variableName} - Calling a variable inside a string

        let age1 = 20

        let message1 = `Your age is ${age1}`
        console.log(message1)

        console.log("**************Methods in strings******************");


     // 1. length - Returns the total number of characters in a string
     //Sytax:
     // stringVariable.length

     let str1 :string = "Hello TypeScript"
     console.log(str1.length);


     //abababcde - a3b3c1d1e1

     // 2. charAt(index) - Returns the character at the specified index position
     // Syntax:
     // stringVariable.charAt(index)
        console.log(str1.charAt(0)) // H
        console.log(str1.charAt(10)) 

    // 3. concat(str1, str2,...) - Used to concatenate/join multiple strings and returns a new string
    // Syntax:
    // stringVariable.concat(str1, str2,...)
    
    let str2 = "Hello "
    let str3 = "World"
    let str4 = str2.concat(str3)
    console.log(str4);

    const result = str4.includes("Hello")
    console.log(result);

    // 4. includes(substring, startIndex?) - Returns true if the substring is found in the string, otherwise false
    // Syntax:
    // stringVariable.includes(substring, startIndex)
    const includes = str4.includes("World",0)
    console.log(includes); // true

    // 5. indexOf(substring, startIndex?) - Returns the index of the first occurrence of the specified substring, otherwise -1
    // Syntax:
    // stringVariable.indexOf(substring, startIndex)

    // 6. lastIndexOf(substring, startIndex?) - Returns the index of the last occurrence of the specified substring, otherwise -1
    // Syntax:
    // stringVariable.lastIndexOf(substring, startIndex)

    // 7. slice(startIndex?, endIndex?) - Extracts a portion of the string and returns a new string
    // Syntax:
    // stringVariable.slice(startIndex, endIndex(exclusive))
    const slice1 = str4.slice(0,5) // 0,1,2,3,4
    console.log(slice1);
    console.log(str4.slice(7,2)); // empty string

    // 8. substring(startIndex, endIndex?) - Extracts characters from startIndex to endIndex and returns a new string
    // Syntax:
    // stringVariable.substring(startIndex(Mandatory), endIndex(exclusive))

    const substring = str4.substring(6)
    console.log(substring);
    console.log(str4.substring(7,2));

    // What is the difference between slice and substring?
    // 1. Start index is mandatory in substring whereas in slice its optional
    // 2. If startIndex > endIndex in slice it will return empty string whereas in substring it will swap the values and return the string


    // 9. startsWith(substring, startIndex?) - Checks if the string starts with the specified substring and returns true or false
    // Syntax:
    // stringVariable.startsWith(substring, startIndex)

    let str6 = "TypeScript is a superset of JavaScript"
    console.log(str6.startsWith("a", 14));

    // 10. endsWith(substring, length?) - Checks if the string ends with the specified substring and returns true or false
    // Syntax:
    // stringVariable.endsWith(substring, length)

    console.log(str6.endsWith("JavaScript"));
    console.log(str6.endsWith("TypeScript", 12));

    // 11. toUpperCase() - Converts the string to uppercase and returns a new string

    // Syntax:
    // stringVariable.toUpperCase()

    console.log(str6);
    console.log(str6.toUpperCase());

    // 12. toLowerCase() - Converts the string to lowercase and returns a new string
    // Syntax:
    // stringVariable.toLowerCase()

    console.log(str6.toLowerCase());

    // 13. trim() - Removes whitespace from beginning and end of the string and returns a new string
    // Syntax:
    // stringVariable.trim()

    let str7 = "   Hello World   "
    console.log(str7.length);
    console.log(str7.trim().length);

    // 14. trimStart() - Removes whitespace from the beginning of the string and returns a new string
    // Syntax:
    // stringVariable.trimStart()
    console.log(str7.trimStart());
    console.log(str7.trimStart().length);

    // 15. trimEnd() - Removes whitespace from the end of the string and returns a new string
    // Syntax:
    // stringVariable.trimEnd()
    console.log(str7.trimEnd());
    console.log(str7.trimEnd().length);

    // 16. replace(oldValue, newValue) - Replaces the first occurrence of oldValue with newValue and returns a new string
    // Syntax:
    // stringVariable.replace(oldValue, newValue)

    let str8 = "Hello World, Welcome to TypeScript. TypeScript is awesome."
    console.log(str8.replace("TypeScript", "TS"))
    //console.log(str8.replace("TypeScript", "TS"));
    
    // 17. replaceAll(oldValue, newValue) - Replaces all occurrences of oldValue with newValue and returns a new string
    // Syntax:
    // stringVariable.replaceAll(oldValue, newValue)
    console.log(str8.replaceAll("TypeScript", "TS"));

    // 18. split(separator, limit?) - Splits the string into an array of substrings based on the specified separator
    // Syntax:
    // stringVariable.split(separator, limit?)
    const str9 = "Apple Banana Mango Orange Pineapple"
    console.log(str9.split(" "));

    // let str10 = ["Apple", "banana"]

    let email = "praveen@qamitra.com"
    console.log(email.split('@'));
    // To get the domain name
    console.log(email.split('@')[1]);


    // Object - Class

    


    