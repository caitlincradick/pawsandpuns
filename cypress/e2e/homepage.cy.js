describe('template spec', () => {
  beforeEach(() =>{
    cy.intercept('GET', "https://cataas.com/cat/gif", {
      statusCode:200,
      fixture:"cat-gif.gif"
    })
    cy.intercept('GET','https://icanhazdadjoke.com/', {
      statusCode:200,
      fixture:"jokes"
    })
    cy.visit('http://localhost:3000/')
  })
  it('passes', () => {
    cy.get('[alt="cat-gif"]').should('be.visible')
  })
})