import {Before,Given, When, Then, After} from "cypress-cucumber-preprocessor/steps"
import searchGoogleActions from "../../../e2e/PageObjectModel/pageActions/searchGoogleActions";

const searchGoogleCall = new searchGoogleActions();

Given('I navigate to the google page', () => {
    searchGoogleCall.navigateToGoogle();
});