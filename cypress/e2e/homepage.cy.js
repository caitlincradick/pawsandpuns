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
  it('Should display NavBar, gif and joke on the homepage', () => {
    cy.get('nav').should('be.visible').find('.kitty').should('be.visible')
    .get('nav').find('.purrfect-btn').should('be.visible')
    .get('.joke-container').should('be.visible').find('.gif').should('be.visible')
    .get('.joke-container').find('.joke-card').should('be.visible')
    .get('.joke-card').contains('p', 'Why did the chicken get a penalty? For fowl play.')
    .get('.joke-card').find('.empty-heart').should('be.visible').click()
    .get('.joke-card').find('.full-heart').should('be.visible').click()
  })
  it('Should be able to save jokes and go to the saved page and go back home',() => {
    cy.get('.joke-card').find('.empty-heart').click()
    .get('nav').find('.purrfect-btn').click()
    .get('nav').should('be.visible').find('.kitty').should('be.visible')
    //MAKE BUTTON NOT VISIBLE IN SAVEDDDDDDDD 
    .get('.saved-container').should('be.visible')
    .get('.saved-container').find('.saved').should('be.visible').should('have.length', 1)
    .get('.saved-container').find('.saved').find('.joke-card').should('be.visible').contains('p', 'Why did the chicken get a penalty? For fowl play.')
    .get('nav').find('.kitty').click()
  })
  it('Should be able to unsave joke and go home', () => {
    cy.get('.joke-card').find('.empty-heart').click()
    .get('nav').find('.purrfect-btn').click()
    .get('.joke-card').find('.full-heart').click()
    .get('.no-puns').should('be.visible')
    .get('nav').find('.kitty').click()
  })
})
