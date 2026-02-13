// API - Application Programming Interface

// Frontend - JS/TS- react, angular, vue
// Backend  - Java/Python/.Net/php/go
// Database - sql/mysql/mongo/postgres


// API - 

// Get  - Fetch the data from DB or server
// Post - Create a new record inside the DB
// Put  - Update the record if it is available else will create a new record
// Delete - Delete the record/data
// patch - simple update/modification


// Request format:
// Request URL - API - https://rahulshettyacademy.com/api/ecom/auth/login
// Request Method - POST
// Request Header - {content-type : application/json}, {Authorization : token}
// Request Body - Data - Login data - username , password
// {userEmail: "testnHNk@gmail.com", userPassword: "Testing@1234"}

// Response format:
// Status code - 200 
// Header - 
// Response body -

/*
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmQ0Njc1NWFlMmFmZDRjMGI2Mjg2YmMiLCJ1c2VyRW1haWwiOiJ0ZXN0bkhOa0BnbWFpbC5jb20iLCJ1c2VyTW9iaWxlIjoxMjM0NTY3ODkwLCJ1c2VyUm9sZSI6ImN1c3RvbWVyIiwiaWF0IjoxNzcwOTUzOTgxLCJleHAiOjE4MDI1MTE1ODF9.Ww4hMefsoUPkm41lSveFxxx1y-uottTfGHhVpVakvLY",
    "userId": "66d46755ae2afd4c0b6286bc",
    "message": "Login Successfully"
}


*/



import {test, expect, request} from '@playwright/test'

const loginPayload = {userEmail: "testnHNk@gmail.com", userPassword: "Testing@1234"}

test("API testing - login and validate response", async ({request})=>{

    const apiResponse = await request.post("https://rahulshettyacademy.com/api/ecom/auth/login", {
        data: loginPayload,
        headers: {
            "content-type": "application/json"
        },
    })

    // Status and headers
    expect(apiResponse.status()).toBe(200)
    const contentType = apiResponse.headers()['content-type'] || ''
    expect(contentType).toContain('application/json')

    // Body validations
    const jsonResponse = await apiResponse.json()
    expect(jsonResponse).toBeTruthy()
    expect(jsonResponse.token).toBeTruthy()
    expect(typeof jsonResponse.token).toBe('string')
    expect(jsonResponse.userId).toMatch(/^[a-f0-9]{24}$/)
    expect(jsonResponse.message).toBe("Login Successfully")

    console.log('API response validated:', jsonResponse)

})