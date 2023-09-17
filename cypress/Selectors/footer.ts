/**
 * @file Helper functions for getting elements in Footer
 */

/**
 * Get the Footer container
 *
 * @returns Footer element
 */
export const getFooter = () => {
  return cy.get("footer");
};

/**
 * Get the Subscription title
 *
 * @returns Subsciption title element
 */
export const getSubscriptionTitle = () => {
  return getFooter().find("h2").contains("Subscription");
};

/**
 * Get the Subscription Email input field
 *
 * @returns Email input field
 */
export const getEmailInputField = () => {
  return getFooter()
    .find("form")
    .find("input[placeholder='Your email address']");
};

/**
 * Get the Subscribe submit button
 *
 * @returns Subscribe submit button element
 */
export const getSubmitButton = () => {
  return getFooter().find("form").find("button#subscribe");
};

/**
 * Get the Subscription success message
 *
 * @returns Subscritpion success message element
 */
export const getSubscriptionSuccessMsg = () => {
  return getFooter().find("div .alert-success");
};
