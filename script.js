require('chromedriver');
const { Builder } = require('selenium-webdriver');
const colors = require('colors/safe');
const { pageName } = require('./src/pages/pages');
const { getCities } = require('./src/commands/getCities');
const { getCityMetadata } = require('./src/commands/getCityMetadata');
const { startCityIndex } = require('./src/helpers/argsHelper');
const { writeFile } = require('./src/helpers/writeFile');
(async function execute() {
  let driver = await new Builder().forBrowser('chrome').build();
  console.log(colors.green('Driver online'));
  try {
    await driver.get(pageName);
    const cities = await getCities(driver);
    console.log(colors.yellow(`Got ${cities.length} cities on the list!`));
    for (let cityIndex = startCityIndex; cityIndex < cities.length; cityIndex++) {
      const data = await getCityMetadata(driver, cityIndex);
      await writeFile(JSON.stringify(data), cityIndex);
    }
  } catch (e) {
    console.log(colors.red(e));
  }
  finally {
    await driver.quit();
  }
})();