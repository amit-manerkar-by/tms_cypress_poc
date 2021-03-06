describe('API Testing with Cypress', () => {
  let data

  before(() => {
    cy.fixture('ApiEndpoints').then((apidata) => {
      data = apidata
    })
  })

  beforeEach(() => {
    cy.request(data.pokemonep + '/25').as('pikachu')
  })

  it('Validate the header', () => {
    cy.get('@pikachu')
      .its('headers')
      .its('content-type')
      .should('include', 'application/json; charset=utf-8')
  })

  it('Validate the status code', () => {
    cy.get('@pikachu').its('status').should('equal', 200)
  })

  it("Validate the pokemon's name", () => {
    cy.get('@pikachu').its('body').should('include', { name: 'pikachu' })
  })
})
