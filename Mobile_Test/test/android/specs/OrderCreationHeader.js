const LoginPage = require('../pageobjects/login_page')
const HomePage = require('../pageobjects/home_page')
const { createStep } = require("../utilities/helpers");

describe('verify the home page', () => {
    const testData = 'header'
       
    
    it('Order with Header Details', async () => {
            await createStep(`Validate Order with Header Details`, async () => {
                // Sign in
                await LoginPage.signIn();

                // Perform actions based on test data
                await HomePage.verifyOrderCreation(testData);
            });
    
    }).timeout(300000); 
    afterEach(async function () {
        await browser.reloadSession();
      }); 
})



