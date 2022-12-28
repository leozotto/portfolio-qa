const make = ["Audi", "BMW", "Ford", "Honda", "Mazda", "Mercedes Benz",
              "Nissan", "Opel", "Porsche", "Renault", "Skoda", "Suzuki", 
              "Toyota", "Volkswagen", "Volvo"]
const randomMake = make[Math.floor(Math.random() * make.length)];
const randomEnginePerformance = Math.floor(Math.random() * 1999 + 1);
const numberOfSeats = Math.floor(Math.random() * 8 + 1);
const fuelType = ["Petrol", "Diesel", "Electric Power", "Gas", "Other"]
const randomFuelType = fuelType[Math.floor(Math.random() * fuelType.length)];
const randomListPrice = Math.floor(Math.random() * 99999 + 500);
const randomAnnualMileage = Math.floor(Math.random() * 99999 + 100);


describe('Enter Vehicle Data', () => {
    beforeEach(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.visit('/')
        cy.viewport(1920,1080)

    });


    it.only('Scenario 1 - ', () => {

        cy.clickAutomobile()
        cy.make(randomMake) 
        cy.enginePerformance(randomEnginePerformance) //range 1 - 2000 - ok
        // cy.dateOfManafacture() //today (date)
        cy.numberOfSeats(numberOfSeats)
        cy.fuelType(randomFuelType) 
        cy.listPrice(randomListPrice) //range 500 - 100000 - ok
        cy.licensePlateNumber("license") //random license
        cy.annualMileage(randomAnnualMileage) //range 100 - 100000
        cy.bottomNextInsurantData()
    })

})
