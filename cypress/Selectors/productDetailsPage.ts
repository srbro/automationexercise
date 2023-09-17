/**
 * @file Helper functions for getting elements on Product Details page
 */

/**
 * Get the Product Information container
 *
 * @returns Product Information container
 */
export const getProductInformationContainer = () => {
  return cy.get("div .product-information");
};

/**
 * Get the Product name
 *
 * @returns Product name element
 */
export const getProductName = () => {
  return getProductInformationContainer().find("h2");
};

/**
 * Get the Category
 *
 * @returns Category element
 */
export const getCategory = () => {
  return getProductInformationContainer().find("p").contains("Category");
};

/**
 * Get the Product price
 *
 * @returns Price element
 */
export const getProductPrice = () => {
  return getProductInformationContainer().find("span").contains("Rs. ");
};

/**
 * Get the Availability
 *
 * @returns Availability element
 */
export const getAvailability = () => {
  return getProductInformationContainer().find("p").contains("Availability");
};

/**
 * Get the Condition
 *
 * @returns Condition element
 */
export const getCondition = () => {
  return getProductInformationContainer().find("p").contains("Condition");
};

/**
 * Get the Brand
 *
 * @returns Brand element
 */
export const getBrand = () => {
  return getProductInformationContainer().find("p").contains("Brand");
};
