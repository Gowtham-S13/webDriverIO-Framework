import pageElements from "./landingPage.elements.js";
import Page from "../page.js";
import common from "../../utilities/commonUtilities.js";
import { expect } from "chai";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class langingPage extends Page {
  get elements() {
    return pageElements;
  }

  async loginUser(email, password, userName) {
    await this.open();
    await common.clickElement(pageElements.signUpOrLoginLink);
    await common.waitForElementDisplayed(pageElements.loginHeaderName);
    await common.sendKeys(pageElements.userNameTextbox, email);
    await common.sendKeys(pageElements.passwordTextbox, password);
    await common.clickElement(pageElements.loginButton);
    await common.waitForElementDisplayed(pageElements.loggedUserText);
    const expectedLoggedUser = await common.getText(
      pageElements.loggedUserText
    );
    expect(expectedLoggedUser).to.equal(userName);
  }

  async logoutUser() {
    await common.waitForElementDisplayed(pageElements.logoutUser);
    await common.clickElement(pageElements.logoutUser);
    await common.waitForElementDisplayed(pageElements.loginHeaderName);
  }

  /**
   * overwrite specific options to adapt it to page object
   */
  open() {
    return super.open("login");
  }
}

export default new langingPage();
