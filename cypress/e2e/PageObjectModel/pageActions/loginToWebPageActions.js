 /// <reference types="cypress" />

import elements from "../pageElements/loginElements"

class loginBankActions{

    navigateToLoginBank(){
          cy.visit(elements.visit)
          cy.xpath(elements.checkPageHeader).should('have.title',"GlobalSQA")
        //   cy.xpath(elements.checkBankName).should('have.text',"XYZ Bank")
          cy.xpath(elements.clickTesthub).trigger('mouseover').wait(1000)
    }

   
}

export default loginBankActions;
