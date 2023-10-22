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
  });

  beforeEach(() => {
    // Go to the Products page and verify the url
    cy.visit("/");
    getProductsButton().click();
    cy.url().should("eql", productsPage.url);
  });

  it("Verify the page title", () => {
    getAllProductsTitle().should("be.visible");
  });

  it("Test the Search function", () => {
    const searchTerm = "Green"; // Name of the product to be searched for
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
