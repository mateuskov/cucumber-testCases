const webdriverio = require('webdriverio');

//paramters to find device and application
let options = {
    desiredCapabilities: {
        platformName: "Android",
        deviceName: "emulator-5554",
        platformVersion: "9.0",
        appPackage: "com.facebook.katana",
        appActivity: "com.facebook.katana.LoginActivity", //activity to start
        resetKeyboard: true,  
        noReset: true,
        unicodeKeyboard: true
    },
    host: "127.0.0.1",
    port: 4723
}

//create WebDriverIO instance with the options;
function createDriver() {
    const client = webdriverio.remote(options);
    return client;
}

exports.driver = createDriver();