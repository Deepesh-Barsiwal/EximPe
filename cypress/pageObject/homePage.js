export class HomePage {
    navMenu() {
        return cy.get('.elementor-sticky--active nav.elementor-nav-menu--layout-horizontal>ul>li>a')
    }
    dropdownIcon(){
        return cy.get('.elementor-sticky--active nav.elementor-nav-menu--layout-horizontal>ul>li .sub-arrow',{timeout:10000})
    }
}
const homePage = new HomePage()
export default homePage