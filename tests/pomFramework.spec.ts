// Framework  - It is a design principle. Set of guildlines.

// POM - Page Object Model

// Page Object Model is a design pattern used in software testing to represent a web page as an object. It is way to organise and manage the interaction with a web page by creating  the properties(Variables - locators) and methods (action - launURL(), loginIntoApplication(),...) of that particular page.

// This approach helps in reducing the code duplication , improve test maintainability and enhancing the readability by encapsulating the page-specific login within a dedicated class or module.

// LoginPage.ts - locator related to login page, methods related to login page

// POM framework from scratch:

// There are different layers that we have to create:

// 1. PAGE LAYER - Will create a package or folder (pages). // Locators and methods related to specific pages.

// 2. TEST LAYER - Will create a package or folder (tests) - Pure test case  and assertion. We will call the locators and methods from the page class to the est layes. LoginPageTest.spec.ts, DashboardPageTestspec.ts,....

// 3. TEST DATA LAYER - JSON/EXCEL - TestData.json, TestData.xlsx

// 4. CONFIGURATION LAYER - playwright.config.ts - Global Configuration

// 5. UTILS LAYER - We will create a utils folder (utils) - Custom Function - screenshot(), scrollDown(), get data from excel, API method - to get the authorisation

// 6. REPORT LAYER - HTML/Allure  - we do not create it seperately in playwright.