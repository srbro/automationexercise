# README

## automationexercise repository

- Contains automated tests for https://automationexercise.com/
- Uses Cypress

## Setting up

This document is covering the necessary steps to set Cypress and describes the architecture.  
For additional help and resources, see [official documentation](https://docs.cypress.io/guides/getting-started/installing-cypress#System-requirements)

- Make sure you have node and npm installed (`brew install node`)
- Clone the repository (`git clone https://github.com/srbro/automationexercise.git`)
- Install dependencies (`npm install`)

## Running tests

GUI Interface: `npm test`
Headless mode: `npx cypress run`

## Recommended extensions

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) Enable ESLint right in the editor
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) Automatically format code on file save
- [Prettier ESLint](https://marketplace.visualstudio.com/items?itemName=rvest.vs-code-prettier-eslint) Make Prettier read ESLint config, and format the files accordingly

## TypeScript

- The project is written in TypeScript, to allow for easier debugging.
- To get familiar, check out the official [Handbook](https://www.typescriptlang.org/docs/handbook/intro.html).
  `tsconfig.json` specifies `es5`

## Tests

- Purpose: Containing test cases, for execution
- Defined in: `cypress/e2e/*cy.ts` files

## Classes

- Purpose: Helper functions, with multiple actions, on a page, in test
- Defined in: `cypress/Classes/*.ts` files
- Used by: tests `cypress/e2e/*cy.ts`

## Selectors

- Purpose: POM -> To hold html locators, in order to have one place for maintaining
- Defined in: `cypress/Selectors/*.ts` files
- Used by: tests and classes

## Data

- Purpose: Hold various info, in JSON, like a `url` or a `message` text
- Defined in: `cypress/fixtures/data.json`
- Used by: tests, classes ans selectors
