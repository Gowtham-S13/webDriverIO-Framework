import step from "@wdio/allure-reporter";
import common from "../../utilities/commonUtilities";
import landingPage from "../loginPage/landing.page.js";
import pageElements from "./registerPage.element.js";

class registerPage {
  get elements() {
    return pageElements;
  }

  async registerNewAccount(
    userName,
    email,
    gender = true,
    password,
    day,
    month,
    year,
    firstName,
    lastName,
    company,
    address1,
    address2,
    country,
    state,
    city,
    zipcode,
    mobileNumber
  ) {
    step.addStep("Given I open the website");
    await landingPage.open();
    await common.waitForPageLoad();

    step.addStep("When I click SignIn/SignUp link");
    await common.clickElement(landingPage.elements.signUpOrLoginLink);

    step.addStep("And I fill in personal details");
    await common.sendKeys(landingPage.elements.nameTextbox, userName);
    await common.sendKeys(landingPage.elements.registerEmailTextbox, email);
    await common.clickElement(landingPage.elements.signUpButton);
    await common.waitForElementDisplayed(pageElements.accountInformationHeader);
    gender
      ? await common.clickElement(pageElements.mrRadioButton)
      : await common.clickElement(pageElements.mrsRadioButton);
    await common.sendKeys(pageElements.passwordTextbox, password);
    await common.scrollToElement(pageElements.dayDropdown);
    await common.selectOptionFromDropdown(pageElements.dayDropdown, day);
    await common.selectOptionFromDropdown(pageElements.monthDropdown, month);
    await common.selectOptionFromDropdown(pageElements.yearDropdown, year);
    await common.sendKeys(pageElements.firstNameTextbox, firstName);
    await common.sendKeys(pageElements.lastNameTextbox, lastName);
    await common.sendKeys(pageElements.companyTextbox, company);
    await common.sendKeys(pageElements.address1Textbox, address1);
    await common.sendKeys(pageElements.address2Textbox, address2);
    await common.selectOptionFromDropdown(
      pageElements.countryDropdown,
      country
    );
    await common.sendKeys(pageElements.stateTextbox, state);
    await common.sendKeys(pageElements.cityTextbox, city);
    await common.sendKeys(pageElements.zipcodeTextbox, zipcode);
    await common.sendKeys(pageElements.mobileNumberTextbox, mobileNumber);

    step.addStep("And I click create account button");
    await common.clickElement(pageElements.createAccountButton);

    step.addStep("And I verify success messages after create account");
    await common.waitForElementDisplayed(pageElements.successMessage1);
    await common.isElementDisplayed(pageElements.successMessage1);
    await common.isElementDisplayed(pageElements.successMessage2);
    await common.isElementDisplayed(pageElements.successMessage3);

    step.addStep("And I click continue button");
    await common.clickElement(pageElements.continueButton);
  }
}
export default new registerPage();
