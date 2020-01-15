Feature: Testing log in to FB app from android device
Testing negative scenarios and trying to not log in

  Scenario: Trying to log in with wrong credentials
    Given I open the FB app in my android device
    When I enter username "test1"
    And I enter password "test"
    And I click on login button
    Then I see the error message "Can't Find Account"
    And I click on the Try Again button to get back to the login page

  Scenario: Trying to log in without providing password
    Given I open the FB app in my android device
    And email and password fields are empty
    When I enter username "test1"
    Then Login button is disabled

  Scenario: Trying to log in without providing username
    Given I open the FB app in my android device
    And email and password fields are empty
    When I enter password "test"
    Then Login button is disabled