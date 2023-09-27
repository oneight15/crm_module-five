import * as elem from './elements.js';
import calculateTotalPrice from './calculateTotal.js';
import addGoodPage from './create.js';
import * as controlModal from './modal.js';
import httpRequest from './serverRequest.js';

const modalReset = () => {
  elem.form.checkbox.removeAttribute('checked');
  elem.form.discount.setAttribute('disabled', 'disabled');
  elem.form.discount.classList.add('modal__input_disabled');
  elem.totalPriceModal.textContent = '$ 0';
};

// const addGoodData = good => {
//   elem.goods.push(good);
// };

elem.form.checkbox.addEventListener('click', () => {
  elem.form.discount.toggleAttribute('disabled');
  elem.form.discount.classList.toggle('modal__input_disabled');
  if (elem.form.discount.classList.contains('modal__input_disabled')) {
    elem.form.discount.value = '';
  }
});

const formControl = () => {
  elem.form.addEventListener('submit', e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newGood = Object.fromEntries(formData);
    // newGood.id = +Math.random().toString().substring(2, 10);

    httpRequest('https://grizzled-hip-wedge.glitch.me/api/goods', {
      method: 'POST',
      body: {
        title: elem.form.name.value,
        description: elem.form.description.value,
        price: elem.form.price.value,
        count: elem.form.count.value,
        units: elem.form.units.value,
        discount: elem.form.discount.value,
        category: elem.form.category.value,
      },
      callback(err, data) {
        if (err) {
          console.warn(err, data);
          elem.form.textContent = err;
        }

        elem.form.textContent = `Това успешно добавлен,  ${data.id}`;
      },
      headers: {
        'Content-Type': 'application/json',
      },
    });

    addGoodPage(newGood);
    // addGoodData(newGood);
    // calculateTotalPrice(elem.goods);

    modalReset();
    elem.form.reset();
    controlModal.closeModal();
  });
};

elem.modal.addEventListener('change', e => {
  const target = e.target;
  const countValue = elem.form.count.value;
  const priceValue = elem.form.price.value;

  if (target.name === 'count' || target.name === 'price') {
    elem.totalPriceModal.textContent = `$ ${countValue * priceValue}`;
  }
});

// нерабочий способ удаления товаров в текущий момент
// elem.tableBody.addEventListener('click', e => {
//   const target = e.target;
//   const id = target.closest('.table__row').firstElementChild.textContent;
//   const index = elem.goods.findIndex(elem => elem.id === +id);

//   if (target.closest('.table-icon_type_delete')) {
//     if (index !== -1) {
//       elem.goods.splice(index, 1);
//     }
//     target.closest('.table__row').remove();
//   }

//   calculateTotalPrice(elem.goods);
// });

export default formControl;
