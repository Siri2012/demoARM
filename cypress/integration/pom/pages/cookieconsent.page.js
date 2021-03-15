class CookieconsentPage {
  get consent() {
    return cy.get("#cookie_action_close_header");
  }

  submitConsent() {
    this.consent.click();
  }
}
export default new CookieconsentPage();
