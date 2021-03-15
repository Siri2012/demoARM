class BookDemoPage {
  get form() {
    return cy.get("h2");
  }
  get txtFirstName() {
    return cy.get("#FirstName");
  }
  get txtLastName() {
    return cy.get("#LastName");
  }
  get txtEmail() {
    return cy.get("#EMailLogin");
  }
  get txtCompany() {
    return cy.get("#CompanyName");
  }
  get txtPhone() {
    return cy.get("#Phone");
  }
  get txtCountry() {
    return cy.get("#Country");
  }
  get selectIndustry() {
    return cy.get("#Industry");
  }

  get checkRisk() {
    return cy.get("#ManageBetterRisk");
  }
  get checkCompliance() {
    return cy.get("#ManageBetterCompliance");
  }
  get checkAudit() {
    return cy.get("#ManageBetterAudit");
  }
  get checkPolicies() {
    return cy.get("#ManageBetterPolicies");
  }
  get checkPolicyTOS() {
    return cy.get("#PrivacyPolicyTOS");
  }
  get btnSubmit() {
    return cy.get("input[value='Submit']");
  }

  register() {
    // The following piece of code is using the registration values provided in the json file from fixtures.
    cy.fixture("registration.json").then((values) => {
      this.txtFirstName.type(values.FirstName);
      this.txtLastName.type(values.LastName);
      this.txtEmail.type(values.Email);
      this.txtCompany.type(values.Company);
      this.txtPhone.type(values.Phone);
      this.txtCountry.type(values.Country);
      this.selectIndustry.select(values.Industry);
    });

    /*  this.txtFirstName.type("first");
    this.txtLastName.type("last");
    this.txtEmail.type("email@email.com");
    this.txtCompany.type("company1");
    // this.txtPhone.type('123456789')
    this.txtCountry.type("UnitedKingdom");
    this.selectIndustry.select('Technology'); */

    this.checkRisk.check();
    this.checkCompliance.check();
    this.checkAudit.check();
    this.checkPolicies.check();

    this.checkPolicyTOS.check();

    this.btnSubmit.click();
  }
}
export default new BookDemoPage();
