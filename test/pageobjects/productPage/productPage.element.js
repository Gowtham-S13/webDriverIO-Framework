class productPageElements {
  get addToCartButton() {
    return "a.add-to-cart";
  }
  get addedSuccessMessage() {
    return "//h4[contains(text(), 'Added!')]";
  }
  get AddedToCartSuccessMessage() {
    return "//p[contains(text(), 'Your product has been added to cart.')]";
  }
  get continueShoppingButton() {
    return "//button[contains(text(), 'Continue Shopping')]";
  }
}
export default new productPageElements();
