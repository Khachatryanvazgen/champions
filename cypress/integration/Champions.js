/// <reference types='cypress'/>

it("wwe test", function(){

    cy.visit("https://wwechampions.com")
    cy.get('.icon-users-group').click()
    cy.get('.right-sidebar-layout > .position-relative > :nth-child(1)').click()
    cy.get('.scopely-login').click()
    cy.wait(8000)
    cy.get('#input28').type('vazgenkhachatryan6+77@gmail.com')
    cy.get('#input36').type('Vzgo1994')
    cy.get('.button').click()
    cy.wait(12000)
    cy.get('.icon-arrow').click()
    cy.get('.account-profile__account-settings__button > svg').click()
    cy.get('[data-id="account_settings_Change Avatar"] > .body-12').click()
    cy.get('[data-id="select_19_avatar"] > .avatar-select-glow > .avatar-select-image').click()
    cy.wait(4000)
    cy.get('.w-100 > .h5').click()
    cy.get('.icon-arrow').click()
    cy.get('.account-profile__account-settings__button > svg').click()
    cy.get('[data-id="account_settings_Logout"] > .body-12').click()
    
})