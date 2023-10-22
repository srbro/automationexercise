/**
 * @file Test if All Products and product detail page are visible
 */

import { productsPage, productDetailsPage } from "../fixtures/data.json";
import { verifyHomePage } from "../Classes/homePage";
import { getProductsButton } from "../Selectors/header";
import {
  getAllProductsTitle,
  getListOfProducts,
  getViewProduct,
} from "../Selectors/productsPage";
import {
  getProductName,
  getCategory,
  getProductPrice,
  getAvailability,
  getCondition,
  getBrand,
} from "../Selectors/productDetailsPage";

describe("Test Products and Product Details pages", () => {
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

  it("Verify the products list", () => {
    // Check if there are more than 30 products and each has a name as a string and a price that starts with "Rs. "
    getListOfProducts()
      .each((product, i) => {
        expect(product.find("p").text()).be.a("string").and.not.empty;
        expect(product.find("h2").text()).contains("Rs. ");
      })
      .and("have.length.above", 30);
  });

  it("Verify the Product details page", () => {
    const productNumber = 1; // Set the order number of a product in the list of products
    let productName = "";
    let productPrice = "";

    // Save the Product name and price, in the Products page, to compare it to the ones in the Product Details page
    getListOfProducts()
      .eq(productNumber - 1)
      .then((product) => {
        productName = product.find("p").eq(0).text();
        productPrice = product.find("h2").eq(0).text();
      })
      // Click the View Product button
      .siblings()
      .within(() => {
        getViewProduct().click();
      });
    // Verify the url of a Product Details page
    cy.url().should("eql", productDetailsPage.url + productNumber);
    // Verify that product name and price, on Product Details page, match the ones in a Products page, for the same product
    getProductName().then((el) => {
      expect(el.text()).eql(productName);
    });
    getProductPrice().then((el) => {
      expect(el.text()).eql(productPrice);
    });
    // Verify that details are visible: category, availability, condition, brand
    getCategory().should("be.visible");
    getAvailability().should("be.visible");
    getCondition().should("be.visible");
    getBrand().should("be.visible");
  });
});
