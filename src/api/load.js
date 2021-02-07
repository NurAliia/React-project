let mockCategories = require('../mock/categories.json');
let mockItems = require('../mock/subcategories.json');

export const getCategories = () => {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve(mockCategories);
    }, 1000);
  })
};

export const getItems = () => {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve(mockItems);
    }, 1000);
  })
};
