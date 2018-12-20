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
    
  it('by using Metric method', async () => {

    await browser.fillIn("input[id='weight']", { with: "95" });
    await browser.fillIn("input[id='height']", { with: "185" });

    await browser.selectOption("select[id='method']", {option: 'Metric' })

    await browser.clickOnButton("button")
    let content = await browser.getContent("span[id='display_value']")
    expect(content).to.eql('Your BMI is 27.76');
  });

  it('by using Imperial method', async () => {

    await browser.fillIn("input[id='weight']", { with: "170" });
    await browser.fillIn("input[id='height']", { with: "67" });

    await browser.selectOption("select[id='method']", {option: 'Imperial' })

    await browser.clickOnButton("button")
    let content = await browser.getContent("span[id='display_value']")
    expect(content).to.eql('Your BMI is 26.62');
  });

  // context('by selecting Imperial method', () => {

  //   beforeEach(async () => {
  //     await browser.selectOption("select[id='unit']", {option: 'Imperial' })
  //   });
    
  //   it('and inputing his weight and height in imperial units', async () => {

  //     await browser.fillIn("input[id='weight-in-lbs']", { with: "170" })
  //     await browser.fillIn("input[id='height-in-in']", { with: "67" })

  //     await browser.clickOnButton("button")
  //     let content = await browser.getContent("span[id='display_value']")
  //     expect(content).to.eql('Your BMI is 26.33');
  //   });
  // });

});