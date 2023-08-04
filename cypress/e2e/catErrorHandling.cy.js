describe('cat error handling', () => {
  it('should display error message when a network request fails', () => {
    cy.intercept('GET', 'https://icanhazdadjoke.com/',{
      statusCode:200, 
      fixture:"joke1"
    }).as('joke')

    cy.intercept('GET', "https://cataas.com/cat/gif", {
      statusCode:501,
      fixture:"cat-gif.gif"
    }).as('catGif')

    .visit('http://localhost:3000/')
    cy.wait(['@joke','@catGif']).then((intercept) => {  
      // cy.get(".joke-err-message").should('be.visible');
      cy.get('.cat-err-message').should('be.visible') 
      })
  })
})
