export class AboutEximpePage{
   numberOfEmployees(){
    return cy.get('[data-id="a5bffbd"] h3')
   }
}
const aboutEximpePage = new AboutEximpePage()
export default aboutEximpePage