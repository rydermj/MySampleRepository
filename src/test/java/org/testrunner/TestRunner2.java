package org.testrunner;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(features="CucumberTetsting/src/test/resources/Datatable asList.feature",dryRun=true)

public class TestRunner2 {

}
