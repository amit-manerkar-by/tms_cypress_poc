describe('Transport Manager Tests', () => {
  before(() => {
    cy.visit('http://md1npdvtms20.dev.corp.local:7001/tm/framework/Frame.jsp')
  })

  it.skip('Login Test', () => {
    expect(true).to.equal(true)
    cy.login('AM', 'AM')
  })
})
