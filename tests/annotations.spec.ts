// Annotations


/*

test.skip() marks the test as irrelevant. Playwright does not run such a test. 

test.fail() marks the test as failing. Playwright will run this test and ensure it does indeed fail. If the test does not fail, Playwright will complain.
test.fixme() marks the test as failing. Playwright will not run this test, as opposed to the fail annotation. Use fixme when running the test is slow or crashes.

test.slow() marks the test as slow and triples the test timeout.

test.describe() - Group the test case inside the test file
test.step() - Define the steps inside the test case

test.only() - Only that particular test will be executed.



*/

import {test, expect} from '@playwright/test'

test.skip("Test1", async ()=>{
    console.log("Test1");
})

test.fail("Test2", async ()=>{
    console.log("Test2");
    expect(25).toBe(20)
})

test.fixme("Test3 @regression", async ()=>{
    console.log("Test3");
})

test("Test4 @smoke", async ()=>{
    test.slow()
    console.log("Test4");
})


// Tag - Smoke, Regression, api

// 1. Add the tag inside the test title by using @smoke @regression
// 2. inside the {tag : @smoke}

let num1 = Number("TS")
console.log(num1);