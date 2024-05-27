const LoginPage = require('../pageobjects/login_page')

describe('Sign In to SFALite app', () => {

    it('Sign In to SFALite app', async () => {
       await LoginPage.signIn();
    }).timeout(300000);
    /*afterEach(async function () {
        await browser.reloadSession();
      }); */
})



