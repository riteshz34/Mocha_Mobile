const Page = require('./page');
const util = require('../utilities/util');
const global = require('../../test data/globals');
var chaiexpect = require('chai').expect;

class LoginPage extends Page {
    get btnSignUpContainer () {
        return $('//*[@content-desc="button-sign-up-container"]');
    }

    get inputEmail () {
        return $('~input-email');
    }

    get inputPassword () {
        return $('~input-password');
    }

    get inputRepeatPassword () {
        return $('~input-repeat-password');
    }

    get btnSignUp () {
        return $('//*[@content-desc="button-SIGN UP"]');
    }

    get popupSignupSuccessMessage() {
        return $('//*[@resource-id="android:id/message"]');
    }
    get btnADLogin(){
        return $("//android.widget.Button[@text='Azure AD Login']")
    }
    get inputMSEmail(){
        return $("//*[@class='android.widget.EditText']")
    }
    get btnNext(){
        return $("//*[@class='android.widget.Button' and @text='Next']") 
    }
    get MSPassword(){
        return $("//*[@text='Enter password']/../..//*[@class='android.widget.EditText']")
    }
    get btnSignIn(){
        return $("//*[@class='android.widget.Button' and @text='Sign in']")
    }
    get checkBoxDevelopment(){
        return $("(//*[@text='Development']/..//*[@class='android.widget.TextView'])[2]")
    }
    get checkBoxShowAllCountry(){
        return $("(//*[@text='Show All countries']/..//*[@class='android.widget.TextView'])[1]")
    }
    get checkBoxCountryBulgaria(){
        return $("(//*[@text='Bulgaria']/..//*[@class='android.widget.TextView'])[2]")
    }
    get btnSYNCHRONIZE(){
        return $("//android.widget.Button[@text='Synchronize']")
    }
    get btnOkLogin(){
        return $("//android.widget.Button[@text='OK']")
    }
    get txtBoxLoginUsername(){
        return $("//android.widget.EditText[@text='SA_AUTOMATIONTEST']")
    }
    get txtBoxLoginPassword(){
        return $("//android.widget.EditText[@text='•']")   
    }
    get btnDontAllow(){
        return $("//android.widget.Button[@resource-id='com.android.permissioncontroller:id/permission_deny_button']")
    }
    get btndontAllowMaps(){
        return $("//android.widget.Button[@resource-id='com.android.permissioncontroller:id/permission_deny_and_dont_ask_again_button'] ")
    }      
        
    get btnhambugarMenu(){
        return $("//android.widget.TextView[@text='']")
    }
    get btntodayDate(){
        return $("//android.widget.RelativeLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[3]")
    }
    get txtTotalRequest(){
        return $("(//android.widget.TextView[@text='0'])[5]")
    }
    get date30(){
        return $("//android.widget.TextView[@text='30']")
    }
    get btnSelect(){
        return $("//android.widget.Button[@text='SELECT']")
    }
    get searchBox(){
        return $("//android.widget.EditText[@text='Type to search']")
    }
    get btnThreeDot(){
        return $("//android.widget.TextView[@text='']")
    }
    get btnAddTask(){
        return $("//android.widget.TextView[@text='Add Task']")
    }
    get checkBoxDeliveryorder(){
        return $("//android.widget.TextView[@text='Delivery order, ZOR']")
    }
    get btnSave(){
        return $("//android.widget.Button[@text='SAVE']")
    }
    get BtnYes(){
        return $("//android.widget.Button[@text='YES']")
    }
    get btnOkHomePage(){
        return $("//android.widget.Button[@text='OK']")
    }
    


    async signIn(){
        await util.elementToBeClicked(this.btnADLogin,40000)
        await util.passValuesToElement(this.inputMSEmail, global.Dev.user1.username)
        await util.elementToBeClicked(this.btnNext,5000)
        await util.passValuesToElement(this.MSPassword, global.Dev.user1.password)
        await util.elementToBeClicked(this.btnSignIn,10000)
        await util.elementToBeClicked(this.checkBoxDevelopment,10000)
        await util.elementToBeClicked(this.checkBoxShowAllCountry,10000)
        await util.elementToBeClicked(this.checkBoxCountryBulgaria,10000)
        await browser.pause(2000)
        await util.elementToBeClicked(this.btnSYNCHRONIZE,10000);
        await browser.pause(3000);
        await util.elementToBeClicked(this.btnOkLogin,30000)
        await util.passValuesToElement(this.txtBoxLoginUsername,global.Dev.SynUser.username)
        await util.passValuesToElement(this.txtBoxLoginPassword,global.Dev.SynUser.password)
        await util.elementToBeClicked(this.btnSYNCHRONIZE,10000)
        await util.elementToBeClicked(this.btnDontAllow,120000)
        await util.elementToBeClicked(this.btnDontAllow,10000)
        await browser.pause(3000);
        await util.elementToBeClicked(this.btndontAllowMaps)
        await browser.pause(3000);
        try {
            await util.elementToBeClicked(this.btnDontAllow,10000)
            await browser.pause(4000);
        }
        catch(error){
            console.log("no dont allow button")
        }
       
        try{
            await util.elementToBeClicked(this.btnOkHomePage,7000)
        }
       catch(error){
        console.log("there is no OK Botton")
       }
    }
    
}

module.exports = new LoginPage();