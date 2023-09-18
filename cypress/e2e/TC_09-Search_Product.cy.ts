/**
 * @file Test the Search function on Products page
 */

import { productsPage } from "../fixtures/data.json";
import { verifyHomePage } from "../Classes/homePage";
import { getProductsButton } from "../Selectors/header";
import {
  getAllProductsTitle,
  getListOfProducts,
  getSearchInputField,
  getSearchButton,
} from "../Selectors/productsPage";

describe("Verify the Home and Products pages and test the Search function", () => {
  before(() => {
    // Go to the landing page and verify it's a home page
    cy.visit("/");
    verifyHomePage();
    // Go to the Products page
    getProductsButton().click();
  });

  it("Verify Products page and test the Search function", () => {
    const searchTerm = "green"; // Name of the product to be searched for
    // Verify the Products page url
    cy.url().should("eql", productsPage.url);
    // Verify the page title is visible
    getAllProductsTitle().should("be.visible");
    // Type in the Search field the search term and click Search button
    getSearchInputField().type(searchTerm);
    getSearchButton().click();
    // Check if all search results are visible and contain the search term
    getListOfProducts().each((product) => {
      cy.wrap(product).should("be.visible");
      expect(product.find("p").eq(0).text().toLowerCase()).include(searchTerm);
    });
  });
});
