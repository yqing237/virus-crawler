const { until } = require('selenium-webdriver');
const { DATE_PICKER_BUTTON, DATE_LINK_TAG } = require('../constants/selectors');
const WAIT_TIME = 10000;
const openDateModal = async (driver) => {
    await driver.wait(until.elementLocated(DATE_PICKER_BUTTON), WAIT_TIME);
    const dateDropdown = await driver.findElement(DATE_PICKER_BUTTON);
    await dateDropdown.click();
    await driver.wait(until.elementLocated(DATE_LINK_TAG), WAIT_TIME);
};

module.exports = {
    openDateModal
};