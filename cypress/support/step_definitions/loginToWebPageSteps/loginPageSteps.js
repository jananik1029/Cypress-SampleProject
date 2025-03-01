import {Before,Given, When, Then, After} from "cypress-cucumber-preprocessor/steps"
import loginBankActions from "../../../e2e/PageObjectModel/pageActions/loginToWebPageActions";

const loginBankCall = new loginBankActions();

Given('I navigate to the bank website page', () => {
    loginBankCall.navigateToLoginBank();
});

Then('I enter the customer login as {string}', (name) => {
    loginBankCall.enterCustomerLogin(name);
});

And('I click {string} button', (btn) => {
    loginBankCall.clickButton(btn);
});

And('I verify the page landed on {string} customer page', (name) => {
    loginBankCall.verifyCustomerLandedPage(name);
});