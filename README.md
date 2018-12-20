# **BMI Calculator**
-------
This is a simple BMI calculator. It allows users to measure their BMI index. 

View [live app](https://camronldnf.github.io/BMI_calculator_2/)

## Tech stack
-------
Building the web app:
* Javascript
* NodeJS
* HTML
* MUI CSS framework

Testing the app:
* [e2e training wheels](https://www.npmjs.com/package/e2e_training_wheels), which includes:
    * Mocha test framework for Javascript on Node
    * Chai assertion library for Node
    * Puppeteer to run headless Chrome
    * Superstatic as a local server

## How to install
-------
1. Download the app folder
2. Open the app folder in your CLI
3. Run `npm install` to install all packages
4. Run `open src/index.html` to launch the app in your browser

## How to run the test suite
-------
1. To unit test: `npm run specs`
2. To acceptance test: `npm run features`
3. To run both: `npm run test`
