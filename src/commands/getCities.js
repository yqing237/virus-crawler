const { CITY_TAG_SELECTOR, CITY_DROPDOWN_TAG } = require('../constants/selectors');
const {openCityModal} = require('./openCityModal');
const getCities = async (driver) => {
    await openCityModal(driver);
    const tags = await driver.findElements(CITY_TAG_SELECTOR);
    // close modal
    const cityDropDown = await driver.findElement(CITY_DROPDOWN_TAG);
    await cityDropDown.click();
    return tags;
};

module.exports = {
    getCities
};