const dotenv = require('dotenv');
const moment = require('moment');
const puppeteer = require('puppeteer');

dotenv.config();

const {STORE_CODE, TIME_DAY, TIME_MONTH, TIME_YEAR, TIME_HOUR, TIME_MINUTE, ORDER_NUMBER} = process.env;

(async () => {
  const browser = await puppeteer.launch({
    headless: false
  })
  const page = await browser.newPage()
  
  const navigationPromise = page.waitForNavigation()
  
  await page.goto('https://u.kfcvisit.com/tha')
  
  await page.waitForSelector('#content > #surveyEntryForm > #surveyQuestions > #Buttonholder > #NextButton')
  await page.click('#content > #surveyEntryForm > #surveyQuestions > #Buttonholder > #NextButton')
  
  await navigationPromise

  await page.waitForSelector('#InputStoreNum')
  await page.type('#InputStoreNum', STORE_CODE)

  await page.waitForSelector('#InputDay')
  await page.select('#InputDay', TIME_DAY)

  await page.waitForSelector('#InputMonth')
  await page.select('#InputMonth', TIME_MONTH)

  await page.waitForSelector('#InputYear')
  await page.select('#InputYear', TIME_YEAR)

  await page.waitForSelector('#InputHour')
  await page.select('#InputHour', TIME_HOUR)

  await page.waitForSelector('#InputMinute')
  await page.select('#InputMinute', TIME_MINUTE)

  await page.waitForSelector('#InputTransactionNum')
  await page.type('#InputTransactionNum', ORDER_NUMBER)

  await page.waitForSelector('#NextButton')
  await page.click('#NextButton')
  
  await navigationPromise

  await page.waitForSelector('#R001000\.1')
  await page.click('#R001000\.1')

  await page.waitForSelector('#NextButton')
  await page.click('#NextButton')
  
  await navigationPromise

  await page.waitForSelector('#R002000\.6')
  await page.click('#R002000\.6')

  await page.waitForSelector('#NextButton')
  await page.click('#NextButton')
  
  await navigationPromise

  await page.waitForSelector('#R004000\.5')
  await page.click('#R004000\.5')

  await page.waitForSelector('#NextButton')
  await page.click('#NextButton')
  
  await navigationPromise

  await page.waitForSelector('#R024000\.5')
  await page.click('#R024000\.5')

  await page.waitForSelector('#R007000\.5')
  await page.click('#R007000\.5')

  await page.waitForSelector('#R009000\.5')
  await page.click('#R009000\.5')

  await page.waitForSelector('#R013000\.5')
  await page.click('#R013000\.5')

  await page.waitForSelector('#R020000\.5')
  await page.click('#R020000\.5')

  await page.waitForSelector('#R032000\.5')
  await page.click('#R032000\.5')

  await page.waitForSelector('#NextButton')
  await page.click('#NextButton')
  
  await navigationPromise

  await page.waitForSelector('#R011000\.10')
  await page.click('#R011000\.10')

  await page.waitForSelector('#NextButton')
  await page.click('#NextButton')
  
  await navigationPromise

  await page.waitForSelector('#R033000\.2')
  await page.click('#R033000\.2')

  await page.waitForSelector('#NextButton')
  await page.click('#NextButton')
  
  await navigationPromise

  await page.waitForSelector('#R036000\.5')
  await page.click('#R036000\.5')

  await page.waitForSelector('#R035000\.5')
  await page.click('#R035000\.5')

  await page.waitForSelector('#NextButton')
  await page.click('#NextButton')
  
  await navigationPromise

  await page.waitForSelector('#NextButton')
  await page.click('#NextButton')

  await navigationPromise

  await page.waitForSelector('#R038000\.2')
  await page.click('#R038000\.2')

  await page.waitForSelector('#NextButton')
  await page.click('#NextButton')

  await navigationPromise
  
  await page.waitForSelector('#R040000\.5')
  await page.click('#R040000\.5')

  await page.waitForSelector('#R041000\.4')
  await page.click('#R041000\.4')

  await page.waitForSelector('#NextButton')
  await page.click('#NextButton')

  await navigationPromise

  await page.waitForSelector('#R000068\.1')
  await page.click('#R000068\.1')

  await page.waitForSelector('#R003000\.1')
  await page.click('#R003000\.1')

  await page.waitForSelector('#R000067\.1')
  await page.click('#R000067\.1')

  await page.waitForSelector('#NextButton')
  await page.click('#NextButton')

  await navigationPromise

  await page.waitForSelector('#R044000\.2')
  await page.click('#R044000\.2')

  await page.waitForSelector('#NextButton')
  await page.click('#NextButton')

  await navigationPromise

  await page.waitForSelector('#finishIncentiveHolder > p.ValCode')

  await page.screenshot({
    path: 'screenshot/' + moment().format('YYYYMMDD-HHmmss'),
    type: 'png'
  })

  await browser.close()

})()
