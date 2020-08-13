Cypress.Commands.add('login', (username, password) => {
  cy.get('[name=loginUser]').type(username)
  cy.get('[name=dspLoginPassword]').type(password)
  cy.get('.signin').click()
})

Cypress.Commands.add('herokulogin', (username, password) => {
  cy.get('#username').type(username, { delay: 500 })
  cy.get('#password').type(password, { delay: 500 })
  cy.get('#login').submit()
})

Cypress.Commands.add('getIframeBody', () => {
  return cy
    .get('#mce_0_ifr')
    .its('0.contentDocument.body')
    .should('not.be.empty')
    .then(cy.wrap)
})
