class registerPageElement {
  get accountInformationHeader() {
    return "//b[contains(text(), 'Enter Account Information')]";
  }
  get mrRadioButton() {
    return "#id_gender1";
  }
  get mrsRadioButton() {
    return "#id_gender2";
  }
  get nameTextbox() {
    return "#name";
  }
  get emailTextbox() {
    return "#email";
  }
  get passwordTextbox() {
    return "#password";
  }
  get dayDropdown() {
    return "#days";
  }
  get monthDropdown() {
    return "#months";
  }
  get yearDropdown() {
    return "#years";
  }
  get firstNameTextbox() {
    return "#first_name";
  }
  get lastNameTextbox() {
    return "#last_name";
  }
  get companyTextbox() {
    return "#company";
  }
  get address1Textbox() {
    return "#address1";
  }
  get address2Textbox() {
    return "#address2";
  }
  get countryDropdown() {
    return "#country";
  }
  get stateTextbox() {
    return "#state";
  }
  get cityTextbox() {
    return "#city";
  }
  get zipcodeTextbox() {
    return "#zipcode";
  }
  get mobileNumberTextbox() {
    return "#mobile_number";
  }
  get createAccountButton() {
    return "//button[@data-qa = 'create-account']";
  }
  get successMessage1() {
    return "//b[contains(text(), 'Account Created!')]";
  }
  get successMessage2() {
    return "//p[contains(text(), 'Congratulations! Your new account has been successfully created!')]";
  }
  get successMessage3() {
    return "//p[contains(text(), 'You can now take advantage of member privileges to enhance your online shopping experience with us.')]";
  }
  get continueButton() {
    return "//a[@data-qa='continue-button']";
  }
}
export default new registerPageElement();
