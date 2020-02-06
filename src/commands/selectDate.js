const { DATE_LINK_TAG } = require('../constants/selectors');
const WAIT_TIME_SHORT = 3000;
const colors = require('colors/safe');
const { openDateModal } = require('./openDateModal');
const selectDate = async (driver, dateIndex) => {
    await openDateModal(driver);
    await driver.sleep(WAIT_TIME_SHORT);
    const tags = await driver.findElements(DATE_LINK_TAG);
    const dateName = await tags[dateIndex].getText(); 
    console.log(`about to select date in a split second: ${colors.blue(dateName)}`);
    await tags[dateIndex].click();
    await driver.sleep(WAIT_TIME_SHORT);
    return dateName;
};

module.exports = {
    selectDate
};