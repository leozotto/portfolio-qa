Cypress.Commands.add('clickAutomobile', () => {
    cy.get("#offer_automobile").click()
})

// mapping fields in Vehicle Data
Cypress.Commands.add('make', (make) => {
    cy.get("#make").should('be.visible').select(make)
})

Cypress.Commands.add('enginePerformance', (enginePerformance) => {
    cy.get("#engineperformance").should('be.visible').type(enginePerformance)

})

Cypress.Commands.add('dateOfManafacture', (dateOfManafacture) => {
    cy.get("#dateofmanufacture").should('be.visible').type(dateOfManafacture)

})

Cypress.Commands.add('numberOfSeats', (numberOfSeats) => {
    cy.get("#numberofseats").should('be.visible').select(numberOfSeats)

})

Cypress.Commands.add('fuelType', (fuelType) => {
    cy.get("#fuel").should('be.visible').select(fuelType)

})

Cypress.Commands.add('listPrice', (listPrice) => {
    cy.get("#listprice").should('be.visible').type(listPrice)

})

Cypress.Commands.add('licensePlateNumber', (licensePlateNumber) => {
    cy.get("#licenseplatenumber").should('be.visible').type(licensePlateNumber)

})

Cypress.Commands.add('annualMileage', (annualMileage) => {
    cy.get("#annualmileage").should('be.visible').type(annualMileage)

})
Cypress.Commands.add('bottomNextInsurantData', () => {
    cy.get("#nextenterinsurantdata").click()

})

// mapping fields in Insurant Data
Cypress.Commands.add('firstName', (firstName) => {
    cy.get("#firstname").should('be.visible').type(firstName)

})

Cypress.Commands.add('lastName', (lastName) => {
    cy.get("#lastname").should('be.visible').type(lastName)
})

Cypress.Commands.add('dateOfBirth', (dateOfBirth) => {
    cy.get("#birthdate").should('be.visible').type(dateOfBirth)
})

Cypress.Commands.add('gender', (gender) => {
    cy.get("#gendermale").should('be.visible').type()
})

Cypress.Commands.add('streetAddress', (streetAddress) => {
    cy.get("#").should('be.visible').type()
})

Cypress.Commands.add('country', (country) => {
    cy.get("#").should('be.visible').type()
})

Cypress.Commands.add('zipCode', (zipCode) => {
    cy.get("#").should('be.visible').type()
})

Cypress.Commands.add('city', (city) => {
    cy.get("#").should('be.visible').type()
})

Cypress.Commands.add('occupation', (occupation) => {
    cy.get("#").should('be.visible').type()
})

Cypress.Commands.add('hobbies', (hobbies) => {
    cy.get("#").should('be.visible').type()
})

Cypress.Commands.add('website', (website) => {
    cy.get("#").should('be.visible').type()
})

Cypress.Commands.add('picture', (picture) => {
    cy.get("#").should('be.visible').type()
})

Cypress.Commands.add('bottomNextProductData', () => {
    cy.get("#nextenterproductdata").click()
})

