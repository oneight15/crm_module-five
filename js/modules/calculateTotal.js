import * as elem from './elements.js';

const calculateTotalPrice = (arr) => {
  elem.totalPrice.textContent = `$ ${arr.reduce((sum, {price, count}) =>
    sum + price * count, 0)}`;
};

export default calculateTotalPrice;
