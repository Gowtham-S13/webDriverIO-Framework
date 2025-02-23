import { expect } from "chai";
import { faker } from "@faker-js/faker";

class commonUtilities {
  async waitForElementDisplayed(selector, timeout = 20000) {
    await browser.waitUntil(
      async () => {
        return await $(selector).isDisplayed();
      },
      {
        timeout,
        timeoutMsg: `Element ${selector} not displayed after ${timeout}ms`,
      }
    );
  }

  async clickElement(selector) {
    const element = await $(selector);
    await element.waitForDisplayed();
    await element.click();
  }

  async scrollToElement(selector) {
    const element = await $(selector);
    await element.scrollIntoView();
  }

  async waitForPageLoad(timeout = 60000) {
    try {
      await browser.waitUntil(
        async () => {
          const readyState = await browser.execute(() => document.readyState);
          return readyState === "complete";
        },
        {
          timeout,
          timeoutMsg:
            "Page did not finish loading within the specified timeout",
        }
      );
    } catch (error) {
      console.error("Error occurred while waiting for page to load:", error);
    }
  }

  async assertElementText(selector, expectedText){
    expect(expectedText, "Element text comparision: expected text is empty").to.be.not.equal(undefined);
    await this.waitForElementDisplayed(selector);
    const actualText = await this.getText(selector);
    expect(actualText).to.be.equal(expectedText);
  }

  async getText(selector) {
    const element = await $(selector);
    return await element.getText();
  }

  async hoverOnElement(selector) {
    const element = await $(selector);
    await element.waitForDisplayed();
    await element.moveTo();
  }

  async sendKeys(selector, value) {
    const element = await $(selector);
    await element.waitForDisplayed();
    await element.clearValue();
    await element.setValue(value);
  }

  async isElementDisplayed(selector) {
    const element = await $(selector).isDisplayed();
    expect(element, `${selector} is not displayed`).to.be.true;
  }

  async selectOptionFromDropdown(selector, option) {
    const element = await $(selector);
    await element.selectByVisibleText(option);
  }
}
export default new commonUtilities();
