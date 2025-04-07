import { Before, Given, When, Then, After } from "cypress-cucumber-preprocessor/steps"
import scriptWebPageActions from "../../../e2e/PageObjectModel/pageActions/scriptingOnElementsActions"


const scriptFormCall = new scriptWebPageActions();


Given('I navigate to the demo QA website page', () => {
    scriptFormCall.navigateToFormPage();
});

When('I Verify the page conatins {string} as header', (name) => {
    scriptFormCall.verifyHeader(name);
});

And('I click on the {string} header', (name) => {
    scriptFormCall.clickForm(name);
});

When('I fill the form', (datatable) => {
    datatable.hashes().forEach(element => {
        scriptFormCall.fillForm(element.firstName,element.lastName,element.emailAddress,element.gender,element.mobileNumber,element.dateOfBirth,element.subjects,element.hobbies,element.currentAddress,element.state,element.city);
    });
});

And('I click {string} button', (btn) => {
    scriptFormCall.clickButton(btn)
});