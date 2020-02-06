const { selectCity } = require('./selectCity');
const { getTableData } = require('./getTableData');
const { selectDate } = require('./selectDate');
const colors = require('colors');
const { dateRange } = require('../helpers/argsHelper');
const { selectMovementType } = require('./selectMovementType');
const INFLUX_TAG_NAME = 'influx';
const OUTFLUX_TAG_NAME = 'outflux';
const getCityMetadata = async (driver, cityIndex) => {
    const cityName = await selectCity(driver, cityIndex);
    console.log(colors.yellow(`Start collecting influx data for ${cityName}`));
    const influxData = await collectMetadata(driver);
    console.log(colors.yellow(`Start collecting outflux data for ${cityName}`));
    await selectMovementType(driver, 'OUTFLUX');
    const outfluxData = await collectMetadata(driver);
    return { [INFLUX_TAG_NAME]: influxData, [OUTFLUX_TAG_NAME]: outfluxData };
};

const collectMetadata = async (driver) => {
    const metadata = {};
    for (let dateIndex = 0; dateIndex < dateRange; dateIndex++) {
        const dateName = await selectDate(driver, dateIndex);
        const currentData = await getTableData(driver);
        metadata[dateName] = currentData;
    }
    return metadata;
};

module.exports = { getCityMetadata };