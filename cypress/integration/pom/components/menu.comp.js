class MenuComponent {
  get iconMainMenu() {
    return cy.get(".gm-menu-btn__inner > .fa");
  }

  selectMenu(){

    this.iconMainMenu.click()
  }

}
export default new MenuComponent();
