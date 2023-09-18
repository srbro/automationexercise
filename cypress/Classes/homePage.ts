import {
  getLeftSideBar,
  getRecommendedItems,
  getSliderSection,
} from "../Selectors/homePage";
import { homeUrl } from "../fixtures/data.json";

/**
 * @file Commont actions for Home Page testing
 */

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
