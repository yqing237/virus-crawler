require('chromedriver');
const { Builder } = require('selenium-webdriver');
const colors = require('colors/safe');
const { pageName } = require('./src/pages/pages');
const { getCities } = require('./src/commands/getCities');
const { getCityMetadata } = require('./src/commands/getCityMetadata');
const { startCityIndex } = require('./src/helpers/argsHelper');
const { writeFile } = require('./src/helpers/writeFile');
let retryCount = 0;
require('log-timestamp');
(async function execute() {
  let driver = await new Builder().forBrowser('chrome').build();
  process.env.CURRENT_INDEX = +startCityIndex;
  console.log(colors.green('Driver online'));
  await executeProcess(driver, +process.env.CURRENT_INDEX);
})();


const executeProcess = async (driver, startIndex) => {
  try {
    await driver.get(pageName);
    const cities = await getCities(driver);
    console.log(colors.yellow(`Got ${cities.length} cities on the list!`));
    for (let cityIndex = startIndex; cityIndex < cities.length; cityIndex++) {
      const data = await getCityMetadata(driver, cityIndex);
      await writeFile(JSON.stringify(data), cityIndex);
      console.log(colors.green(`Setting current city index to ${+process.env.CURRENT_INDEX + 1}`));
      process.env.CURRENT_INDEX = +process.env.CURRENT_INDEX + 1;
      retryCount = 0;
    }
  } catch (e) {
    console.log(colors.red(e));
    retryCount++;
    if (retryCount <= 3) {
      console.log(colors.yellow(`Retrying ${retryCount} time(s)`));
      await executeProcess(driver, +process.env.CURRENT_INDEX);
    } else {
      console.log(colors.red(`Retrying up to 3 times at most, exiting process`));
    }
  } finally {
    await driver.quit();
    process.exit(0);
  }
};