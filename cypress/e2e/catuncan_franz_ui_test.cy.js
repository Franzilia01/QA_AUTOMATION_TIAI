const saveButton_selector = 'input[type="submit"]'
const form_selector = 'form[name="myForm"]'
const fullName_selector = 'input[id="fullName"]'
const flexible_selector = 'input[id="flexible"]'
const daysAvail_selector = 'input[id="daysAvail"]'
const string100chars = 'Z5zJdWyc85mmF75thPeNcdUh2ItELbDEyIl7YFtNplpHMSR5X2o5FlQP3bp3DThGRl9aLIOvxbSDb0nqNHpykDQQljNFxzyg3tTr'

describe('UI Tests', () => {
  it('Check Display of Page', () => {
    cy.visit('./activity.html')
    cy.get(form_selector).should('be.visible')
  });
  it('Check Validation of Name Field', () => {
    cy.get(fullName_selector).type(string100chars + '1').should('have.value',string100chars)

  })
  it('Check Validation of Email Address Field', () => {
    const emailAddress_selector = 'input[id="emailAddress"]'
    const invalid_email = "this_is@inv"

    cy.get(fullName_selector).type('Franz Catuncan')
    cy.get(emailAddress_selector).type(invalid_email)
    cy.get(form_selector).submit()
    cy.wait(2000)
    cy.on('window:alert', (text) => {
      expect(text).to.contains('Please enter a valid email address!')
    });
  });

  it('Check Flexible Checkbox Validation', () => {
    cy.get(flexible_selector).click()
    cy.get(form_selector).submit()
      cy.on('window:alert', (text) => {
        expect(text).to.contains('Provide days for availability!')
      });
  });

  it('Check Days of Availability Validation - Decimals', () => {
    cy.visit('./activity.html')

    cy.get(fullName_selector).type('Franz Catuncan')
    cy.get(daysAvail_selector).type('9.06')
    cy.get(form_selector).submit()
      cy.on('window:alert', (text) => {
        expect(text).to.contains('Only whole numbers are allowed for days for availability!')
      });
  });

  it('Check Days of Availability Validation - Letters', () => {
    cy.visit('./activity.html')

    cy.get(fullName_selector).type('Franz Catuncan')
    cy.get(daysAvail_selector).type('abcDEF')
    cy.get(form_selector).submit()
      cy.on('window:alert', (text) => {
        expect(text).to.contains('Only whole numbers are allowed for days for availability!')
      });
  });

  it('Check Days of Availability Validation - Special Characters', () => {
    cy.visit('./activity.html')

    cy.get(fullName_selector).type('Franz Catuncan')
    cy.get(daysAvail_selector).type('!@#(%*&')
    cy.get(form_selector).submit()
      cy.on('window:alert', (text) => {
        expect(text).to.contains('Only whole numbers are allowed for days for availability!')
      });
  });
});