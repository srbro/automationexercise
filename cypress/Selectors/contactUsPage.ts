/**
 * @file Helper functions for getting elements on Contact us page
 */

/**
 * Get the h2 Get In Touch
 *
 * @returns h2 element
 */
export const getGetInTouchTitle = () => {
  return cy.get("h2").contains("Get In Touch");
};

/**
 * Get the input field, in contact form, by passing the name of the field
 *
 * @param   fieldName can be: name, email, subject, message or submit-button
 * @returns desired input element
 */
export function getInputField(
  fieldName: string
): Cypress.Chainable<JQuery<HTMLHeadingElement>> {
  return cy.get("#contact-us-form").find("[data-qa=" + fieldName + "]");
}

/**
 * Get Upload file input element
 *
 * @returns Upload file input element
 */
export const getUploadFileButton = () => {
  return cy.get("#contact-us-form").find("input[type='file']");
};

/**
 * Get the Success message
 *
 * @returns Success message element
 */
export const getSuccessMsg = () => {
  return cy.get(".contact-form").find(".alert-success");
};

/**
 * Get the Home button after successful form submission
 *
 * @returns Success submission Home button element
 */
export const getHomeButtonSuccess = () => {
  return cy.get(".btn-success");
};
