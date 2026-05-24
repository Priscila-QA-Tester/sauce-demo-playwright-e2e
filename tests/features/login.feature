Feature: Login Tests

  Scenario: Successful login
    Given I am on the SauceDemo login page
    When I fill the username with "standard_user"
    And I fill the password with "secret_sauce"
    And I click the Login button
    Then I should be redirected to the Products page
    