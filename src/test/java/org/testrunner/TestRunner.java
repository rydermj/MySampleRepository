package org.testrunner;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;


@RunWith(Cucumber.class)
@CucumberOptions(features="src/test/resources",glue= {"org.stepdefinition"},
dryRun=false,plugin= {"pretty", "html:/target/cucumber"} ,monochrome=true)
//where "features" is the keyword,here we have to give the path of the feature file
//also "glue" is the keyword, here we have to give the StepDefition Class path
public class TestRunner {

}