import MenuComponent from "../components/menu.comp";

class HomePage {
  get iconMainMenu() {
    return cy.get(".gm-menu-btn__inner > .fa");
  }
  get iconSoftware() {
    return cy.get(
      '#menu-main-1 > #menu-item-12161 > [href="#"] > .gm-menu-item__txt-wrapper > .gm-menu-item__txt'
    );
  }
  get lnkARM() {
    return cy.get(
      '[style="display: block;"] > .gm-dropdown-menu--lvl-1 > #menu-item-16472 > .gm-dropdown-toggle > .gm-menu-item__txt-wrapper > .gm-menu-item__txt'
    );
  }

  openUrl() {
    cy.visit("https://sword-grc.com/");
  }

  selectMainMenu() {
    MenuComponent.selectMenu();
  }

  selectSoftware() {
    this.iconSoftware.click();
  }
  selectARM() {
    this.lnkARM.click();
  }
}
export default new HomePage();
