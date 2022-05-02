import {goods} from './goods.js';

/**
 * @param {string} brand
 * @param goods
 * @returns {*}
 */
const brandFilter = (brand, goods) => {
    if (goods.brand === 'Apple') {
        return goods
    } else if (goods.brand === 'Samsung') {
        return goods
    } else if (goods.brand === 'Xiaomi') {
        return goods
    } else if (goods.brand === 'Sony') {
        return goods
    } else if (goods.brand === 'Motorola') {
        return goods
    }
};

/**
 * @param {string} color
 * @param goods
 * @returns {*}
 */
const colorFilter = (color, goods) => {
    if (goods.color === 'colors.white') {
        return goods
    } else if (goods.color === 'colors.black') {
        return goods
    } else if (goods.color === 'colors.purple') {
        return goods
    } else if (goods.color === 'colors.grey') {
        return goods
    } else if (goods.color === 'colors.blue') {
        return goods
    }
};

/**
 * @param {string} model
 * @param goods
 * @returns {*}
 */
const modelFilter = (model, goods) => {
    if (goods.model === 'Apple') {
        return goods
    } else if (goods.model === 'Samsung') {
        return goods
    } else if (goods.model === 'Xiaomi') {
        return goods
    } else if (goods.model === 'Sony') {
        return goods
    } else if (goods.model === 'Motorola') {
        return goods
    }
};

/**
 * @param {number} memory
 * @param goods
 * @returns {*}
 */
const memoryFilter = (memory, goods) => {
    if (+goods.memory < 65) {
        return goods
    } else if (+goods.memory >= 65 || +goods.memory <= 128) {
        return goods
    } else if (+goods.memory >= 128 || +goods.memory <= 512) {
        return goods
    } else if (+goods.memory >= 512) {
        return goods
    }
};

/**
 * @param {number} price
 * @param goods
 * @returns {*}
 */
const priceFilter = (price, goods) => {
    if (+goods.price <= 10000) {
        return goods
    } else if (+goods.price >= 10000 || +goods.price<=20000) {
        return goods
    } else if(+goods.price>= 20001 || +goods.price<= 36000){
      return goods
} else if(+goods.price>=36001 || +goods.price<= 49000) {
      return goods
    }
}
;

/**
 * @param {string} country
 * @param goods
 * @returns {*}
 */
const countryFilter = (country,goods) => {
  if(country==='USA') {
    return goods
  } else if(country==='Korea') {
    return goods
  } else if(country==='China') {
    return goods
  } else if(country ==='Japan') {
    return goods
  }
};

/**
 * @param {string} os
 * @param goods
 * @returns {*}
 */
const osFilter = (os,goods) => {
  if(os==='ios') {
    return goods
  } else if (os==='Android') {
    return goods
  }
};

/**
 * @param {number} from
 * @param {number} to
 */
const rangeFilter = (from, to) => {

};

const minPriceReducer = () => {
};

const maxPriceReducer = () => {
};

const toMaxSorter = () => {
};
const toMinSorter = () => {
};

export const filters = {
    brandFilter,
    countryFilter,
    priceFilter,
    osFilter,
    colorFilter,
    memoryFilter,
    modelFilter,
    rangeFilter,
};

export const reducers = {
    minPriceReducer,
    maxPriceReducer,
};

export const sorters = {
    toMaxSorter,
    toMinSorter,
};
