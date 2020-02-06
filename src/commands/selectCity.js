const { CITY_TAG_SELECTOR } = require('../constants/selectors');
const WAIT_TIME_SHORT = 3000;
const colors = require('colors/safe');
const {openCityModal} = require('./openCityModal');
const selectCity = async (driver, cityIndex) => {
    await openCityModal(driver);
    await driver.sleep(WAIT_TIME_SHORT);
    const tags = await driver.findElements(CITY_TAG_SELECTOR);
    const cityName = await tags[cityIndex].getText();
    console.log(`about to select city in a split second: ${colors.blue(cityName)}`);
    await tags[cityIndex].click();
    // custom delay
    await driver.sleep(WAIT_TIME_SHORT);
    return cityName;
};

module.exports = {
    selectCity
};