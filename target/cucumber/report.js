$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Datatable%20asList.feature");
formatter.feature({
  "name": "To use the single dimentional List from Datatable",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.scenario({
  "name": "To validate the given task",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "I open the google chrome and enter the website",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDef2.i_open_the_google_chrome_and_enter_the_website()"
});
formatter.result({
  "error_message": "cucumber.api.PendingException: TODO: implement me\r\n\tat org.stepdefinition.StepDef2.i_open_the_google_chrome_and_enter_the_website(StepDef2.java:11)\r\n\tat ✽.I open the google chrome and enter the website(file:src/test/resources/Datatable%20asList.feature:8)\r\n",
  "status": "pending"
});
formatter.step({
  "name": "I click Next",
  "keyword": "When "
});
formatter.match({
  "location": "StepDef2.i_click_Next()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I enter First and Last name and click Next",
  "rows": [
    {
      "cells": [
        "Moh",
        "Ja"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "StepDef2.i_enter_First_and_Last_name_and_click_Next(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I enter the email address and click Next",
  "rows": [
    {
      "cells": [
        "fdsg@gma.com"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "StepDef2.i_enter_the_email_address_and_click_Next(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I upload some file and click Next",
  "keyword": "And "
});
formatter.match({
  "location": "StepDef2.i_upload_some_file_and_click_Next()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I upload the resume and click next",
  "keyword": "And "
});
formatter.match({
  "location": "StepDef2.i_upload_the_resume_and_click_next()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click No and CLick Next",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef2.i_click_No_and_CLick_Next()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("file:src/test/resources/MyFeatureFile.feature");
formatter.feature({
  "name": "To validate the facebook application",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "To validate the Login functionality",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user open the google chrome browser",
  "keyword": "Given "
});
formatter.step({
  "name": "user opens the facebook application",
  "keyword": "When "
});
formatter.step({
  "name": "user enters a valid username and password \"\u003cusername\u003e\", \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user will be navigated to the application homepage",
  "keyword": "Then "
});
formatter.step({
  "name": "user closes the browser",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "user11",
        "542276"
      ]
    },
    {
      "cells": [
        "user2",
        "878928"
      ]
    },
    {
      "cells": [
        "user3",
        "jdsd768s6"
      ]
    },
    {
      "cells": [
        "user4",
        "HJhk783@"
      ]
    }
  ]
});
formatter.scenario({
  "name": "To validate the Login functionality",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user open the google chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.user_open_the_google_chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user opens the facebook application",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.user_opens_the_facebook_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters a valid username and password \"user11\", \"542276\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_enters_a_valid_username_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user will be navigated to the application homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_will_be_navigated_to_the_application_homepage()"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003c...://www.facebook.com/[]\u003e but was:\u003c...://www.facebook.com/[login/?privacy_mutation_token\u003deyJ0eXBlIjowLCJjcmVhdGlvbl90aW1lIjoxNjUzNTQzNjAyLCJjYWxsc2l0ZV9pZCI6MzgxMjI5MDc5NTc1OTQ2fQ%3D%3D]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat org.stepdefinition.StepDefinition.user_will_be_navigated_to_the_application_homepage(StepDefinition.java:38)\r\n\tat ✽.user will be navigated to the application homepage(file:src/test/resources/MyFeatureFile.feature:7)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user closes the browser",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_closes_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "To validate the Login functionality",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user open the google chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.user_open_the_google_chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user opens the facebook application",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.user_opens_the_facebook_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters a valid username and password \"user2\", \"878928\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_enters_a_valid_username_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user will be navigated to the application homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_will_be_navigated_to_the_application_homepage()"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003c...://www.facebook.com/[]\u003e but was:\u003c...://www.facebook.com/[login/?privacy_mutation_token\u003deyJ0eXBlIjowLCJjcmVhdGlvbl90aW1lIjoxNjUzNTQzNjAyLCJjYWxsc2l0ZV9pZCI6MzgxMjI5MDc5NTc1OTQ2fQ%3D%3D]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat org.stepdefinition.StepDefinition.user_will_be_navigated_to_the_application_homepage(StepDefinition.java:38)\r\n\tat ✽.user will be navigated to the application homepage(file:src/test/resources/MyFeatureFile.feature:7)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user closes the browser",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_closes_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "To validate the Login functionality",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user open the google chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.user_open_the_google_chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user opens the facebook application",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.user_opens_the_facebook_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters a valid username and password \"user3\", \"jdsd768s6\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_enters_a_valid_username_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user will be navigated to the application homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_will_be_navigated_to_the_application_homepage()"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003c...://www.facebook.com/[]\u003e but was:\u003c...://www.facebook.com/[login/?privacy_mutation_token\u003deyJ0eXBlIjowLCJjcmVhdGlvbl90aW1lIjoxNjUzNTQzNjAyLCJjYWxsc2l0ZV9pZCI6MzgxMjI5MDc5NTc1OTQ2fQ%3D%3D]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat org.stepdefinition.StepDefinition.user_will_be_navigated_to_the_application_homepage(StepDefinition.java:38)\r\n\tat ✽.user will be navigated to the application homepage(file:src/test/resources/MyFeatureFile.feature:7)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user closes the browser",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_closes_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "To validate the Login functionality",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user open the google chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.user_open_the_google_chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user opens the facebook application",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.user_opens_the_facebook_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters a valid username and password \"user4\", \"HJhk783@\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_enters_a_valid_username_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user will be navigated to the application homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_will_be_navigated_to_the_application_homepage()"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003c...://www.facebook.com/[]\u003e but was:\u003c...://www.facebook.com/[login/?privacy_mutation_token\u003deyJ0eXBlIjowLCJjcmVhdGlvbl90aW1lIjoxNjUzNTQzNjAyLCJjYWxsc2l0ZV9pZCI6MzgxMjI5MDc5NTc1OTQ2fQ%3D%3D]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat org.stepdefinition.StepDefinition.user_will_be_navigated_to_the_application_homepage(StepDefinition.java:38)\r\n\tat ✽.user will be navigated to the application homepage(file:src/test/resources/MyFeatureFile.feature:7)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user closes the browser",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_closes_the_browser()"
});
formatter.result({
  "status": "skipped"
});
});