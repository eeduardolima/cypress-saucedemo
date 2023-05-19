const report = require("multiple-cucumber-html-reporter");
report.generate({
    jsonDir: "cypress/reporters/cucumber-json",  // ** Path of .json file **//
    reportPath: "./cypress/reporters/cucumber-htmlreport.html",
    metadata: {
        browser: {
            name: "chrome",
            version: "113",
        },
        device: "Local test machine",
        platform: {
            name: "windows"
        },
    },
});