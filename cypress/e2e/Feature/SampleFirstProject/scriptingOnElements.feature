Feature: Scripting in Demo Qa page

    Few scripting scenario lies here..

    Scenario: Verify the scripting process in a website page
        Given I navigate to the demo QA website page
        And I Verify the page conatins "Elements" as header
        And I click on the "Forms" header
        And I fill the form
            | firstName | lastName | emailAddress           | gender | mobileNumber | dateOfBirth | subjects    | hobbies | currentAddress         | state     | city   |
            | Alex      | Landro   | alexLandro@example.com | Male   | 78465748     | 03 Apr 2025 | Information | Sports  | No:902 Friendly street | Rajasthan | Jaipur |
        And I click "Submit" button