/**
 * @file Helper functions for getting elements on Products page
 */

/**
 * Get the h2 All Products
 *
 * @returns h2 element
 */
export const getAllProductsTitle = () => {
  return cy.get("h2").contains("All Products");
};

/**
 * Get Features Items container
 *
 * @returns Product list container element
 */
export const getFeaturesItemsContainer = () => {
  return cy.get("div .features_items");
};

/**
 * Get All Products divs
 *
 * @returns List of Product elements
 */
export const getListOfProducts = () => {
  return cy.get("div .single-products");
};

/**
 * Get the View Product button
 *
 * @returns View Product button element
 */
export const getViewProduct = () => {
  return cy.get("a").contains("View Product");
};

/**
 * Get the Search input field
 *
 * @returns Search field element
 */
export const getSearchInputField = () => {
  return cy.get("input[placeholder='Search Product']");
};

/**
 * Get the Search button
 *
 * @returns Search button element
 */
export const getSearchButton = () => {
  return cy.get("button#submit_search");
};
