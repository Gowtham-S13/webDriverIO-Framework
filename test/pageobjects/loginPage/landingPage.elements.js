class landingPageElements {
  get loginHeaderName() {
    return "//h2[contains(text(),'Login to your account')]";
  }
  get signUpHeaderName() {
    return "//h2[contains(text(),'New User Signup!')]";
  }
  get nameTextbox() {
    return "//input[@data-qa = 'signup-name']";
  }
  get registerEmailTextbox() {
    return "//input[@data-qa = 'signup-email']";
  }
  get signUpButton() {
    return "//button[@data-qa = 'signup-button']";
  }
  get userNameTextbox() {
    return "//input[@data-qa = 'login-email']";
  }
  get passwordTextbox() {
    return "//input[@data-qa = 'login-password']";
  }
  get loginButton() {
    return "//button[@data-qa='login-button']";
  }
  get signUpOrLoginLink() {
    return "//a[@href = '/login']";
  }
  get loggedUserText() {
    return "//*[@class = 'fa fa-user']/following::b";
  }
  get logoutUser() {
    return "//a[@href = '/logout']";
  }
  get viewCartLink() {
    return "//a[@href='/view_cart']";
  }
  get productLinks() {
    return "//a[@href='/products']";
  }
}
export default new landingPageElements();
