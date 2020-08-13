describe('Heroku App Iframe Tests', () => {
  beforeEach(() => {
    cy.visit('/iframe')
  })

  it('Iframe Content Assertion', () => {
    cy.getIframeBody().should('include.text', 'Your content goes here.')
  })

  it('Iframe Content Editing', () => {
    cy.getIframeBody().clear().type('Hello Text', { delay: 500 })
    cy.getIframeBody().should('include.text', 'Hello Text')
  })
})
