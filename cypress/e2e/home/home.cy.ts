describe("Home view", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });
  it("should show the title of the page", () => {
    cy.contains("The places you dream of");
  });

  it("should redirect to /trips/all", () => {
    cy.url().should("include", "/trips/all");
  });

  it("should show the TabsBar component", () => {
    cy.get("div[data-testid=tabs-bar]").should("exist");
  });

  it("should show at least one Card component", () => {
    cy.get("div[data-testid=card]").should("exist");
  });

  it("should show the Footer component", () => {
    cy.get("div[data-testid=footer]").should("exist");
  });
});
