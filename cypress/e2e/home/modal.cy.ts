describe("Card", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });
  it("when user clicks on 'See trip details' the Modal component should pop up", () => {
    cy.get("div[data-testid=modal]").should("not.exist");
    cy.get("div[data-testid=card-1]").within(($card) => {
      cy.contains("See trip details").should("exist");
      cy.contains("See trip details").click();
    });
    cy.get("div[data-testid=modal]").should("exist");
  });
  it("when user clicks on 'See trip details' the Modal component should pop up", () => {
    cy.get("div[data-testid=modal]").should("not.exist");
    cy.get("div[data-testid=card-1]").within(($card) => {
      cy.contains("See trip details").should("exist");
      cy.contains("See trip details").click();
    });
    cy.get("div[data-testid=modal]").should("exist");
  });
  it("when user clicks on the close button the Modal component should pop up", () => {
    cy.get("div[data-testid=card-1]").within(($card) => {
      cy.contains("See trip details").should("exist");
      cy.contains("See trip details").click();
    });
    cy.get("div[data-testid=modal]").should("exist");
    cy.get("div[data-testid=modal]").within(($modal) => {
      cy.get("button[data-testid=close-modal]").should("exist");
      cy.get("button[data-testid=close-modal]").click();
    });
    cy.get("div[data-testid=modal]").should("not.exist");
  });
  it("when user clicks on the TickButton it should change its state", () => {
    cy.visit("http://localhost:3000/trips/completed");

    cy.contains("See trip details").should("exist");
    cy.contains("See trip details").click();

    cy.get("div[data-testid=modal]").should("exist");
    cy.contains("Completed").should("exist");
    cy.get("button[data-testid=tick-button]").should("exist");
    cy.get("button[data-testid=tick-button]").should("exist");
    cy.get("button[data-testid=tick-button]").click();

    cy.contains("Mark as completed").should("exist");
  });
});
