/**
 * @file Test the Subscription in footer
 */

import { footer } from "../fixtures/data.json";
import { verifyHomePage } from "../Selectors/homePage";
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
    // Scroll down to the Footer
    cy.scrollTo("bottom");
  });

  it("Verify the Subscription title and test the Subscription function", () => {
    const email = "test@test.com"; // test email address
    // Verify the Subscription title
    getSubscriptionTitle().should("be.visible");
    // Submit an email address and verify the success message
    getEmailInputField().type(email);
    getSubmitButton().click();
    getSubscriptionSuccessMsg().should(
      "have.text",
      footer.subscriptionSuccessMsg
    );
  });
});
