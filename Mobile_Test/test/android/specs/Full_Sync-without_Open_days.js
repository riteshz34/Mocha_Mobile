const LoginPage = require('../pageobjects/login_page')
const HomePage = require('../pageobjects/home_page')
const { createStep } = require("../utilities/helpers");

describe('verify the home page', () => {
   
    it('Full synchronization without opened days ', async () => {
        await createStep('Validate Full synchronization without opened days', async () => {
             await LoginPage.signIn();
             await HomePage.fullsynchronization();
    });
    }).timeout(300000); 
    afterEach(async function () {
        await browser.reloadSession();
      }); 
})



