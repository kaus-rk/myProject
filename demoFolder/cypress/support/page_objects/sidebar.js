class Sidebar {
  checkoutButton() {
    return cy.get('[data-qa="sidebar-action-checkout"]');
  }
  finalSubmit() {
    return cy.get('[data-qa="proceed-checkout-button-action-submit-order"]');
  }
  addNote() {
    return cy.get('[data-qa="cart-item-action-add-comment"]');
  }
  noteArea() {
    return cy.get('[data-qa="cart-item-comment-textarea-element"]');
  }
  submitNote() {
    return cy.get('[data-qa="cart-item-comment-action-add"]');
  }
  addNote(text) {
    this.addNote().first().click();
    this.noteArea().should("be.visible").type(text);
    this.submitNote().click();
  }
  error() {
    return cy.get('[data-qa="checkout-error-banner-message-error"]');
  }
  paymentDetails() {
    return cy.get('[data-qa="sidebar-overview-details-payment-element"]');
  }
  cashDescription() {
    return cy.get('[data-qa="sidebar-overview-details-payment-cash-element"]');
  }
}
export default Sidebar;
