 /// <reference types="cypress" />

import elements from "../pageElements/searchGoogleElements"

class searchGoogleActions{

    navigateToGoogle(){
          cy.visit(elements.visit)
    }

   
}

export default searchGoogleActions;
