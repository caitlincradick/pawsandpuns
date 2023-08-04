describe('It should have different routes', () => {
  it('visits different routes on the app', () => {
    cy.intercept('GET', "https://cataas.com/cat/gif", {
      statusCode:200,
      fixture:"cat-gif.gif"
    })
    cy.intercept('GET','https://icanhazdadjoke.com/', {
      statusCode:200,
      fixture:"joke1"
    }).as("joke1")
    
    cy.visit('http://localhost:3000/')
    .url().should("include", "/")
    .get('nav').find('.purrfect-btn').click()
    .url().should("include", "/saved")
  })
})