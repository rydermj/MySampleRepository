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
formatter.before({
  "status": "passed"
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
formatter.after({
  "status": "passed"
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
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user open the google chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "Hooks.user_open_the_google_chrome_browser()"
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
  "error_message": "org.openqa.selenium.StaleElementReferenceException: stale element reference: element is not attached to the page document\n  (Session info: chrome\u003d101.0.4951.67)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/stale_element_reference.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-RED2SS3\u0027, ip: \u0027192.168.9.148\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_172\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 101.0.4951.67, chrome: {chromedriverVersion: 101.0.4951.41 (93c720db8323..., userDataDir: C:\\Users\\Jamal\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:53006}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 8913d79c4709bd005668add8042a8cab\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.isDisplayed(RemoteWebElement.java:326)\r\n\tat org.stepdefinition.StepDefinition.user_will_be_navigated_to_the_application_homepage(StepDefinition.java:31)\r\n\tat ✽.user will be navigated to the application homepage(file:src/test/resources/MyFeatureFile.feature:7)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user closes the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Hooks.user_closes_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate the Login functionality",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user open the google chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "Hooks.user_open_the_google_chrome_browser()"
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
  "error_message": "org.openqa.selenium.StaleElementReferenceException: stale element reference: element is not attached to the page document\n  (Session info: chrome\u003d101.0.4951.67)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/stale_element_reference.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-RED2SS3\u0027, ip: \u0027192.168.9.148\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_172\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 101.0.4951.67, chrome: {chromedriverVersion: 101.0.4951.41 (93c720db8323..., userDataDir: C:\\Users\\Jamal\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:53038}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 104656e2c34cfc37ea15585a5c8ad6d1\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.isDisplayed(RemoteWebElement.java:326)\r\n\tat org.stepdefinition.StepDefinition.user_will_be_navigated_to_the_application_homepage(StepDefinition.java:31)\r\n\tat ✽.user will be navigated to the application homepage(file:src/test/resources/MyFeatureFile.feature:7)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user closes the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Hooks.user_closes_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate the Login functionality",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user open the google chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "Hooks.user_open_the_google_chrome_browser()"
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
  "error_message": "org.openqa.selenium.StaleElementReferenceException: stale element reference: element is not attached to the page document\n  (Session info: chrome\u003d101.0.4951.67)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/stale_element_reference.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-RED2SS3\u0027, ip: \u0027192.168.9.148\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_172\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 101.0.4951.67, chrome: {chromedriverVersion: 101.0.4951.41 (93c720db8323..., userDataDir: C:\\Users\\Jamal\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:53070}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: e230721a9bb53e2fa096f7e7ff75c738\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.isDisplayed(RemoteWebElement.java:326)\r\n\tat org.stepdefinition.StepDefinition.user_will_be_navigated_to_the_application_homepage(StepDefinition.java:31)\r\n\tat ✽.user will be navigated to the application homepage(file:src/test/resources/MyFeatureFile.feature:7)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user closes the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Hooks.user_closes_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate the Login functionality",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user open the google chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "Hooks.user_open_the_google_chrome_browser()"
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
  "error_message": "org.openqa.selenium.StaleElementReferenceException: stale element reference: element is not attached to the page document\n  (Session info: chrome\u003d101.0.4951.67)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/stale_element_reference.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-RED2SS3\u0027, ip: \u0027192.168.9.148\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_172\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 101.0.4951.67, chrome: {chromedriverVersion: 101.0.4951.41 (93c720db8323..., userDataDir: C:\\Users\\Jamal\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:53102}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 69e77184ed3d8153444ab8d1766da64b\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.isDisplayed(RemoteWebElement.java:326)\r\n\tat org.stepdefinition.StepDefinition.user_will_be_navigated_to_the_application_homepage(StepDefinition.java:31)\r\n\tat ✽.user will be navigated to the application homepage(file:src/test/resources/MyFeatureFile.feature:7)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user closes the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Hooks.user_closes_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
});