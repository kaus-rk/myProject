class Misc {
  headerTitle() {
    return cy.get('[class="header__title"]');
  }
  searchField() {
    return cy.get('[id="imysearchstring"]');
  }
  autoCompleteDropDown() {
    return cy.get('[id="iautoCompleteDropDownContent"]');
  }
  dłusk12() {
    return cy.get('[data-name="Dłusko 12, 78-630 Dłusko"]');
  }
  testRestSelenium() {
    return cy.get('[href="/menu/test-restaurant-selenium"]', {
      timeout: 5000,
    });
  }
  paypalCancelLink() {
    return cy.get('[id="cancelLink"]', {
      timeout: 5000,
    });
  }
}
export default Misc;
