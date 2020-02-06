const { until } = require('selenium-webdriver');
const { MOVEMENT_TYPE_BUTTONS } = require('../constants/selectors');
const WAIT_TIME_SHORT = 3000;
const selectMovementType = async (driver, type) => {
    await driver.wait(until.elementLocated(MOVEMENT_TYPE_BUTTONS), WAIT_TIME_SHORT);
    const buttons = await driver.findElements(MOVEMENT_TYPE_BUTTONS);
    if (type === 'INFLUX') {
        console.log(`about to select influx in a split second`);
        await buttons[0].click();
    } else {
        console.log(`about to select outflux in a split second`);
        await buttons[1].click();
    }
    await driver.sleep(WAIT_TIME_SHORT);
};

module.exports = {
    selectMovementType
};