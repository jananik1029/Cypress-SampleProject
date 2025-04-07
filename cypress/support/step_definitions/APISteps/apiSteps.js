import { Given, When, Then, After } from "cypress-cucumber-preprocessor/steps"
import apiActions from "../../../e2e/PageObjectModel/pageActions/ApiActions"

const apiCall = new apiActions();

Then('I fill the student registration form using api', () => {
    apiCall.fillFormApi()
});