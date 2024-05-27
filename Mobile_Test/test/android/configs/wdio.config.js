
const config = {
   
    port: 4723,
    services: ['appium'],
    specs: ['./test/android/specs/*.js'],

    maxInstances: 5,

    capabilities: [{
            "platformName": "Android",
            "appium:platformVersion": "14.0",
            "appium:deviceName": "emulator-5554"     
    }],
    logLevel: 'debug',
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 240000,
    connectionRetryCount: 3,
    framework: 'mocha',

    reporters: ['spec',
        ['allure', {
            outputDir: 'allure-results',
            disableWebdriverStepsReporting: true,
            disableWebdriverScreenshotsReporting: true,
        }]],

    reporters: ['spec',
        [HtmlReporter, {
            debug: true,
            outputDir: './reports/',
            filename: platform+'.html',
            reportTitle: platform+' Report',
            //to show the report in a browser when done
            showInBrowser: true,
            useOnAfterCommandForScreenshot: true
            
        }]],


    mochaOpts: {
        ui: 'bdd',
        timeout: 99999999
    },

};
module.exports.config = config;
