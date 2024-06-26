describe('Navigation', () => {
    it('should show a Testing text', () => {
      // Start from the index page
      cy.visit('http://localhost:3000/')
      cy.get('p').contains('Testing')
    })
  })