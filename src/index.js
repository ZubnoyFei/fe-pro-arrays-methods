import {goods} from './goods.js';

/**
 * @param {string} brand
 * @returns {*}
 */
const brandFilter = (brand) => {
return goods.filter((item) => {
    return item.brand === brand
})
};

/**
 * @param {string} color
 * @returns {*}
 */
const colorFilter = (color) => {
    return goods.filter((item) => {
        return item.color === color
    })
};

/**
 * @param {string} model
 * @returns {*}
 */
const modelFilter = (model) => {
    return goods.filter((item) => {
        return item.model === model
    })
};

/**
 * @param {number} memory
 * @returns {*}
 */
const memoryFilter = (memory) => {
    return goods.filter((item) => {
        return item.memory === memory
    })
};
/**
 * @param {number} price
 * @returns {*}
 */
const priceFilter = (price) => {
    return goods.filter((item) => {
        return item.price === price
    })
};

/**
 * @param {string} country
 * @returns {*}
 */
const countryFilter = (country) => {
    return goods.filter((item)=> {
        return item.country === country
    })
};

/**
 * @param {string} os
 * @returns {*}
 */
const osFilter = (os) => {
    return goods.filter((item)=> {
        return item.os === os
    })
};

/**
 * @param {number} from
 * @param {number} to
 */
const rangeFilter = (from, to) => {
  return goods.filter((item) => item.price >= from && item.price <= to)
};

const minPriceReducer = () => {
    let result = goods.reduce(function (previous,current){
        if (previous.price< current.price){
            return previous;
        } else {
            return current;
        }
    });

    return result.price;
};

const maxPriceReducer = (items) => {
    let result = goods.reduce(function (previous,current){
        if (previous.price>current.price){
            return previous;
        } else {
            return current;
        }
    });

    return result.price;

};

const toMaxSorter = () => {
    let result = goods.sort(function (first, second) {
        if (first.price > second.price) return -1;
        if (first.price < second.price) return 1;
        return 0;
    });

    return result;
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

const toMinSorter = () => {
    let result = goods.sort(function (first, second) {
        if (first.price > second.price) return 1;
        if (first.price < second.price) return -1;
        return 0;
    });

    return result;
};

export const reducers = {
    minPriceReducer,
    maxPriceReducer,
};

export const sorters = {
    toMaxSorter,
    toMinSorter,
};
