const { Given, When, Then } = require('cucumber')
const assert = require('assert');
const { driver } = require('../support/get_driver');
const { $ } = require('webdriverio');
const CukeTest = require('cuketest');

////step definitions/////

Given("I open the FB app in my android device", async function () {
    let fb = driver.element("~Facebook");
    fb.click();
    await CukeTest.delay(4000);
});

When("I enter username {string}", async function (keyword) {
    let username = driver.element("~Username");
    username.setValue(keyword);
    await CukeTest.delay(2500);
});

When("I enter password {string}", async function (keyword) {
    let pass = driver.element("~Password");
    pass.setValue(keyword);
    await CukeTest.delay(2500);
});

When("I click on login button", async function () {
    await CukeTest.delay(3000);
    let login = driver.element("~Login");
    login.click();
    await CukeTest.delay(2000);
});

Then("I see the error message {string}", async function (keyword) {
    await CukeTest.delay(3500);
    let el10 = driver.element("/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.LinearLayout[1]/android.widget.TextView");
    return assert.equal(await el10.getText(), keyword);
});

Then("Login button is disabled", async function () {
    await CukeTest.delay(1500);
    let login = driver.element("~Login");
    return assert.equal(await login.isEnabled(),0);
});

Then("I click on the Try Again button to get back to the login page", async function () {
    let el8 = driver.element("/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.LinearLayout[2]/android.widget.LinearLayout/android.widget.Button[2]");
    el8.click();
});

Then("I close the FB app", async function () {
    await CukeTest.delay(1000);
    await driver.closeApp();
    await CukeTest.delay(1000);
});

Given("email and password fields are empty", async function () {
    let username = driver.element("~Username");
    username.clearElement();
    let pass = driver.element("~Password");
    pass.clearElement();
});

