import { homeUrl } from "../fixtures/data.json";

/**
 * @file Helper functions for getting elements on Home page
 */

/**
 * Get Section Slider
 *
 * @returns Slider section element
 */
export const getSliderSection = () => {
  return cy.get("section#slider");
};

/**
 * Get Left Side Bar container
 *
 * @returns Left Side Bar element
 */
export const getLeftSideBar = () => {
  return cy.get("div .left-sidebar");
};

/**
 * Get Left Recommended Items container
 *
 * @returns Recommended Items element
 */
export const getRecommendedItems = () => {
  return cy.get("div .recommended_items");
};

/**
 * Verify several sections on Home Page
 *
 */
export const verifyHomePage = () => {
  cy.url().should("eql", homeUrl);
  getSliderSection().should("be.visible");
  getLeftSideBar().should("be.visible");
  getRecommendedItems().should("be.visible");
};
