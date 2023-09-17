/**
 * @file Helper functions for getting elements on Test Cases page
 */

/**
 * Get the h2 Test Cases
 *
 * @returns h2 element
 */
export const getTestCasesTitle = () => {
  return cy.get("h2").contains("Test Cases");
};
