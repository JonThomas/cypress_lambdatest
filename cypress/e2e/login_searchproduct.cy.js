describe('template spec', () => {
  beforeEach(() => {
    cy.visit("https://ecommerce-playground.lambdatest.io/index.php?route=account/login");
  })

  it("Open the Url", () => {
  });
  
  it("Login into the application", () => {
    cy.get('[id="input-email"]').type("lambdatest@yopmail.com");
    cy.get('[id="input-password"]').type("lambdatest");
    cy.get('[type="submit"]').eq(0).click();
  });

  it("Search and verify Sony VAIO product", () => {
    cy.get('[id="search"]').eq(0).type("VAIO");
    cy.get('[type="submit"]').eq(0).click();
    cy.contains("Sony VAIO");
  });
})

