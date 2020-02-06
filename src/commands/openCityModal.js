const { until } = require('selenium-webdriver');
const { CITY_MODAL_TITLE, CITY_DROPDOWN_TAG } = require('../constants/selectors');
const WAIT_TIME = 10000;
const openCityModal = async (driver) => {
    await driver.wait(until.elementLocated(CITY_DROPDOWN_TAG), WAIT_TIME);
    const cityDropDown = await driver.findElement(CITY_DROPDOWN_TAG);
    await cityDropDown.click();
    await driver.wait(until.elementLocated(CITY_MODAL_TITLE), WAIT_TIME);
};

module.exports = {
    openCityModal
};