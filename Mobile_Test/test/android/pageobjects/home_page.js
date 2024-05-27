const Page = require('./page');
const util = require('../utilities/util');
const global = require('../../test data/globals');
var chaiexpect = require('chai').expect;
const LoginPage = require('../pageobjects/login_page');
const Constants =require('../../test data/Constants')
let txtProductOrder;
class HomePage extends Page {
   
    constructor() {
        super();
        this.currentDate = new Date();
        this.previousDate = new Date(this.currentDate);
        this.previousDate.setDate(this.currentDate.getDate() - 1);
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
        return $("//android.widget.TextView[@text='1']")
    }
    get btnAddtionSelect(){
        return $("//android.widget.Button[@text='Select']")
    } //android.widget.Button[@text="Select"]
    get searchBox(){
        return $("//android.widget.EditText[@text='Type to search']")
    }
    get btnThreeDot(){
        return $("(//android.widget.TextView[@text=''])[1]")
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
    get btnYes(){
        return $("//android.widget.Button[@text='Yes']")
    }    	
    //android.widget.Button[@text="Yes"]



    get btnOrder(){
        return $("//android.widget.Button[@text='Order']")
    }
    get checkBoxDeliveryOrderZOR(){
        return $("//android.widget.TextView[@text='Delivery order, ZOR']")
    }
    get btnOrderStart(){
        return $("//android.widget.TextView[@text='Next Visit Day']/../..//android.widget.Button[@text='Start']")
    }
    get inputProductQuantityOne(){
        return $("(//android.widget.TextView[@text='Name']/../..//android.widget.TextView)[15]")
    }
    get inputProductQuantityTwo(){
        return $("(//android.widget.TextView[@text='2'])[1]")
    }
    get btnProductQuantity(){
        return $("//android.widget.TextView[@text='6']")
    }
    get btnNext(){
        return $("//android.widget.Button[@text='Next']")
    }
    get btnATP(){
        return $("//android.widget.Button[@text='ATP']")
    }
    get btnSend(){
        return $("//android.widget.Button[@text='Send']")
    }
    get loader(){
        return $("//android.widget.ProgressBar")
    }
    get btnOrderView(){
        return $("((//android.widget.ListView/android.widget.LinearLayout)[last()])//android.widget.Button[@text='View']")
    }
    get btnHeader(){
        return $("//android.widget.Button[@text='Header']")
    }
    get btnDone(){
        return $("//android.widget.Button[@text='Done']")
    }
     get btn2ndDate(){
        return $("//android.widget.TextView[@text='4']")
    }
    get txtOfProduct(){
        return $("(//android.widget.TextView[@text='Name']/../..//android.widget.TextView)[11]")
    }
    get btnEditProductPromotion(){
        return $("(//android.widget.TextView[@text='Name']/../..//android.widget.TextView)[12]")
    }

    get txtSFAOrderNumber(){
        return $("(//android.widget.TextView[@text='SFA Order Number']/..//android.widget.TextView)[2]")
    }
    get listOfPrduct(){
        return $("((//android.widget.ListView/android.widget.LinearLayout)[last()])//android.widget.Button[@text='View']")
    }
    get btnShop(){
        return $("//androidx.recyclerview.widget.RecyclerView/android.view.ViewGroup[3]")
    }
    get btncheckboxMegbes(){
        return $("//android.widget.TextView[@text='Megbeszélés']")
    }


    hamburgerMenuTabs = (Tabs) => {
        return $("//android.widget.TextView[@text='" + Tabs + "']");
    }



    get btnTodayDate(){
        return $("//android.widget.TextView[@text='" + this.currentDate.getDate() + "']")
    }
    get btnPreviousDate(){
        return $("(//android.widget.TextView[@text='" + this.previousDate.getDate() + "'])[2]")
    }
     //(//android.widget.TextView[@text="22"])[2]
    get btnCloseDay(){
        return $("//android.widget.Button[@text='Close Day']")
    }
    get checkBoxDayClose(){
        return $("//android.widget.TextView[@text='Outlet closed during visit']")
    }
    get checkBoxSuccessfull(){
        return $("//android.widget.TextView[@text='Successul']")
    }
    get btnOk(){
        return $("//android.widget.Button[@text='OK']")
    }
    get checkBoxUploadPhotos(){
        return $("//android.widget.TextView[@text='Upload Outlets Photos']")
    }
    get checkBoxDocuments(){
        return $("//android.widget.TextView[@text='Documents']")
    }
    get btnSync(){
        return $("//android.widget.Button[@text='Sync']")
    }
    get btnDeliveryDate(){
        return $("//android.widget.TextView[@text='Delivery Date']")
    }
    get btnAddAddress(){
        return $("//android.widget.TextView[@text='']")
    }
    get inputAddressStreet(){
        return $("(//android.widget.TextView[@text='Street']/..//android.widget.EditText)[1]")
    }    
    get inputAddressHouseNumber(){
        return $("(//android.widget.TextView[@text='Street']/..//android.widget.EditText)[2]")
    }
    get inputAddressPostalCode(){
        return $("(//android.widget.TextView[@text='Street']/..//android.widget.EditText)[3]")
    }
    get inputAddressCity(){
        return $("(//android.widget.TextView[@text='Street']/..//android.widget.EditText)[4]")
    }
    get btnAdd(){
        return $("//android.widget.Button[@text='Add']")
    }
    get btnPaymentTerms(){
        return $("//android.widget.TextView[@text='Payment Terms']")
    }
    get checkBoxPaymentTerms(){
        return $("//android.widget.TextView[@text='_00 azonnal esedékes']")
    }
    get btnOrderNotes(){
        return $("//android.widget.TextView[@text='Order Notes']")
    }
    get checkboxOrderNotes(){
        return $("//android.widget.TextView[@text='Delivery window change']")
    }
    get btnNotes(){
        return $("//android.widget.TextView[@text='Note']")
    }
    get inputTextNotes(){
        return $("//android.widget.EditText")
    }
    get btnAccept(){
        return $("//android.widget.Button[@text='Accept']")
    }
    get btnYes(){
        return $("//android.widget.Button[@text='Yes']")
    }
    get btnSelect(){
        return $("//android.widget.Button[@text='Select']")
    }
    get checkBoxSuccessful(){
        return $("//android.widget.TextView[@text='Successful']")
    }
    get logoStar(){
        return $("(//android.widget.TextView[@text=''])[1]")
    }
    get btnFilterIcon(){
        return $("//android.widget.TextView[@text='']")
    }
    get btnMenuIcon(){
        return $("//android.widget.TextView[@text='']")
    }
    get btnAppiedPromtion(){
        return $("//android.widget.TextView[@text='Applied Promotions']")
    }
    get txtProductAppiedPromtion(){
        return $("(//android.widget.TextView[@text='Applied Promotions']/../../..//android.widget.TextView)[10]")
    }
    get btnClose(){
        return $("//android.widget.Button[@text='Close']")
    }
    get btnFilterPromotion(){
        return $("(//android.widget.TextView[@text='Promotion'])[2]")
    }
    get btnSyncHome(){
        return $("//android.widget.TextView[@text='']")
    }
    get txtSyncComplete(){
        return $("(//android.widget.TextView[@text='Sync Completed'])[1]")
    }
    get BtnAddProduct(){
        return $("//android.widget.TextView[@text='ID']/../..//android.widget.LinearLayout[1]")
    }

   
    async VeryTaskIsAdded(){
        
        await util.elementToBeClicked(this.btntodayDate,8000)
        const text = await this.txtTotalRequest.getText();
        console.log("the value is: ", text)
        chaiexpect(await this.txtTotalRequest.getText()).to.equals('0')
        await this.date30.click();
        await this.btnSelect.click();
        await LoginPage.btndontAllowMaps.click();
        await browser.pause(4000);
        await LoginPage.btndontAllowMaps.click();
       // await this.searchBox.setValue('1603004358');
        await this.btnThreeDot.click();
        await this.btnAddTask.click(); 
        await this.checkBoxDeliveryorder.click();
        await this.btnSave.click();
       // await this.BtnYes.click();
    }
    
    async verifyHamburgerMenuTabs(){
        await this.btnhambugarMenu.click();
        let tabs = Constants.HomePage.HAMBURGERMENUTABS
        let TabElement
        for (let i = 0; i < tabs.length; i++) {
            TabElement = this.hamburgerMenuTabs(tabs[i]);
            chaiexpect(true).to.equals(await TabElement.isDisplayed())
        }
    }
     
    async verifyHeaderOrderDetails(){
        await util.elementToBeClicked(this.btnHeader,10000)
        await util.elementToBeClicked(this.btnDeliveryDate,6000)
        await util.elementToBeClicked(this.btnSelect,6000)
        await util.elementToBeClicked(this.btnAddAddress,6000)
        await util.passValuesToElement(this.inputAddressStreet,"ESZTERGOM")
        await util.passValuesToElement(this.inputAddressHouseNumber,"5")
        await util.passValuesToElement(this.inputAddressPostalCode,"2500")
        await util.passValuesToElement(this.inputAddressCity,"ESZTERGOM")
        await util.elementToBeClicked(this.btnAdd,6000)
        await util.elementToBeClicked(this.btnPaymentTerms,6000)
        await util.elementToBeClicked(this.checkBoxPaymentTerms,6000)
        await util.elementToBeClicked(this.btnOrderNotes,6000)
        await util.elementToBeClicked(this.checkboxOrderNotes,6000)
        await util.elementToBeClicked(this.btnNotes,6000)
        await util.passValuesToElement(this.inputTextNotes,'Test Note')
        await util.elementToBeClicked(this.btnAccept,6000)
        await util.elementToBeClicked(this.btnDone,6000)
    }

    async verifyOrderCreation(data) {
        await this.selectOutlet();

        if (data === 'header') {
            await this.verifyHeaderOrderDetails();
           //await this.AddProduct();
            await this.verifyQuantity();
        } else if (data === 'manualPromotion') {
            await this.VerifyManualProduct();
            if(await this.logoStar.isDisplayed())
            {
            //await this.AddProduct();
            await this.verifyManualPromotion();
            await this.verifyATPCheck();
            await this.fullsynchronization();
            await this.verifyOrderDetails();
            }
            else{
                console.log("No Manual Promotion products are available")
            }
        }  
        if (data === 'header') {
        await this.verifyATPCheck();
        await this.verifyOrderDetails();
    }
    }
    async AddProduct(){
        await util.elementToBeClicked(this.btnAdd,8000)
        await util.elementToBeClicked(this.BtnAddProduct,8000)
        await util.elementToBeClicked(this.btnDone,8000)
    }
    async VerifyManualProduct(){
        if (await this.logoStar.isDisplayed()) {
            console.log("Product with promotion is available")
        }
        else{
            await util.elementToBeClicked(this.btnFilterIcon,8000)
            await util.elementToBeClicked(this.btnFilterPromotion,6000)   
        }
    }
    async verifyManualPromotion(){
        
        
        await util.elementToBeClicked(this.inputProductQuantityOne,5000)
        await util.elementToBeClicked(this.btnProductQuantity,5000)
        txtProductOrder = await this.txtOfProduct.getText();
        await util.elementToBeClicked(this.btnEditProductPromotion,6000)
        await util.elementToBeClicked(this.btnDone,6000)
        await util.elementToBeClicked(this.btnMenuIcon,6000)
        await util.elementToBeClicked(this.btnAppiedPromtion,6000)
        const txtProductApplied = await this.txtProductAppiedPromtion.getText();
        chaiexpect(txtProductOrder).to.equal(txtProductApplied)
        await util.elementToBeClicked(this.btnClose,6000)
        await util.elementToBeClicked(this.btnNext,6000)

    }
    async selectOutlet(){
        await util.elementToBeClicked(this.btnShop,8000)
        await util.elementToBeClicked(this.btnOrder,5000)
        await util.elementToBeClicked(this.checkBoxDeliveryOrderZOR,5000)
        await util.elementToBeClicked(this.btnOrderStart,10000)
        try{
            await browser.pause(2000)
            try {
                await util.elementToBeClicked(this.btnYes,6000)
             }
             catch(error){
                console.log("no yes button")
             }
            await util.elementToBeClicked(this.btncheckboxMegbes,6000)
            await util.elementToBeClicked(this.btnAddtionSelect,5000)
        }
        catch(error){
            console.log("no addtion vist page")
        }
        //await this.VerifyHeaderOrderDetails()
    }
    
    //var txtProductOrder = await this.txtOfProduct.getText();
    async verifyQuantity(){
        await util.elementToBeClicked(this.inputProductQuantityOne,5000)
        await util.elementToBeClicked(this.btnProductQuantity,5000)
        //await this.inputProductQuantityTwo.click();
        //await this.btnProductQuantity.click();
        txtProductOrder = await this.txtOfProduct.getText();
        await util.elementToBeClicked(this.btnNext,6000)
    }
    async verifyATPCheck(){
        await util.elementToBeClicked(this.btnATP,5000)
        await this.loader.waitForDisplayed({ reverse: true, timeout: 100000 });
        await browser.pause(3000);
        await util.elementToBeClicked(this.btnSend,6000)
        await util.elementToBeClicked(this.btnYes,10000)
        await this.loader.waitForDisplayed({ reverse: true, timeout: 100000 });
    }
    async verifyOrderDetails(){
        await util.elementToBeClicked(this.btnOrderView,10000)
        const txtProductView = await this.txtOfProduct.getText();
        chaiexpect(txtProductOrder).to.equal(txtProductView)
        console.log("the value is: ", txtProductOrder)
        console.log("the value is: ", txtProductView)
        await util.elementToBeClicked(this.btnHeader,6000)
        const SFAOrderNumber = await this.txtSFAOrderNumber.getText();
        chaiexpect(parseInt(SFAOrderNumber)).to.be.gt(0);
        await util.elementToBeClicked(this.btnDone,5000)
    }


    async closePreviousDay(){
        await util.elementToBeClicked(this.btnTodayDate,6000)
        await util.elementToBeClicked(this.btnPreviousDate,6000)
        await util.elementToBeClicked(this.btnTodayDate,6000)
        await util.elementToBeClicked(this.btnCloseDay,6000)
        try{
            await util.elementToBeClicked(this.btnYes,6000)
            try{
                await util.elementToBeClicked(this.btnYes,6000)
            }
            catch(error){
                console.log("No popup this time")
            }
            try{
                await util.elementToBeClicked(this.checkBoxSuccessful,6000)
                await util.elementToBeClicked(this.btnSelect,6000)
               
            }
            catch(error){
                consol.log("no Yes btn")
            }
            await util.elementToBeClicked(this.checkBoxDayClose,10000)
            await util.elementToBeClicked(this.btnAddtionSelect,8000)
            await util.elementToBeClicked(this.btnOk,6000)
            try{
                await util.elementToBeClicked(this.btnOk,6000)}
            catch(error)
                {"no ok button this time"}
            await util.elementToBeClicked(this.checkBoxUploadPhotos,6000)
            await util.elementToBeClicked(this.checkBoxDocuments,6000)
            await util.elementToBeClicked(this.btnSync,10000)  
            await this.txtSyncComplete.waitForDisplayed(25000)
            chaiexpect(true).to.equals(await this.txtSyncComplete.isDisplayed())
        }
        catch(error){
            console.log("day is closed")
            await util.elementToBeClicked(this.btnOk,6000)
        }
    }
   
    async fullsynchronization(){
        await util.elementToBeClicked(this.btnSyncHome,10000)
        try{
            await util.elementToBeClicked(this.btnOk,10000)
        }
        catch(error){
            console.log("no Ok button this time")
        }
        await util.elementToBeClicked(this.btnSync,10000)
        await this.txtSyncComplete.waitForDisplayed(25000)
        chaiexpect(true).to.equals(await this.txtSyncComplete.isDisplayed())
    }
}

module.exports = new HomePage();