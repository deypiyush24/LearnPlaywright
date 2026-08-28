export const loginTestData = [
  {
    scenario: "Valid credentials",
    username: "practice",
    password: "SuperSecretPassword!",
    expectedMessage: "You logged into a secure area!"
  },
  {
    scenario: "Invalid username",
    username: "wrong_user",
    password: "SuperSecretPassword!",
    expectedMessage: "Your username is invalid!"
  },
  {
    scenario: "Invalid password",
    username: "practice",
    password: "WrongPassword!",
    expectedMessage: "Your password is invalid!"
  }
];