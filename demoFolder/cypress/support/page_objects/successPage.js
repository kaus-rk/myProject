class SuccessPage {
  remarkOnFirstItem() {
    return cy.get('[class="product__remark notranslate"]').first();
  }
  orderPurchaseId() {
    return cy.get('[class="order-purchaseid"]');
  }
}
export default SuccessPage;
