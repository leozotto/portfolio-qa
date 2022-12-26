describe('testcases - my account - registration', () => {


    it('Scenario 1 - Registration-Sign-in', () => {
        //STEPS
        // 1) Open the browser
        // 2) Enter the URL “http://practice.automationtesting.in/”
        // 3) Click on My Account Menu
        // 4) Enter registered Email Address in Email-Address textbox
        // 5) Enter your own password in password textbox
        // 6) Click on Register button
        // 7) User will be registered successfully and will be navigated to the Home page
    })
    it('Scenario 2 - Registration with Invalid Email-id', () => {
        //STEPS
        // 1) Open the browser
        // 2) Enter the URL “http://practice.automationtesting.in/”
        // 3) Click on My Account Menu
        // 4) Enter invalid Email Address in Email-Address textbox
        // 5) Enter your own password in password textbox
        // 6) Click on Register button
        // 7) Registration must fail with a warning message(ie You must enter a valid email address)
    })
    it('Scenario 3 - Registration with empty Email-id', () => {
        //STEPS
        // 1) Open the browser
        // 2) Enter the URL “http://practice.automationtesting.in/”
        // 3) Click on My Account Menu
        // 4) Enter empty Email Address in Email-Address textbox
        // 5) Enter your own password in password textbox
        // 6) Click on Register button
        // 7) Registration must fail with a warning message(ie please provide valid email address)
    })
    it('Scenario 4 - Registration with empty password', () => {
        //STEPS
        // 1) Open the browser
        // 2) Enter the URL “http://practice.automationtesting.in/”
        // 3) Click on My Account Menu
        // 4) Enter valid Email Address in Email-Address textbox
        // 5) Enter empty password in password textbox
        // 6) Click on Register button
        // 7) Registration must fail with a warning message(ie please enter an account password)
    })
    it('Scenario 5 - Registration with empty Email-id & password', () => {
        //STEPS
        // 1) Open the browser
        // 2) Enter the URL “http://practice.automationtesting.in/”
        // 3) Click on My Account Menu
        // 4) Enter empty Email Address in Email-Address textbox
        // 5) Enter empty password in password textbox
        // 6) Click on Register button
        // 7) Registration must fail with a warning message(ie please provide valid email address)
    })
})
