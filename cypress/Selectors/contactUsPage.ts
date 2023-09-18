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
