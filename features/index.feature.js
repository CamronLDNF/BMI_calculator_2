const { expect } = require('chai');
const BrowserHelpers = require('e2e_training_wheels')
const browser = new BrowserHelpers()

describe('User can calculate BMI', () => {
  before(async () => {
    await browser.init()
    await browser.visitPage('http://localhost:8080/')
  });

  beforeEach(async () => {
    await browser.page.reload();
  });

  after(async () => {
    await browser.close();
  });

  context('by selecting Metric method', () => {

    beforeEach(async () => {
      await browser.selectOption("select[id='unit']", {option: 'Metric' })
    });
    
    it('and inputing his weight and height in metric units', async () => {

      await browser.fillIn("input[id='weight-in-kgs']", { with: "95" })
      await browser.fillIn("input[id='height-in-cm']", { with: "185" })

      await browser.clickOnButton("button")
      let content = await browser.getContent("span[id='display_value']")
      expect(content).to.eql('Your BMI is 27.76');
    });
  });

  context('by selecting Imperial method', () => {

    beforeEach(async () => {
      await browser.selectOption("select[id='unit']", {option: 'Imperial' })
    });
    
    it('and inputing his weight and height in imperial units', async () => {

      await browser.fillIn("input[id='weight-in-lbs']", { with: "170" })
      await browser.fillIn("input[id='height-in-in']", { with: "67" })

      await browser.clickOnButton("button")
      let content = await browser.getContent("span[id='display_value']")
      expect(content).to.eql('Your BMI is 26.33');
    });
  });

});