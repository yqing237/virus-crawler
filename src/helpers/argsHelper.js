const colors = require('colors');
let startCityIndex = 0;
let dateRange = 30;
const startIndex = process.env.npm_config_startIndex;
const inputDateRange = process.env.npm_config_dateRange;
if (startIndex) {
    startCityIndex = startIndex;
    console.log(colors.yellow(`Starting from city of index ${startCityIndex}`));
}

if (inputDateRange) {
    dateRange = inputDateRange;
    console.log(colors.yellow(`Will collect date up to ${dateRange} days`));
}

module.exports = {startCityIndex, dateRange};