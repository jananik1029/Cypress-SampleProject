Feature: Bank Login Functionality
        Checking on the login functionality

Scenario: Validate to navigate to bank website page
 Given I navigate to the bank website page
 Then I enter the customer login as "Harry Potter"
 And I click "Login" button
 And I verify the page landed on "Harry Potter" customer page
 And I click "Logout" button 
 And I click "Home" button 