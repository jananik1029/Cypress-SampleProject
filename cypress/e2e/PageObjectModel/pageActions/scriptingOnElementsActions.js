/// <reference types="cypress" />

import elements from "../pageElements/scriptingElements"

class scriptWebPageActions {

    navigateToFormPage() {
        cy.visit(elements.demoQaPage)
    }

    verifyHeader(name) {
        cy.xpath("(//div[@class='card-body']//h5)[1]").should('have.text', name)
    }

    clickForm(name) {
        cy.xpath("//div[@class='card-body']//h5[text()='Forms']").click({ force: true })
        cy.xpath("//span[text()='Practice Form']").click({ force: true })
    }

    fillForm(firstName, lastName, emailAddress, gender, mobileNumber, dateOfBirth, subjects, hobbies, currentAddress, state, city) {
        cy.xpath(elements.firstName).type(firstName)
        cy.xpath(elements.lastName).type(lastName)
        cy.xpath(elements.emailAddress).type(emailAddress)
        cy.xpath("//input[@name='gender']//parent::div//label[text()='" + gender + "']").click({ force: true })
        cy.xpath(elements.mobileNumber).type(mobileNumber)
        cy.xpath(elements.dateOfBirth).click({ force: true })
        cy.xpath("//div[contains(@class,' react-datepicker__day--selected react-datepicker__day--today')]").click({ force: true })
        cy.xpath(elements.subjects).type(subjects)
        cy.xpath("//input[@id='hobbies-checkbox-1']//parent::div//label[text()='" + hobbies + "']").click({ force: true })
        cy.xpath(elements.currentAddress).type(currentAddress)
        cy.xpath(elements.selectState).click({ force: true })
        cy.xpath("//div[text()='" + state + "']").click({ force: true })
        cy.xpath(elements.selectCity).click({ force: true })
        cy.xpath("//div[text()='" + city + "']").click({ force: true })
    }

    clickButton(btn) {
        cy.wait(1000)
        cy.xpath("//button[text()='" + btn + "']").click({ force: true })
    }
}

export default scriptWebPageActions;