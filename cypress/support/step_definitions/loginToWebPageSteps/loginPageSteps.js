import {Before,Given, When, Then, After} from "cypress-cucumber-preprocessor/steps"
import loginBankActions from "../../../e2e/PageObjectModel/pageActions/loginToWebPageActions";

const loginBankCall = new loginBankActions();

Given('I navigate to the bank website page', () => {
    loginBankCall.navigateToLoginBank();
});