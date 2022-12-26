describe('testcases - my account - registration', () => {


    it('Scenario 1 - Shop-Filter By Price Functionality', () => {
        //STEPS
        // 1) Open the browser
        // 2) Enter the URL “http://practice.automationtesting.in/”
        // 3) Click on Shop Menu
        // 4) Adjust the filter by price between 150 to 450 rps
        // 5) Now click on Filter button
        // 6) User can view books only between 150 to 450 rps price
    })
    it('Scenario 2 - Shop-Product Categories Functionality', () => {
        //STEPS
        // 1) Open the browser
        // 2) Enter the URL “http://practice.automationtesting.in/”
        // 3) Click on Shop Menu
        // 4) Click any of the product links available in the product category
        // 5) Now user can view only that particular product
    })
    it('Scenario 3 - Shop-Default Sorting Functionality by Popularity', () => {
        //STEPS
        // 1) Open the browser
        // 2) Enter the URL “http://practice.automationtesting.in/”
        // 3) Click on Shop Menu
        // 4) Click on Sort by Popularity item in Default sorting dropdown
        // 5) Now user can view the popular products only
    })
    it('Scenario 4 - Shop-Default Sorting Functionality by Average ratings', () => {
        //STEPS
        // 1) Open the browser
        // 2) Enter the URL “http://practice.automationtesting.in/”
        // 3) Click on Shop Menu
        // 4) Click on Sort by Average ratings in Default sorting dropdown
        // 5) Now user can view the popular products only
    })
    it('Scenario 5 - Shop-Default Sorting Functionality by Newness ratings', () => {
        //STEPS
        // 1) Open the browser
        // 2) Enter the URL “http://practice.automationtesting.in/”
        // 3) Click on Shop Menu
        // 4) Click on Sort by Newness ratings in Default sorting dropdown
        // 5) Now user can view the popular products only
    })
    it('Scenario 6 - Shop-Default Sorting Functionality by Low to High Item', () => {
        //STEPS
        // 1) Open the browser
        // 2) Enter the URL “http://practice.automationtesting.in/”
        // 3) Click on Shop Menu
        // 4) Click on Sort by Low to High Item in Default sorting dropdown
        // 5) Now user can view the popular products only
    })
    it('Scenario 7 - Shop-Default Sorting Functionality by High to Low Item ', () => {
        //STEPS
        // 1) Open the browser
        // 2) Enter the URL “http://practice.automationtesting.in/”
        // 3) Click on Shop Menu
        // 4) Click on Sort by High to Low Item in Default sorting dropdown
        // 5) Now user can view the popular products only
    })
    it('Scenario 8 - Shop-Read More Functionality', () => {
        //STEPS
        // 1) Open the browser
        // 2) Enter the URL “http://practice.automationtesting.in/”
        // 3) Click on Shop Menu
        // 4) Click on read more button in home page
        // 5) Read More option indicates the Out Of Stock.
        // 6) User cannot add the product which has read more option as it was out of stock.
    })
    it('Scenario 9 - Shop-Sale Functionality', () => {
        //STEPS
        // 1) Open the browser
        // 2) Enter the URL “http://practice.automationtesting.in/”
        // 3) Click on Shop Menu
        // 4) Click on Sale written product in home page
        // 5) User can clearly view the actual price with old price striken for the sale written products
    })
    it('Scenario 10 - Shop-Add to Basket-View Basket Functionality', () => {
        //STEPS
        // 1) Open the browser
        // 2) Enter the URL “http://practice.automationtesting.in/”
        // 3) Click on Shop Menu
        // 4) Click on the Add To Basket button which adds that book to your basket
        // 5) User can view that Book in the Menu item with price .
        // 6) Now click on View Basket link which navigates to proceed to check out page.
        // 7) Now user can find total and subtotal values just above the Proceed to Checkout button.
        // 8) The total always < subtotal because taxes are added in the subtotal
        // 9) Now click on Proceed to Check out button which navigates to payment gateway page.
        // 10) User can view Billing Details,Order Details,Additional details and Payment gateway details.
        // 11) Now user can fill his details in billing details form and can opt any payment in the payment gateway like Direct bank transfer,cheque,cash or paypal.
        // 12) Now click on Place Order button to complete process
        // 13) On clicking place order button user completes his process where the page navigates to Order confirmation page with order details,bank details,customer details and billing details.
    })
    it('Scenario 11 - Shop-Add to Basket-View Basket through Item link', () => {
        //STEPS
        // 1) Open the browser
        // 2) Enter the URL “http://practice.automationtesting.in/”
        // 3) Click on Shop Menu
        // 4) Click on the Add To Basket button which adds that book to your basket
        // 5) User can view that Book in the Menu item with price .
        // 6) Now click on Item link which navigates to proceed to check out page.
        // 7) Now user can find total and subtotal values just above the Proceed to Checkout button.
        // 8) The total always < subtotal because taxes are added in the subtotal
        // 9) Now click on Proceed to Check out button which navigates to payment gateway page.
        // 10) User can view Billing Details,Order Details,Additional details and Payment gateway details.
        // 11) Now user can fill his details in billing details form and can opt any payment in the payment gateway like Direct bank transfer,cheque,cash or paypal.
        // 12) Now click on Place Order button to complete process
        // 13) On clicking place order button user completes his process where the page navigates to Order confirmation page
        // with order details,bank details,customer details and billing details
    })
    it('Scenario 12 - Shop-Add to Basket-View Basket-Tax Functionality', () => {
        //STEPS
        // 1) Open the browser
        // 2) Enter the URL “http://practice.automationtesting.in/”
        // 3) Click on Shop Menu
        // 4) Click on the Add To Basket button which adds that book to your basket
        // 5) User can view that Book in the Menu item with price .
        // 6) Now click on Item link which navigates to proceed to check out page.
        // 7) Now user can find total and subtotal values just above the Proceed to Checkout button.
        // 8) The total always < subtotal because taxes are added in the subtotal
        // 9) The tax rate variers for India compared to other countries
        // 10) Tax rate for indian should be 2% and for abroad it should be 5%
    })
})
