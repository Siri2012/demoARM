class ArmPage {
  get lnkArm() {
    return cy.get(".post-16471 > .post-inner > .post-title > a");
  }
  get title() {
    return cy.get("h1[class='elementor-heading-title elementor-size-default']");
  }
  get btnDemo() {
    return cy.get(
      "a[class='elementor-button-link elementor-button elementor-size-lg']"
    );
  }
}

export default new ArmPage();
