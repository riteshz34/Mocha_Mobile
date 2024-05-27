const LoginPage = require('../pageobjects/login_page')
const HomePage = require('../pageobjects/home_page')
const { createStep } = require("../utilities/helpers");
describe('verify the home page', () => {
    const data ='manualPromotion'
    it('Order with Manual Promotion  Details', async () => {
        await createStep('Validate Order with Manual Promotion  Details', async () => {
            await LoginPage.signIn();
            await HomePage.verifyOrderCreation(data);
    });
    }).timeout(300000); 
    afterEach(async function () {
        await browser.reloadSession();
      }); 
})
