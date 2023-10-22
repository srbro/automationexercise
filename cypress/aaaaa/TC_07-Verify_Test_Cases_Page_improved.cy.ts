/**
 * @file Test Cases page test
 */

import { testCasesPage } from "../fixtures/data.json";
import { verifyHomePage } from "../Classes/homePage";
import { getTestCasesButton } from "../Selectors/header";
import { getTestCasesTitle } from "../Selectors/testCasesPage";

describe("Test Contact us form", () => {
  before(() => {
    // Go to the landing page and verify it's a home page
    cy.visit("/");
    verifyHomePage();
  });

  beforeEach(() => {
    // Go to the Test Cases page and verify the url
    cy.visit("/");
    getTestCasesButton().click();
    cy.url().should("eql", testCasesPage.url);
  });

  it("Verify the page title", () => {
    getTestCasesTitle().should("be.visible");
  });

  it("Verify the list of test cases", () => {
    cy.get("u").each((item, i) => {
      const text = item.html();
      if (text.includes("Test Case")) {
        expect(text).contain("Test Case " + (i + 1));
      }
      // console.log("item: ", item.html());
    });
  });
});
