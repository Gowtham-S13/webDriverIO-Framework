import { expect } from "chai";
import common from "../../utilities/commonUtilities";
import page from "../page";
import pageElements from "./cartPage.element";
import userDetails from "../../../testData/userDetails.json";

class cartPage extends page {
  get elements() {
    return pageElements;
  }

  async proceedToCheckoutForCartItems(itemCount) {
    await common.waitForElementDisplayed(pageElements.shoppingCartheaderName);
    await common.isElementDisplayed(pageElements.cartProducts);
    const productDetails = await this.verifyProductDetails(itemCount);
    await common.clickElement(pageElements.proceedToCheckoutButton);
    await common.waitForElementDisplayed(pageElements.checkOutPageHeaderName);
    return productDetails;
  }

  async verifyCartProductCount(item) {
    const products = await $$(pageElements.cartProducts);
    const totalProducts = products.length;
    expect(totalProducts).to.be.equal(item);
  }

  async verifyProductDetails(item) {
    await this.verifyCartProductCount(item);
    const description = await common.getText(pageElements.cartDescription);
    const [dressName, dressType] = description.split("\n");
    const rate = await common.getText(pageElements.cartPrice);
    return [dressName, dressType, rate];
  }

  async getDeliveryAddressDetails() {
    const deliveryDetails = {
      fullName: await common.getText(pageElements.deliveryfullName),
      company: await $$(pageElements.deliveryAddress)[0].getText(),
      address1: await $$(pageElements.deliveryAddress)[1].getText(),
      address2: await $$(pageElements.deliveryAddress)[2].getText(),
      cityStateZip: await common.getText(
        pageElements.deliveryCityStatePostalCode
      ),
      country: await common.getText(pageElements.deliveryCountryName),
      phone: await common.getText(pageElements.deliveryPhoneNumber),
    };
    return deliveryDetails;
  }

  async getBillingAddressDetails() {
    const billingDetails = {
      fullName: await common.getText(pageElements.billingfullName),
      company: await $$(pageElements.billingAddress)[0].getText(),
      address1: await $$(pageElements.billingAddress)[1].getText(),
      address2: await $$(pageElements.billingAddress)[2].getText(),
      cityStateZip: await common.getText(
        pageElements.billingCityStatePostalCode
      ),
      country: await common.getText(pageElements.billingCountryName),
      phone: await common.getText(pageElements.billingPhoneNumber),
    };
    return billingDetails;
  }

  async validateDeliveryAddressDetails(){
    const deliveryAddressDetails = await this.getDeliveryAddressDetails();
    const state = userDetails.existingUserDetails.state;
    const city = userDetails.existingUserDetails.city;
    const pinCode = userDetails.existingUserDetails.postCode;
    expect(deliveryAddressDetails.fullName).to.be.equal(`Mr. ${userDetails.existingUserDetails.fullName}`);
    expect(deliveryAddressDetails.company).to.be.equal(userDetails.existingUserDetails.company);
    expect(deliveryAddressDetails.address1).to.be.equal(userDetails.existingUserDetails.address1);
    expect(deliveryAddressDetails.address2).to.be.equal(userDetails.existingUserDetails.address2);
    expect(deliveryAddressDetails.country).to.be.equal(userDetails.existingUserDetails.country);
    expect(deliveryAddressDetails.cityStateZip).to.be.equal(`${city} ${state} ${pinCode}`);
    expect(deliveryAddressDetails.phone).to.be.equal(userDetails.existingUserDetails.phone);
  }

  async validateBillingAddressDetails(){
    const billingAddressDetails = await this.getBillingAddressDetails();
    const state = userDetails.existingUserDetails.state;
    const city = userDetails.existingUserDetails.city;
    const pinCode = userDetails.existingUserDetails.postCode;
    expect(billingAddressDetails.fullName).to.be.equal(`Mr. ${userDetails.existingUserDetails.fullName}`);
    expect(billingAddressDetails.company).to.be.equal(userDetails.existingUserDetails.company);
    expect(billingAddressDetails.address1).to.be.equal(userDetails.existingUserDetails.address1);
    expect(billingAddressDetails.address2).to.be.equal(userDetails.existingUserDetails.address2);
    expect(billingAddressDetails.country).to.be.equal(userDetails.existingUserDetails.country);
    expect(billingAddressDetails.cityStateZip).to.be.equal(`${city} ${state} ${pinCode}`);
    expect(billingAddressDetails.phone).to.be.equal(userDetails.existingUserDetails.phone);
  }
}
export default new cartPage();
