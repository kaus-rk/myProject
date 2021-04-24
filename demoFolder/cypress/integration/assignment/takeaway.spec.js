import SuccessPage from "../../support/page_objects/successPage";
import MenuPage from "../../support/page_objects/menuPage";
import Sidebar from "../../support/page_objects/sidebar";
import CheckoutPage from "../../support/page_objects/checkoutPage";
import Misc from "../../support/page_objects/misc";
const misc = new Misc();
const menupage = new MenuPage();
const sidebar = new Sidebar();
const checkoutPage = new CheckoutPage();
const successpage = new SuccessPage();

describe("Poland Checkout : using cash payment", function () {
  it("it will open homepage", () => {
    cy.visit("/",{ failOnStatusCode: false });
    cy.wait(3000);
    misc.headerTitle().contains("Czas zamówić jedzenie");
  });

  it("it will search for address", () => {
    misc.searchField().type("Dłusko 12, 78-630 Dłusko");
    cy.wait(500);
    misc.autoCompleteDropDown().contains("Dłusko 12, 78-630 Dłusko").click();
    misc.dłusk12().click();
  });

  it("it will select restaurant & add 3 items in basket", () => {
    // Select Test restaurant selenium
    cy.wait(5000);
    misc.testRestSelenium().click();

    // Add Duck breast in basket
    menupage.duckBreast().click();
    menupage.addtoBasket().click();

    // Add Miniburger/Menu breast in basket
    menupage.miniBurgerMenu().click();
    menupage.addtoBasket().click();

    // Add pizza 20 zln in basket
    menupage.pizza20().click();

    // Add note for 1st item in basket
    sidebar.addNote("no sugar");

    // Verify the total cost on checkout button & click
    sidebar.checkoutButton().contains("21,35 zł").click();
  });

  it("it will validate missing user details in checkout", () => {
    // Verify we are on checkout page with title
    checkoutPage.title().contains("Kasa");

    // Click on checkout button
    checkoutPage.submit().click();

    // Check for validation error for 3 mandatory fields
    checkoutPage.nameError().should("be.visible");
    checkoutPage.emailError().should("be.visible");
    checkoutPage.phoneError().should("be.visible");
  });

  it("it will add user details and proceed with paypal", () => {
    // Enter user details
    checkoutPage.enterUserDetails(
      "Test User",
      "testuser@test.com",
      "0123456789"
    );
    // Use PayPal as payment mode
    checkoutPage.paymentMode().click();
    checkoutPage.paymentModal().should("be.visible");
    checkoutPage.paypalOption().click();
    checkoutPage.submitOnModal().click();
    checkoutPage.paymentOption().contains("PayPal");
    checkoutPage.submitOnModal().click();
    checkoutPage.submit().click();
  });

  it("it will cancel PayPal and use cash as payment option", () => {
    // Click cancel on payPal page
    misc.paypalCancelLink().click();

    // Verify checkout error msg is shown
    sidebar.error().should("be.visible");

    // Change payment method to cash and pay
    sidebar.paymentDetails().click();
    checkoutPage.cashOption().click();
    checkoutPage.cashDetails().should("be.visible");
    checkoutPage.submitOnModal().click();
    sidebar.cashDescription().should("be.visible");
    sidebar.finalSubmit().click();
  });

  it("it will verify order success", () => {
    // Verify remark and orderID is shown
    successpage.remarkOnFirstItem().contains("no sugar");
    successpage.orderPurchaseId().should("be.visible");
  });
});
