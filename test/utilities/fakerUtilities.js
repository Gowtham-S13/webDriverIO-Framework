import { faker } from "@faker-js/faker";

const fakerUtil = {
  generateUserName: () => faker.internet.userName(),
  generateFirstName: () => faker.person.firstName(),
  generateLastName: () => faker.person.lastName(),
  generateCompanyName: () => faker.company.name(),
  generateEmail: () => `test_${faker.string.alphanumeric(5)}@mailinator.com`,
  generateDay: () => faker.number.int({ min: 1, max: 28 }).toString(),
  generateMonth: () => faker.date.month(),
  generateYear: () => faker.number.int({ min: 2010, max: 2020 }).toString(),
  generateMobileNumber: () => faker.string.numeric(10), // Generates a 10-digit number
  generateAddress1: () => faker.location.streetAddress(),
  generateAddress2: () => faker.location.secondaryAddress(),
  generateZipCode: () => faker.location.zipCode(),
  generateCity: () => faker.location.city(),
  generateState: () => faker.location.state(),
  generateCountry: () => faker.location.country(),
};

export default fakerUtil;
