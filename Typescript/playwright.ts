// Playwright

    // Playwright is a Node.js library to automate Chromium, Firefox and WebKit with a single API. It is built to enable cross-browser web automation that is ever-green, capable, reliable and fast.
    // It is used for automating web applications for testing purposes, but is also capable of automating other web-based tasks and api testing.
    // It is developed by Microsoft and is open-source.
    // It supports multiple programming languages including JavaScript, TypeScript, Python, C#, and Java.


    // Why Javascript or Typescript for Playwright?

// 1. Compatibilty - Playwright is designed to work seamlessly with modern web applications built using JavaScript frameworks like React, Angular, and Vue.js. Using JavaScript or TypeScript allows for better integration and compatibility with these frameworks.
// 2. Asynchronous Programming - JavaScript and TypeScript have built-in support for asynchronous programming using Promises and async/await syntax. Playwright heavily relies on asynchronous operations to interact with web pages, making JavaScript and TypeScript a natural fit for writing Playwright scripts.

// 3. Community and Ecosystem - JavaScript has a large and active developer community, which means there are plenty of resources, libraries, and tools available for Playwright users. TypeScript, being a superset of JavaScript, also benefits from this ecosystem while providing additional features like static typing.

// 4. Cross-Platform Support - JavaScript and TypeScript are cross-platform languages that can run on various operating systems, making it easier to develop and execute Playwright tests across different environments.

// 5. Familiarity - Many developers are already familiar with JavaScript due to its widespread use in web development. Using JavaScript or TypeScript for Playwright allows developers to leverage their existing knowledge and skills without having to learn a new programming language.

// 6. New Features in Playwright will be first available in JS/TS - Playwright is primarily developed and maintained using JavaScript and TypeScript. As a result, new features and updates are often introduced in these languages first before being ported to other supported languages like Python, C#, and Java. This means that developers using JavaScript or TypeScript can take advantage of the latest Playwright capabilities sooner than those using other languages.

// 7. Test Runner will only be available in JS/TS - Playwright Test Runner is a powerful testing framework specifically designed for end-to-end testing with Playwright. It provides features like test organization, parallel execution, retries, and built-in assertions. However, the Playwright Test Runner is currently only available for JavaScript and TypeScript. Developers using other programming languages will need to rely on third-party test runners or frameworks to execute their Playwright tests, which may not offer the same level of integration and features as the native Playwright Test Runner.


// Installation: - Playwright using Typescript

// 1. Install Node js
// 2. Editor - VS Code
// 3. Typescript installation - npm install -g typescript
// 4. tsx library installation - npm install tsx
// 5. Playwright intallation - npm init playwright

/*
Inside that directory, you can run several commands:

  npx playwright test
    Runs the end-to-end tests.

  npx playwright test --ui
    Starts the interactive UI mode.

  npx playwright test --project=chromium
    Runs the tests only on Desktop Chrome.

  npx playwright test example
    Runs the tests in a specific file.

  npx playwright test --debug
    Runs the tests in debug mode.

  npx playwright codegen
    Auto generate tests with Codegen.

  We suggest that you begin by typing:

    npx playwright test

    */