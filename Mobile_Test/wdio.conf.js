const path=require('path'); 
exports.config = {
 
   user: process.env.LT_USERNAME||'raghavendra.krishna', 
    key: process.env.LT_ACCESS_KEY||'mWEgyLi2aBaXPs08JLGdTT2p6NSQCoh4OCke66KStU1VFe1df6', 
    logFile : './logDir/api.log', 
    product : 'appAutomation', 
    services: [ 
        ['lambdatest', { 
            tunnel: true 
        }] 
    ], 
    hostname: 'mobile-hub.lambdatest.com', 
    path: '/wd/hub', 
    strictSSL: false, 
    protocol: 'https', 
    port: 443, 
    // ./LT --user riteshzingare.me@sbjit.edu.in --key guHgxsbIeMGIDsWyoKIBPi9N7j1kW1s8iRAl7zRb43Bb3hC12G
    // ==================== 
    // Runner Configuration 
    // ==================== 
    // WebdriverIO supports running e2e tests as well as unit and component tests. 
    runner: 'local', 
   // port: 4723, 
    // 
    // ================== 
    // Specify Test Files 
    // ================== 
    // Define which test specs should run. The pattern is relative to the directory 
    // of the configuration file being run. 
    // 
    // The specs are defined as an array of spec files (optionally using wildcards 
    // that will be expanded). The test for each spec file will be run in a separate 
    // worker process. In order to have a group of spec files run in the same worker 
    // process simply enclose them in an array within the specs array. 
    // 
    // If you are calling wdio from an NPM script (see https://docs.npmjs.com/cli/run-script), 
    // then the current working directory is where your package.json resides, so wdio 
    // will be called from there. 
    // 
    specs: [ 
           'test/android/specs/Login.js', 
        ], 
   
    exclude: [ 
        // 'path/to/excluded/files' 
    ], 
    // 
    // ============ 
    // Capabilities 
    // ============ 
    // Define your capabilities here. WebdriverIO can run multiple capabilities at the same 
    // time. Depending on the number of capabilities, WebdriverIO launches several test 
    // sessions. Within your capabilities you can overwrite the spec and exclude options in 
    // order to group specific specs to a specific capability. 
    // 
    // First, you can define how many instances should be started at the same time. Let's 
    // say you have 3 different capabilities (Chrome, Firefox, and Safari) and you have 
    // set maxInstances to 1; wdio will spawn 3 processes. Therefore, if you have 10 spec 
    // files and you set maxInstances to 10, all spec files will get tested at the same time 
    // and 30 processes will get spawned. The property handles how many capabilities 
    // from the same test should run tests. 
    // 
    maxInstances: 10, 
    // 
    // If you have trouble getting all important capabilities together, check out the 
    // Sauce Labs platform configurator - a great tool to configure your capabilities: 
    // https://saucelabs.com/platform/platform-configurator 
    // 
 
   /*capabilities: [ 
        { 
          'LT:Options': { 
            maxInstances: 5, 
            browserName: 'Chrome', 
            browserVersion: 'latest-1', 
            platform: process.env.HYPEREXECUTE_PLATFORM || 'windows 10', 
            build: 'Wdio Hypertest Sample' 
          }, 
        }], */
        capabilities: [{
          'LT:Options': {
            maxInstances: 5,
            platform: 'android', // or 'ios'
            deviceName: 'Pixel Tablet', // or the name of your desired mobile device
            browserName: 'chrome', // You can omit this since it's not necessary for testing mobile apps
            build: 'Wdio Hypertest Sample',
            app: "lt://APP10160201271708438106848573",
            isRealMobile: true 
            },
          }],
 
    // 
    // =================== 
    // Test Configurations 
    // =================== 
    // Define all options that are relevant for the WebdriverIO instance here 
    // 
    // Level of logging verbosity: trace | debug | info | warn | error | silent 
    logLevel: 'debug', 
    // 
    // Set specific log levels per logger 
    // loggers: 
    // - webdriver, webdriverio 
    // - @wdio/browserstack-service, @wdio/devtools-service,
}