///<reference types = "cypress"/>

import CookieconsentPage from "../pom/pages/cookieconsent.page";
import HomePage from "../pom/pages/home.page";
import ArmPage from "../pom/pages/arm.page";
import BookDemoPage from "../pom/pages/bookdemo.page";
import ConfirmPage from "../pom/pages/confirm.page";
import SearchComponent from "../pom/components/search.comp";

describe("Explore Sword GRC", () => {
  it("Navigate to ARM and book a Demo", () => {
    //To view in iPhone-5 preset
    //cy.viewport("iphone-6");

    //To view in iPad-2 screen
      cy.viewport("ipad-2");

    //To view in macbook screen
    //cy.viewport('macbook-11')

    HomePage.openUrl();

    cy.log("Accept Cookie consent");
    CookieconsentPage.submitConsent();

    HomePage.selectMainMenu();
    HomePage.selectSoftware();
    HomePage.selectARM();

    cy.log("Verify ARM page is visible");
    ArmPage.title.should("contain", "Active Risk Manager");
    ArmPage.btnDemo.click();

    cy.log("Verify Book a Demo button section avalable");
    BookDemoPage.form.should(
      "contain",
      "Please fill out the form below and we will be in touch shortly!"
    );
    BookDemoPage.register();

    cy.log("verify Demo confirmation is present on the screen");
    ConfirmPage.txtSuccessMsg.should("be.visible");
    cy.screenshot();
    ConfirmPage.verifyBackButton();

    cy.log("Go Back button leads back to ARM Book a Demo section");
    ArmPage.btnDemo.should("be.visible");
  });

  it("Access ARM via Search Icon", () => {
    HomePage.openUrl();

    cy.log("Accept Cookie consent");
    CookieconsentPage.submitConsent();

    SearchComponent.selectSearch();
    SearchComponent.txtSearch.type("Active Risk Manager");
    SearchComponent.btnSearch.click();

    cy.log("Select the Sword ARM link");
    ArmPage.lnkArm.click();
  });

  it("Access ARM by href", () => {
    cy.visit("https://sword-grc.com/sword-active-risk-manager/");
    CookieconsentPage.submitConsent();
  });
});
