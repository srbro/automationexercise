/**
 * @file Contact us form test
 */

import { contactUsPage } from "../fixtures/data.json";
import { getContactUsButton } from "../Selectors/header";
import { verifyHomePage } from "../Selectors/homePage";
import {
  getGetInTouchTitle,
  getInputField,
  getUploadFileButton,
  getSuccessMsg,
  getHomeButtonSuccess,
} from "../Selectors/contactUsPage";

describe("Test Contact us form", () => {
  before(() => {
    // Go to the landing page and verify it's a home page
    cy.visit("/");
    verifyHomePage();
    // Go to the Contact us page
    getContactUsButton().click();
    cy.url().should("eql", contactUsPage.url);
  });

  it("Check Title, submit a form and verify Success message alert is visible", () => {
    // Verify the title GET IN TOUCH
    getGetInTouchTitle().should("be.visible");
    // Fill-in all the text input fields
    getInputField("name").type("Mike Myson");
    getInputField("email").type("mike@mison.com");
    getInputField("subject").type("Some subject");
    getInputField("message").type(
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,"
    );
    // Upload a file
    getUploadFileButton().selectFile("cypress/fixtures/example.json");
    getInputField("submit-button").click();
    // Verify the Success message alert
    getSuccessMsg()
      .should("be.visible")
      .and("have.text", contactUsPage.submitSuccessMsg);
    // Test the Home button, after successful form submission
    getHomeButtonSuccess().click();
    verifyHomePage();
  });
});
