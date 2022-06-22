package org.stepdefinition;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class StepDefinition extends BaseClass {

	@Given("user open the google chrome browser")
	public void user_open_the_google_chrome_browser() {
		launchBrowser();
	}  
	
	@When("user opens the facebook application")
	public void user_opens_the_facebook_application() {
		launchUrl("https://www.facebook.com/");
	}

	@When("user enters a valid username and password {string}, {string}")
	public void user_enters_a_valid_username_and_password(String s1, String s2) throws InterruptedException {
		impWait();
		myId("email").sendKeys(s1);
		WebElement pass = myId("pass");
		pass.sendKeys(s2);
		String passvalue = pass.getAttribute("value");

		System.out.println("Pass Entered :" + passvalue);
		driver.findElement(By.name("login")).click();
	}

	@Then("user will be navigated to the application homepage")
	public void user_will_be_navigated_to_the_application_homepage() {
		String currentUrl = getCurrentUrl();
		Assert.assertEquals("https://www.facebook.com/login/?privacy_mutation_token=eyJ0eXBlIjowLCJjcmVhdGlvbl90aW1lIjoxNjUzNTQzNjAyLCJjYWxsc2l0ZV9pZCI6MzgxMjI5MDc5NTc1OTQ2fQ%3D%3D", currentUrl);
	}
	@Then("user closes the browser")
	public void user_closes_the_browser() {
	   quit();
	  
	}

}
