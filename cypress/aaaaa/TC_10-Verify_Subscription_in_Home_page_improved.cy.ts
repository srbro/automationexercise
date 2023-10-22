/**
 * @file Test the Subscription in footer
 */

import { footer } from "../fixtures/data.json";
import { verifyHomePage } from "../Classes/homePage";
import {
  getSubscriptionTitle,
  getEmailInputField,
  getSubmitButton,
  getSubscriptionSuccessMsg,
} from "../Selectors/footer";

describe("Verify the Home and Test the Subscription function in Footer", () => {
  before(() => {
    // Go to the landing page and verify it's a home page
    cy.visit("/");
    verifyHomePage();
  });

  beforeEach(() => {
    // Go to the Landing page and scroll to the bottom
    cy.visit("/");
    cy.scrollTo("bottom");
  });

  it("Verify the Subscription title", () => {
    getSubscriptionTitle().should("be.visible");
  });

  it("Test the Subscription function", () => {
    const email = "test@test.com"; // test email address
    // Submit an email address and verify the success message
    getEmailInputField().type(email);
    getSubmitButton().click();
    getSubscriptionSuccessMsg().should(
      "have.text",
      footer.subscriptionSuccessMsg
    );
  });
});
