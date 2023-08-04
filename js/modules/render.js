import calculateTotalPrice from './calculateTotal.js';
import addGoodPage from './create.js';

const renderGoods = (arr) => {
  arr.map(elem => addGoodPage(elem));
  calculateTotalPrice(arr);
};

export default renderGoods;
