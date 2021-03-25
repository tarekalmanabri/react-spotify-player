/// <reference types="cypress" />

context("check the functionalities of the spotify app", () => {
    beforeEach(() => {
        cy.login('mervearas435@gmail.com','emir123.')
        cy.intercept('https://api.spotify.com/v1/me/player', {fixture: "player.json"}).as('player')
    })
    describe('verify the API', () => {
        it('it should access the spotify API and validates the top track list',() =>{
            cy.wait('@player').then(res => {
                cy.get('ul > :nth-child(1)')
                .should('have.text', 'Anyone')
            })
        })
       
    })
})