//import page object
import homePage from "../pageObject/homePage"
//import data from  json
import data from "../fixtures/data.json"
import aboutEximpePage from "../pageObject/aboutEximpe"

describe('verification of home page', () => {
  it('verify nav menu', () => {
    //wait for dropdown icon to visible
    homePage.dropdownIcon().should('be.visible')
    homePage.navMenu().should('be.visible').each(($el, index) => {
      expect($el.text()).eql(data.homePage.navMenuList[index])
    })
    //select nav value
    homePage.navMenu().each(($el) => {
      if ($el.text() == 'About') {
        cy.wrap($el).click()
      }
    })
    //click on About EximPe option
    cy.contains('About EximPe').click()
    //verify navigate to about-eximpe page
    cy.url().should('equal', data.aboutEximpePage.url)
    //get numbe of employees
    aboutEximpePage.numberOfEmployees().should('be.visible').then(($el) => {
      let numberOfEmployees = $el.text()
      //print on test runner
      cy.log(numberOfEmployees)
      //print on console
      console.log(numberOfEmployees)
    })
  })
})