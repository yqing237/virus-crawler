const colors = require('colors');
let startCityIndex = 0;
let dateRange = 30;
let startingDate = '2020-01-01';
const startIndex = process.env.npm_config_startIndex;
const inputDateRange = process.env.npm_config_dateRange;
const inputStartDate = process.env.npm_config_startDate;
if (startIndex) {
    startCityIndex = startIndex;
    console.log(colors.yellow(`Starting from city of index ${startCityIndex}`));
}

if (inputDateRange) {
    dateRange = inputDateRange;
    console.log(colors.yellow(`Will collect date up to ${dateRange} days`));
}

if (inputStartDate) {
    startingDate = inputStartDate;
    console.log(colors.yellow(`Starting from date ${startingDate}`));
}

module.exports = {startCityIndex, dateRange, startingDate};