import { expect } from "chai";
import step from "@wdio/allure-reporter";
import registerPage from "../pageobjects/registerPage/registerPage.js";
import common from "../utilities/commonUtilities.js";
import fakerUtil from "../utilities/fakerUtilities.js";
import landingPage from "../pageobjects/loginPage/landing.page.js";

describe("Register Account", () => {
  it("Should register new account with new user mail and personal details", async () => {
    const userData = {
      userName: fakerUtil.generateUserName(),
      email: fakerUtil.generateEmail(),
      password: "Test@123",
      day: fakerUtil.generateDay(),
      month: fakerUtil.generateMonth(),
      year: fakerUtil.generateYear(),
      firstName: fakerUtil.generateFirstName(),
      lastName: fakerUtil.generateLastName(),
      company: fakerUtil.generateCompanyName(),
      address1: fakerUtil.generateAddress1(),
      address2: fakerUtil.generateAddress2(),
      country: "India",
      state: fakerUtil.generateState(),
      city: fakerUtil.generateCity(),
      zipcode: fakerUtil.generateZipCode(),
      mobileNumber: fakerUtil.generateMobileNumber(),
    };

    step.addStep("Register new user with personal details");
    await registerPage.registerNewAccount(
      userData.userName,
      userData.email,
      true,
      userData.password,
      userData.day,
      userData.month,
      userData.year,
      userData.firstName,
      userData.lastName,
      userData.company,
      userData.address1,
      userData.address2,
      userData.country,
      userData.state,
      userData.city,
      userData.zipcode,
      userData.mobileNumber
    );

    step.addStep("Then I should see my name on the landing page");
    const expectedLoggedUser = await common.getText(
      landingPage.elements.loggedUserText
    );
    expect(expectedLoggedUser).to.equal(userData.userName);

    step.addStep("Then I logout the user");
    await landingPage.logoutUser();
  });
});
