// Hooks - It is a special type of function which perform certain logic, setup /teardown before and after execution of the test case

// 1. test.beforeAll() - It will be executed once before executing any of the test cases - initiate the report, log , DB connection, get all the data from the excel.

// 2. test.beforeEach() - It will be executed once before running each and every test cases. Pre-conditions - Object create , launch the url

// 3. test()

// 4. test.afterEach() - It will be executed once after running each and every test cases. - NOT NEEDED. close the browser

// 5. test.afterAll() - It will be executed once after executing all of the test cases.
// close the report, close log file, close DB connection

import {test} from '@playwright/test'



test.beforeAll(async ()=>{
    console.log("Before ALL");
})

test.beforeEach(async ()=>{
    console.log("Before Each");
})

test("Test 1", async ()=>{
    console.log("Test 1");
})

test.afterEach(async ()=>{
    console.log("After Each");
})

test.afterAll(async ()=>{
    console.log("After All");
})

test("Test 2", async ()=>{
    console.log("Test 2");
})

test("Test 3", async ()=>{
    console.log("Test 3");
})