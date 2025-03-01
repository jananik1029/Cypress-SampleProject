 /// <reference types="cypress" />

import elements from "../pageElements/loginElements"

class loginBankActions {

  navigateToLoginBank() {
    cy.visit(elements.visit)
    cy.xpath(elements.checkPageHeader).should('include.text', 'GlobalSQA')
    cy.xpath(elements.clickTesthub).trigger('mouseover').wait(1000)
    cy.xpath(elements.hoverAngularJS).trigger('mouseover').wait(1000)
    cy.xpath(elements.clickBankingProject).click({ force: true }).wait(1000)
    cy.xpath(elements.checkBankName).should('have.text', "XYZ Bank")
  }

  enterCustomerLogin(name) {
    cy.xpath(elements.clickCustomerLoginButton).click({ force: true }).wait(1000)
    cy.xpath("//select[@id='userSelect']").select(name)
  }

  clickButton(btn) {
    if (btn == "Login" || btn == "Logout" || btn == "Home") {
      cy.xpath("//button[text()='" + btn + "']").click({ force: true }).wait(1000)
    }
  }

  verifyCustomerLandedPage(name) {
    cy.xpath("//strong[text()=' Welcome ']//span").should('have.text', name)
  }
}

export default loginBankActions;
