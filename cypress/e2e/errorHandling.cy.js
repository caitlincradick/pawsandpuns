describe('joke error handling ', () => {
  beforeEach(() => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
    })
  })
  it('should display error message when a network request fails', () => {
    cy.intercept('GET', 'https://icanhazdadjoke.com/',{
      statusCode:500, 
      fixture:"joke1.json"
    }).as('joke')

    cy.intercept('GET', "https://cataas.com/cat/gif", {
      statusCode:200,
      fixture:"cat-gif.gif"
    }).as('catGif')

    .visit('http://localhost:3000/')
    cy.wait(['@joke','@catGif']).then((intercept) => {  
      // cy.get(".joke-err-message").should('be.visible');
      cy.get('.joke-err-message').should('be.visible') 
      })
  })

 
})