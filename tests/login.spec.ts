// spec: specs/ComprehensiveTestLoginPlan.md
// seed: tests/seed.spec.ts
test.describe('Positive Login Test', () => {
  test('User can log in with valid credentials', async ({ page }) => {
    // 1. Open the login page
    await page.goto('https://practicetestautomation.com/practice-test-login/');

    // 2. Type username 'student' into Username field
    await page.fill('input[name="username"]', 'student');

    // 3. Type password 'Password123' into Password field
    await page.fill('input[name="password"]', 'Password123');

    // 4. Click the Submit button
    await page.click('button[type="submit"]');

    // 5. Verify new page URL contains 'practicetestautomation.com/logged-in-successfully/'
    await expect(page).toHaveURL(/practicetestautomation.com\/logged-in-successfully/);

    // 6. Verify new page contains expected text 'Congratulations' or 'successfully logged in'
    await expect(page.locator('text=Congratulations')).toBeVisible();

    // 7. Verify button 'Log out' is displayed on the new page
    await expect(page.locator('text=Log out')).toBeVisible();
  });
});

test.describe('Negative Username Test', () => {
  test('User cannot log in with invalid username', async ({ page }) => {
    // 1. Open the login page
    await page.goto('https://practicetestautomation.com/practice-test-login/');

    // 2. Type username 'incorrectUser' into Username field
    await page.fill('input[name="username"]', 'incorrectUser');

    // 3. Type password 'Password123' into Password field
    await page.fill('input[name="password"]', 'Password123');

    // 4. Click the Submit button
    await page.click('button[type="submit"]');

    // 5. Verify error message is displayed
    await expect(page.locator('.error')).toBeVisible();

    // 6. Verify error message text is 'Your username is invalid!'
    await expect(page.locator('.error')).toHaveText('Your username is invalid!');
  });
});

test.describe('Negative Password Test', () => {
  test('User cannot log in with invalid password', async ({ page }) => {
    // 1. Open the login page
    await page.goto('https://practicetestautomation.com/practice-test-login/');

    // 2. Type username 'student' into Username field
    await page.fill('input[name="username"]', 'student');

    // 3. Type password 'incorrectPassword' into Password field
    await page.fill('input[name="password"]', 'incorrectPassword');

    // 4. Click the Submit button
    await page.click('button[type="submit"]');

    // 5. Verify error message is displayed
    await expect(page.locator('.error')).toBeVisible();

    // 6. Verify error message text is 'Your password is invalid!'
    await expect(page.locator('.error')).toHaveText('Your password is invalid!');
  });
});

test.describe('Empty Username Test', () => {
  test('User cannot log in with empty username', async ({ page }) => {
    // 1. Open the login page
    await page.goto('https://practicetestautomation.com/practice-test-login/');

    // 2. Leave Username field empty
    await page.fill('input[name="password"]', 'Password123');

    // 3. Click the Submit button
    await page.click('button[type="submit"]');

    // 4. Verify error message is displayed
    await expect(page.locator('.error')).toBeVisible();

    // 5. Verify error message text is 'Your username is invalid!'
    await expect(page.locator('.error')).toHaveText('Your username is invalid!');
  });
});

test.describe('Empty Password Test', () => {
  test('User cannot log in with empty password', async ({ page }) => {
    // 1. Open the login page
    await page.goto('https://practicetestautomation.com/practice-test-login/');

    // 2. Type username 'student' into Username field
    await page.fill('input[name="username"]', 'student');

    // 3. Leave Password field empty
    await page.fill('input[name="password"]', '');

    // 4. Click the Submit button
    await page.click('button[type="submit"]');

    // 5. Verify error message is displayed
    await expect(page.locator('.error')).toBeVisible();

    // 6. Verify error message text is 'Your password is invalid!'
    await expect(page.locator('.error')).toHaveText('Your password is invalid!');
  });
});

test.describe('SQL Injection Test', () => {
  test('User cannot log in with SQL injection', async ({ page }) => {
    // 1. Open the login page
    await page.goto('https://practicetestautomation.com/practice-test-login/');

    // 2. Type username 'student' into Username field
    await page.fill('input[name="username"]', 'student');

    // 3. Type password ' OR '1'='1 into Password field
    await page.fill('input[name="password"]', ' OR '1'='1');

    // 4. Click the Submit button
    await page.click('button[type="submit"]');

    // 5. Verify error message is displayed
    await expect(page.locator('.error')).toBeVisible();

    // 6. Verify error message text is 'Your password is invalid!'
    await expect(page.locator('.error')).toHaveText('Your password is invalid!');
  });
});

test.describe('Cross-Site Scripting Test', () => {
  test('User cannot log in with XSS attack', async ({ page }) => {
    // 1. Open the login page
    await page.goto('https://practicetestautomation.com/practice-test-login/');

    // 2. Type username '<script>alert(1)</script>' into Username field
    await page.fill('input[name="username"]', '<script>alert(1)</script>');

    // 3. Type password 'Password123' into Password field
    await page.fill('input[name="password"]', 'Password123');

    // 4. Click the Submit button
    await page.click('button[type="submit"]');

    // 5. Verify error message is displayed
    await expect(page.locator('.error')).toBeVisible();

    // 6. Verify error message text is 'Your username is invalid!'
    await expect(page.locator('.error')).toHaveText('Your username is invalid!');
  });
});

test.describe('Boundary Test for Username Length', () => {
  test('User cannot log in with username exceeding length limit', async ({ page }) => {
    // 1. Open the login page
    await page.goto('https://practicetestautomation.com/practice-test-login/');

    // 2. Type username with 255 characters into Username field
    await page.fill('input[name="username"]', 'a'.repeat(255));

    // 3. Type password 'Password123' into Password field
    await page.fill('input[name="password"]', 'Password123');

    // 4. Click the Submit button
    await page.click('button[type="submit"]');

    // 5. Verify error message is displayed
    await expect(page.locator('.error')).toBeVisible();

    // 6. Verify error message text is 'Your username is invalid!'
    await expect(page.locator('.error')).toHaveText('Your username is invalid!');
  });
});

test.describe('Boundary Test for Password Length', () => {
  test('User cannot log in with password exceeding length limit', async ({ page }) => {
    // 1. Open the login page
    await page.goto('https://practicetestautomation.com/practice-test-login/');

    // 2. Type username 'student' into Username field
    await page.fill('input[name="username"]', 'student');

    // 3. Type password with 255 characters into Password field
    await page.fill('input[name="password"]', 'b'.repeat(255));

    // 4. Click the Submit button
    await page.click('button[type="submit"]');

    // 5. Verify error message is displayed
    await expect(page.locator('.error')).toBeVisible();

    // 6. Verify error message text is 'Your password is invalid!'
    await expect(page.locator('.error')).toHaveText('Your password is invalid!');
  });
});
