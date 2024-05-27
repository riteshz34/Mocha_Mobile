class CommonUtils {


    validateChaiAssertion(expected, actual, message, status) {
        if (status == "true") {
            console.log("Expected Values " + expected + " ::=:: Actual Values " + actual)
            chaiexpect(expected).to.equals(actual, message);
        }
        else if (status == "contains") {
            console.log("Expected Values " + expected + " ::Contains:: Actual Values " + actual)
            chaiexpect(actual).to.contains(expected, message);
        }
        else if (status == "greater") {
            console.log("Expected Values " + expected + " ::>:: Actual Values " + actual)
            chaiexpect(expected).to.be.greaterThanOrEqual(actual, message);
        }
        else if (status == "notcontains") {
            console.log("Expected Values " + expected + " ::Not Contains:: Actual Values " + actual)
            chaiexpect(actual).not.to.contains(expected, message);
        }
        else {
            console.log("Expected Values " + expected + " ::!=:: Actual Values " + actual)
            chaiexpect(expected).to.not.equals(actual, message);
        }
    }

    async elementToBeClicked(clickElement, TimeOut) {
        await clickElement.waitForDisplayed({ timeout: TimeOut });
        await clickElement.click();
    }

    async passValuesToElement(element, eleValues) {
        await element.waitForDisplayed({ timeout: 30000 });
        await element.setValue(eleValues);

    }
    async jsClickElement(querySelector) {
        await browser.execute((querySelector) => {
            const ele = document.querySelector(querySelector);
            return ele.click()
        }, querySelector)
    }



    async toGetElementText(element) {
        await element.waitForDisplayed({ timeout: 8000 });
        return element.getText();
    }


    async getElementTextAndVerify(element, eleName) {
        await element.waitForDisplayed({ timeout: 8000 });
        var getName = await element.getText()
        chaiexpect(await getName).to.equal(eleName, "Element Text is not Matching");
    }

    async verifyElementTobBeDisplayed(element) {
        try {
            await element.waitForDisplayed({ timeout: 8000 });
            return await element.isDisplayed();
        } catch (NoSuchElementFound) {
            return false;
        }
    }


    async verifyElementToBeDisabled(clickElement) {
        if (clickElement.isEnabled()) {
            await clickElement.waitForExist(5000);
            await clickElement.waitForDisplayed(2000);
            await clickElement.click();
        }
        else {
            await clickElement.isDisabled();
        }
    }

    async verifyTextDisplayed(text) {
        try {
            return await (await $(getTextElement(text))).isDisplayed();
        } catch (NoSuchElementFound) {
            return false;
        }
    }
    async validatePhoneFormat(phoneNumber) {
        var phoneno = /^\(?([0-9]{3})\)?[- ]?([0-9]{3})[- ]?([0-9]{4})$/;
        if (phoneno.test(phoneNumber)) {
            return true
        } else {
            return false
        }
    }
    async verifyDateFormat(date) {
        var date_regex = /^\d{2}\/\d{2}\/\d{4}$/;
        if (date_regex.test(date)) {
            console.log("Date follows mm/dd/yy format");
            return true;
        }
        else {
            console.log("Invalid Date Format");
            return false;
        }
    }
    async ScrollToDown() {
        await browser.touchAction([
            { action: 'press', x: 1332, y: 1099 }, // Define the starting position
            { action: 'wait', ms: 1000 }, // Optionally add wait time
            { action: 'moveTo', x: 1299, y:1380  }, // Define the ending position
            { action: 'release' } // Release the touch action
        ]);
        await browser.pause(5000);
    }



}
module.exports = new CommonUtils();
