describe('Heroku App Login Tests', () => {
  let data

  before(() => {
    cy.fixture('LoginData').then((login) => {
      data = login
    })
  })

  beforeEach(() => {
    cy.visit('/login')
  })

  it('Valid Login Test', () => {
    cy.herokulogin(data.herokuusername, data.herokupassword)
    cy.get('#flash').contains('You logged into a secure area!')
    cy.get('h2').contains('Secure Area')
    cy.url().should('include', '/secure')
  })

  it('Invalid Login Test', () => {
    cy.herokulogin(data.herokuusername, 'invalidpass')
    cy.get('#flash').contains('Your password is invalid!')
    cy.url().should('include', '/login')
  })
})
