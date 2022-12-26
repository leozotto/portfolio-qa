describe('testcases - my account - login', () => {


    it('Scenario 1 - Log-in with valid username and password.', () => {
        //STEPS
        // 1) Open the browser
        // 2) Enter the URL “http://practice.automationtesting.in/”
        // 3) Click on My Account Menu
        // 4) Enter registered username in username textbox
        // 5) Enter password in password textbox
        // 6) Click on login button
        // 7) User must successfully login to the web page
    })
    it('Scenario 2 - Log-in with incorrect username and incorrect password.', () => {
        //STEPS
        // 1) Open the browser
        // 2) Enter the URL “http://practice.automationtesting.in/”
        // 3) Click on My Account Menu
        // 4) Enter incorrect username in username textbox
        // 5) Enter incorrect password in password textbox.
        // 6) Click on login button
        // 7) Proper error must be displayed(ie Invalid username) and prompt to enter login again

    })
    it('Scenario 3 - Log-in with correct username and empty password.', () => {
        //STEPS
        // 1) Open the browser
        // 2) Enter the URL “http://practice.automationtesting.in/”
        // 3) Click on My Account Menu
        // 4) Enter valid username in username textbox
        // 5) Now enter empty password in the password textbox
        // 6) Click on login button.
        // 7) Proper error must be displayed(ie Invalid password) and prompt to enter login again
    })
    it('Scenario 4 - Log-in with empty username and valid password.', () => {
        //STEPS
        // 1) Open the browser
        // 2) Enter the URL “http://practice.automationtesting.in/”
        // 3) Click on My Account Menu
        // 4) Enter empty username in username textbox
        // 5) Now enter valid password in the password textbox
        // 6) Click on login button.
        // 7) Proper error must be displayed(ie Invalid username) and prompt to enter login again
    })
    it('Scenario 5 - Log-in with empty username and empty password.', () => {
        //STEPS
        // 1) Open the browser
        // 2) Enter the URL “http://practice.automationtesting.in/”
        // 3) Click on My Account Menu
        // 4) Enter empty username in username textbox
        // 5) Now enter valid password in the password textbox
        // 6) Click on login button.
        // 7) Proper error must be displayed(ie required username) and prompt to enter login again
    })
    it('Scenario 6 - Log-in -Password should be masked.', () => {
        //STEPS
        // 1) Open the browser
        // 2) Enter the URL “http://practice.automationtesting.in/”
        // 3) Click on My Account Menu
        // 4) Enter the password field with some characters.
        // 5) The password field should display the characters in asterisks or bullets such that the password is not visible on the screen

    })
    it('Scenario 7 - Login-Handles case sensitive.', () => {
        //STEPS
        // 1) Open the browser
        // 2) Enter the URL “http://practice.automationtesting.in/”
        // 3) Click on My Account Menu
        // 4) Enter the case changed username in username textbox
        // 5) Enter the case chenged password in the password tetxbox
        // 6) Now click on login button
        // 7) Login must fail saying incorrect username/password.

    })
    it('Scenario 8 - Login-Authentication.', () => {
        //STEPS
        // 1) Open the browser
        // 2) Enter the URL “http://practice.automationtesting.in/”
        // 3) Click on My Account Menu
        // 4) Enter the case changed username in username textbox
        // 5) Enter the case chenged password in the password tetxbox
        // 6) Now click on login button
        // 7) Once your are logged in, sign out of the site
        // 8) Now press back button
        // 9) User shouldn’t be signed in to his account rather a general webpage must be visible
        
    })
})
