import calculateTotalPrice from './calculateTotal.js';
import addGoodPage from './create.js';

const renderGoods = (err, data) => {
  if (err) {
    console.warn(err, data);
  }

  data.goods.map(item => {
    addGoodPage(item);
    calculateTotalPrice(data.goods);
  });
};

export default renderGoods;
