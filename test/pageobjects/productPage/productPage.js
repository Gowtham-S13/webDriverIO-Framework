import common from "../../utilities/commonUtilities";
import landingPage from "../loginPage/landing.page";
import page from "../page";
import pageElements from "./productPage.element";

class productPage extends page {
  get elements() {
    return pageElements;
  }

  async addToCartForRandomFirstProducts() {
    const addToCartButtons = await $$(pageElements.addToCartButton); // Get all buttons
    await common.scrollToElement(addToCartButtons[0]);
    await addToCartButtons[0].click();
    await common.waitForElementDisplayed(pageElements.addedSuccessMessage);
    await common.isElementDisplayed(pageElements.addedSuccessMessage);
    await common.clickElement(pageElements.continueShoppingButton);
  }

  async navigateToProductPage() {
    await common.clickElement(landingPage.elements.productLinks);
  }
}
export default new productPage();
