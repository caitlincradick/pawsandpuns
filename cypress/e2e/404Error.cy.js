describe('404 error handling', () => {
  it('should display 404 error for nonexistent routes', () => {
    cy.intercept('GET', 'https://icanhazdadjoke.com/',{
      statusCode:200, 
      fixture:"joke1.json"
    }).as('joke')

    cy.intercept('GET', "https://cataas.com/cat/gif", {
      statusCode:200,
      fixture:"cat-gif.gif"
    }).as('catGif')

    .visit('http://localhost:3000/251516511asdf')
    .then((intercept) => {  
      cy.url().should('include', '/404')
      cy.get('.page-not-found').should('be.visible').contains('h1', 'Sorry.. 404 error, page not found.')
      cy.get('.page-not-found > img').should('be.visible')
      })
  })
})