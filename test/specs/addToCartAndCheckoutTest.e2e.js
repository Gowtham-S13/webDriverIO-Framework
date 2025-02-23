import step from "@wdio/allure-reporter";
import landingPage from "../pageobjects/loginPage/landing.page";
import credentials from "../../testData/userDetails.json";
import cartPage from "../pageobjects/cartPage/cartPage";
import productPage from "../pageobjects/productPage/productPage";
import common from "../utilities/commonUtilities";
import { expect } from "chai";
import productDetails from "../../testData/productDetails.json";

describe("Products", () => {
  it("Should add to cart and checkout the products except payment process", async () => {
    step.addStep("When I logged with existing user");
    await landingPage.loginUser(
      credentials.existingUserDetails.userEmail,
      credentials.existingUserDetails.password,
      credentials.existingUserDetails.userName
    );

    step.addStep("And I click products link from landing page");
    await productPage.navigateToProductPage();

    step.addStep("And I select and do add to cart for random two products");
    await productPage.addToCartForRandomFirstProducts();

    step.addStep("And I Navigate to Cart Page");
    await common.clickElement(landingPage.elements.viewCartLink);

    step.addStep("And I do proceed to checkout for cart items");
    const products = await cartPage.proceedToCheckoutForCartItems(1);
    expect(products[0]).to.be.equal(productDetails.product1.dressName);
    expect(products[1]).to.be.equal(productDetails.product1.dressType);
    expect(products[2]).to.be.equal(productDetails.product1.dressRate);

    step.addStep("And I Validate the delivery and billing address");
    await cartPage.validateDeliveryAddressDetails();
    await cartPage.validateBillingAddressDetails();

    step.addStep("Then I click the place order");
    await common.clickElement(cartPage.elements.placeOrderButton);
    await common.waitForElementDisplayed(cartPage.elements.paymentHeaderName);
  });
});
