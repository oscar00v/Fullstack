/// <reference types="cypress" />



describe('example to-do app', () => {
  beforeEach(() => {
    
    cy.visit('http://localhost:5173')
    cy.contains('Register').click()
    cy.url().should('include', '/register')

    cy.get('[data-cy="first-name"]').type('Test name')

  })

  it('displays two todo items by default', () => {
  
    cy.get('.todo-list li').should('have.length', 2)

   
    cy.get('.todo-list li').first().should('have.text', 'Pay electric bill')
    cy.get('.todo-list li').last().should('have.text', 'Walk the dog')
  })

  
})
