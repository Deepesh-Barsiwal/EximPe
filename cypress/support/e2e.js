import "cypress-localstorage-commands";

before(() => {
    cy.clearLocalStorage()
    cy.visit("/")
    cy.window().then((win) => {
        win.sessionStorage.clear()
    })
    //handle uexception
    cy.on('uncaught:exception', () => false)

})