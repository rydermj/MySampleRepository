Feature: To validate the facebook application

  Scenario Outline: To validate the Login functionality
    Given user open the google chrome browser
    When user opens the facebook application
    And user enters a valid username and password "<username>", "<password>"
    Then user will be navigated to the application homepage
    And user closes the browser

    Examples: 
      | username | password  |
      | user11   |    542276 |
      | user2    |    878928 |
      | user3    | jdsd768s6 |
      | user4    | HJhk783@  |
