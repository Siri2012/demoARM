import MenuComponent from "../components/menu.comp";

class SearchComponent{

    get iconSearch(){ return cy.get(".gm-mobile-action-area-wrapper > .gm-search")}
    get txtSearch(){ return  cy.get(
        ".gm-search__inner > .gm-search-wrapper > .gm-search-wrapper-form > .gm-form-group > .gm-search__input"
      )}
    get btnSearch(){return  cy.get(
        ".gm-search__inner > .gm-search-wrapper > .gm-search-wrapper-form > .gm-form-group > .gm-search-btn > .fa"
      )}

    selectSearch(){
        MenuComponent.selectMenu();
        this.iconSearch.click();
    }

    

}
export default new SearchComponent()