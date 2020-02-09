const { DATE_LINK_TAG } = require('../constants/selectors');
const WAIT_TIME_SHORT = 3000;
const colors = require('colors/safe');
const { openDateModal } = require('./openDateModal');
const {startingDate} = require('../helpers/argsHelper');
const selectDate = async (driver, dateIndex) => {
    await openDateModal(driver);
    const tags = await driver.findElements(DATE_LINK_TAG);
    const dateNames = [];
    for (const tag of tags) {
        dateNames.push(await tag.getText());
    }
    const startIndex = dateNames.findIndex(name => name === startingDate);
    const dateName = await tags[startIndex - dateIndex].getText(); 
    console.log(`about to select date in a split second: ${colors.blue(dateName)}`);
    await tags[startIndex - dateIndex].click();
    await driver.sleep(WAIT_TIME_SHORT);
    return dateName;
};

module.exports = {
    selectDate
};