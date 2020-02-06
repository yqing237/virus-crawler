const { TABLE_ROW_DATA_CITY_PERCENTAGE, TABLE_ROW_DATA_CITY_NAME, TABLE_ROW_DATA_CITY_PROVINCE } = require('../constants/selectors');
const getTableData = async (driver) => {
    const percentages = await driver.findElements(TABLE_ROW_DATA_CITY_PERCENTAGE);
    const cityNames = await driver.findElements(TABLE_ROW_DATA_CITY_NAME);
    const provinceNames = await driver.findElements(TABLE_ROW_DATA_CITY_PROVINCE);
    const list = [];
    for (let i = 0; i < percentages.length; i++) {
        const percentage = await percentages[i].getText();
        const cityName = await cityNames[i].getText();
        const provinceName = await provinceNames[i].getText();
        list.push({ percentage, cityName, provinceName });
    }
    return list;
};

module.exports = {
    getTableData
};