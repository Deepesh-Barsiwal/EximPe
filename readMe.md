
# Project Title - EximPe

## Installation

To install the project, follow the steps below
 Perquiste :
  Node js should be set up on system , download from below url
 ```bash
 https://nodejs.org/en/
 ```
 Steps to run project
1. clone the project with below command
```
git clone https://github.com/Deepesh-Barsiwal/EximPe.git
```

Steps To install dependencies of project
  ```bash
  1. Open the new vscode terminal
  ```
Execute :
  ```bash
  2. npm i
  ```

  ## Commands to execute test 
 To run test files in headed mode with test runner
```bash
npx cypress open
```

To run test files in headed mode without test runner

```bash
npx cypress run --browser chrome --headed --spec 'cypress/e2e/*.cy.js'
```

To run test files in headless mode

```bash
npx cypress run --browser chrome --spec 'cypress/e2e/*.cy.js'
```
## Folder Structure

```bash
cypress-project/
  ├── cypress/
  │   ├── fixtures/
  │   │   └── data.json
  │   ├── e2e/
  |   |     └── *.cy.js
  |   |     └── page objects
  │   │           └── homePage.js
  |   |                    
  │   └── support/     
  │       ├── commands.js
  │       └── e2e.js
  ├── node_modules/
  ├── .gitignore
  ├── cypress.config.json
  ├── package-lock.json
  └── package.json
```

  The cypress directory contains all the test files and configuration for Cypress. Here's what each directory contains:


fixtures: contains data used by tests, such as JSON or CSV files.

e2e: contains the actual tests written in javaScript files.

support: contains javaScript files that can be used to write custom commands or hooks.

## Cypress Configuration

The cypress.config.json file contains configuration options for cypress. You can set various options such as the base URL for the application, the viewport size, and much more.
## Writing Tests

Tests are written using cypress's built-in testing framework. To write a test, create a new file in the cypress/e2e directory and use the describe and it functions to define your test suites and test cases

```bash
describe('Example test suite', () => {
  it('Example test case', () => {
    // Test code goes here
  })
})
```

You can use various cypress commands such as cy.visit(), cy.get(), cy.click(), and many more to interact with the application and perform actions.