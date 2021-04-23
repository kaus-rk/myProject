class MenuPage {
  duckBreast() {
    return cy.get('[menu-item-id="N3OPOP335"]');
  }
  miniBurgerMenu() {
    return cy.get('[menu-item-id="NQR31135O"]');
  }
  pizza20() {
    return cy.get('[menu-item-id="OP1313O77"]');
  }
  addtoBasket() {
    return cy.get('[data-qa="menu-item-choices-action-submit"]');
  }
}
export default MenuPage;
