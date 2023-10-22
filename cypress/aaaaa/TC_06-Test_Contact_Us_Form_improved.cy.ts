/**
 * @file Contact us form test
 */

import { contactUsPage } from "../fixtures/data.json";
import { getContactUsButton } from "../Selectors/header";
import { verifyHomePage } from "../Classes/homePage";
import {
  getGetInTouchTitle,
  getUploadFileButton,
  getSuccessMsg,
  getHomeButtonSuccess,
} from "../Selectors/contactUsPage";
import { getInputField } from "../Classes/contactUsPage";

describe("Test Contact us form", () => {
  before(() => {
    // Go to the landing page and verify it's a home page
    cy.visit("/");
    verifyHomePage();
  });

  beforeEach(() => {
    // Go to the Contact us page and verify the url
    cy.visit("/");
    getContactUsButton().click();
    cy.url().should("eql", contactUsPage.url);
  });

  it("Verify the page title", () => {
    getGetInTouchTitle().should("be.visible");
  });

  it("Submit a form and verify Success message alert is visible", () => {
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
    getUploadFileButton().selectFile("cypress/fixtures/example.json"); // getUploadFileButton() is getting the Input element. Click on a button is impossible, since it's not visible in DOM.
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
