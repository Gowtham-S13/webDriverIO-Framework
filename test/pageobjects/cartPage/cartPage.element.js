class cartPageElements {
  get shoppingCartheaderName() {
    return "//li[contains(text(), 'Shopping Cart')]";
  }
  get proceedToCheckoutButton() {
    return "//a[contains(text(), 'Proceed To Checkout')]";
  }
  get cartProducts() {
    return ".cart_product";
  }
  get cartDescription() {
    return ".cart_description";
  }
  get cartPrice() {
    return ".cart_price";
  }
  get cartTotalPrice() {
    return ".cart_total_price";
  }
  get checkOutPageHeaderName() {
    return "//li[contains(text(), 'Checkout')]";
  }
  get deliveryAddressDetails() {
    return "#address_delivery";
  }
  get deliveryfullName() {
    return "#address_delivery li.address_firstname.address_lastname";
  }
  get deliveryAddress() {
    return "#address_delivery li.address_address1.address_address2";
  }
  get deliveryCityStatePostalCode() {
    return "#address_delivery li.address_city.address_state_name.address_postcode";
  }
  get deliveryCountryName() {
    return "#address_delivery li.address_country_name";
  }
  get deliveryPhoneNumber() {
    return "#address_delivery li.address_phone";
  }
  get billingAddressDetails() {
    return "#address_invoice";
  }
  get billingfullName() {
    return "#address_invoice li.address_firstname.address_lastname";
  }
  get billingAddress() {
    return "#address_invoice li.address_address1.address_address2";
  }
  get billingCityStatePostalCode() {
    return "#address_invoice li.address_city.address_state_name.address_postcode";
  }
  get billingCountryName() {
    return "#address_invoice li.address_country_name";
  }
  get billingPhoneNumber() {
    return "#address_invoice li.address_phone";
  }
  get placeOrderButton() {
    return "//a[@href='/payment']";
  }
  get paymentHeaderName() {
    return "//h2[contains(text(), 'Payment')]";
  }
}
export default new cartPageElements();
