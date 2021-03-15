class ConfirmPage {

  get iconTick() {
    return cy.get("div[role='document'] div:nth-child(1) img:nth-child(1)");
  }
  get txtSuccessMsg() {
    return cy.get("#success-message > div");
  }
  get btnGoBack() {
    return cy.get("input[value='Go Back']");
  }

  verifyBackButton() {
    this.btnGoBack.click();
  }
}

export default new ConfirmPage();
