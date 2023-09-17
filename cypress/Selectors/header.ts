/**
 * @file Helper functions for getting elements in Header / Navigation bar
 */

/**
 * Get the Logo
 *
 * @returns Logo element
 */
export const getLogo = () => {
  return cy.get(".logo");
};

/**
 * Get the Navigation bar container
 *
 * @returns Nav bar element
 */
export const getNavBar = () => {
  return cy.get(".navbar-nav");
};

/**
 * Get the Contact us button, in the nav bar
 *
 * @returns Contact us button
 */
export const getContactUsButton = () => {
  return getNavBar().find("li").contains("Contact us");
};

/**
 * Get the Test Cases button, in the nav bar
 *
 * @returns Test Cases button
 */
export const getTestCasesButton = () => {
  return getNavBar().find("li").contains("Test Cases");
};

/**
 * Get the Products button, in the nav bar
 *
 * @returns Products button
 */
export const getProductsButton = () => {
  return getNavBar().find("li").contains("Products");
};
