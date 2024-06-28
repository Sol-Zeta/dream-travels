describe("Card", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });
  it("when user clicks on delete the card should be removed", () => {
    cy.get("div[data-testid=card-1]").within($card => {
      cy.contains("Delete").should('exist');
      cy.contains("Delete").click();
    })
    cy.get("div[data-testid=card-1]").should("not.exist");
  });
});
