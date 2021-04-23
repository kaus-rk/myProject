class CheckoutPage {
  title() {
    return cy.get('[data-qa="multi-step-checkout-checkout-title"]');
  }
  submit() {
    return cy.get('[data-qa="multi-step-checkout-action-submit-order"]');
  }
  nameError() {
    return cy.get(
      '[data-qa="shipping-info-forms-personal-details-input-name-element-error"]'
    );
  }
  emailError() {
    return cy.get(
      '[data-qa="shipping-info-forms-personal-details-input-email"]'
    );
  }
  phoneError() {
    return cy.get(
      '[data-qa="shipping-info-forms-personal-details-input-phone"]'
    );
  }
  fullName() {
    return cy.get('[name="fullName"]');
  }
  email() {
    return cy.get('[name="email"]');
  }
  phone() {
    return cy.get('[name="phoneNumber"]');
  }
  enterUserDetails(name, email, phNo) {
    this.fullName().type(name);
    this.email().type(email);
    this.phone().type(phNo);
  }
  paymentMode() {
    return cy.get('[data-qa="multi-step-checkout-details-payment-element"]');
  }
  paymentModal() {
    return cy.get('[data-qa="payment-modal-header-heading"]');
  }
  paypalOption() {
    return cy.get('[data-qa="payment-modal-paypal-element-element-element"]');
  }
  cashOption() {
    return cy.get('[data-qa="payment-modal-cash-element-element"]');
  }
  cashDetails() {
    return cy.get('[data-qa="payment-modal-cash-details-select"]');
  }
  submitOnModal() {
    return cy.get('[data-qa="payment-modal-action-submit"]');
  }
  paymentOption() {
    return cy.get(
      '[data-qa="multi-step-checkout-details-payment-description"]'
    );
  }
}
export default CheckoutPage;
