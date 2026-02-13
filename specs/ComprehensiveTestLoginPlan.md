# Comprehensive Test Plan for Practice Test Login

## Application Overview

This comprehensive test plan covers all aspects of the login functionality of the Practice Test Automation application, including positive, negative, boundary, and edge cases.

## Test Scenarios

### 1. Login Functionality Tests

**Seed:** `tests/seed.spec.ts`

#### 1.1. Positive Login Test

**File:** `tests/LoginPage/PositiveLoginTest.spec.ts`

**Steps:**
  1. Open the login page
  2. Type username 'student' into Username field
  3. Type password 'Password123' into Password field
  4. Click the Submit button
  5. Verify new page URL contains 'practicetestautomation.com/logged-in-successfully/'
  6. Verify new page contains expected text 'Congratulations' or 'successfully logged in'
  7. Verify button 'Log out' is displayed on the new page

**Expected Results:**
  - User is redirected to the success page
  - Success message is displayed
  - Log out button is visible

#### 1.2. Negative Username Test

**File:** `tests/LoginPage/NegativeUsernameTest.spec.ts`

**Steps:**
  1. Open the login page
  2. Type username 'incorrectUser' into Username field
  3. Type password 'Password123' into Password field
  4. Click the Submit button
  5. Verify error message is displayed
  6. Verify error message text is 'Your username is invalid!'

**Expected Results:**
  - Error message is displayed indicating invalid username

#### 1.3. Negative Password Test

**File:** `tests/LoginPage/NegativePasswordTest.spec.ts`

**Steps:**
  1. Open the login page
  2. Type username 'student' into Username field
  3. Type password 'incorrectPassword' into Password field
  4. Click the Submit button
  5. Verify error message is displayed
  6. Verify error message text is 'Your password is invalid!'

**Expected Results:**
  - Error message is displayed indicating invalid password

#### 1.4. Empty Username Test

**File:** `tests/LoginPage/EmptyUsernameTest.spec.ts`

**Steps:**
  1. Open the login page
  2. Leave Username field empty
  3. Type password 'Password123' into Password field
  4. Click the Submit button
  5. Verify error message is displayed
  6. Verify error message text is 'Your username is invalid!'

**Expected Results:**
  - Error message is displayed indicating empty username

#### 1.5. Empty Password Test

**File:** `tests/LoginPage/EmptyPasswordTest.spec.ts`

**Steps:**
  1. Open the login page
  2. Type username 'student' into Username field
  3. Leave Password field empty
  4. Click the Submit button
  5. Verify error message is displayed
  6. Verify error message text is 'Your password is invalid!'

**Expected Results:**
  - Error message is displayed indicating empty password

#### 1.6. SQL Injection Test

**File:** `tests/LoginPage/SQLInjectionTest.spec.ts`

**Steps:**
  1. Open the login page
  2. Type username 'student' into Username field
  3. Type password ' OR '1'='1 into Password field
  4. Click the Submit button
  5. Verify error message is displayed
  6. Verify error message text is 'Your password is invalid!'

**Expected Results:**
  - Error message is displayed indicating invalid password

#### 1.7. Cross-Site Scripting Test

**File:** `tests/LoginPage/CrossSiteScriptingTest.spec.ts`

**Steps:**
  1. Open the login page
  2. Type username '<script>alert(1)</script>' into Username field
  3. Type password 'Password123' into Password field
  4. Click the Submit button
  5. Verify error message is displayed
  6. Verify error message text is 'Your username is invalid!'

**Expected Results:**
  - Error message is displayed indicating invalid username

#### 1.8. Boundary Test for Username Length

**File:** `tests/LoginPage/BoundaryUsernameLengthTest.spec.ts`

**Steps:**
  1. Open the login page
  2. Type username with 255 characters into Username field
  3. Type password 'Password123' into Password field
  4. Click the Submit button
  5. Verify error message is displayed
  6. Verify error message text is 'Your username is invalid!'

**Expected Results:**
  - Error message is displayed indicating invalid username

#### 1.9. Boundary Test for Password Length

**File:** `tests/LoginPage/BoundaryPasswordLengthTest.spec.ts`

**Steps:**
  1. Open the login page
  2. Type username 'student' into Username field
  3. Type password with 255 characters into Password field
  4. Click the Submit button
  5. Verify error message is displayed
  6. Verify error message text is 'Your password is invalid!'

**Expected Results:**
  - Error message is displayed indicating invalid password
