/**
 * @file Commont actions for Contact us Page testing
 */

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
