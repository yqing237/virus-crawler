const { By } = require('selenium-webdriver');
module.exports = {
    CITY_DROPDOWN_TAG: By.css('div.ui_city_change.ui_city_change_top'),
    CITY_MODAL_TITLE: By.css('div.citylist_ctr_title'),
    CITY_TAG_SELECTOR: By.css('a.sel_city_name[filter="cityName"]'),
    DATE_PICKER_BUTTON: By.css('div.mgs-data-option.hui-option'),
    DATE_LIST: By.css('ul.hui-option-list'),
    DATE_LINK_TAG: By.xpath('//ul[@class="hui-option-list"]/li'),
    MOVEMENT_TYPE_BUTTONS: By.css('.button_group.primary div.radio'),
    TABLE_ROW_DATA_CITY_NAME: By.xpath('//div[@class="mgs-list-box"]//table/tbody/tr/td[2]/div/span[1]'),
    TABLE_ROW_DATA_CITY_PROVINCE: By.xpath('//div[@class="mgs-list-box"]//table/tbody/tr/td[2]/div/span[2]'),
    TABLE_ROW_DATA_CITY_PERCENTAGE: By.xpath('//div[@class="mgs-list-box"]//table/tbody//tr/td[3]'),
};