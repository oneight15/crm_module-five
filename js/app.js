'use strict';

const title = document.querySelector('.modal__title');
const identText = document.querySelector('.modal__ident-text');
const identBtn = document.querySelector('.modal__ident-btn');
const form = document.querySelector('.modal__form');
const discountCheckbox = document.querySelector('.modal__input-checkbox');
const discountInput = document.querySelector('.modal__input_disabled');
const totalPrice = document.querySelector('.modal .total-price__sum');
// модуль 5 урок 5 - выполнение дз
const addItem = document.querySelector('.cms__add-item');
const overlay = document.querySelector('.overlay');
const btnCloseModal = overlay.querySelector('.modal__close');
const modal = document.querySelector('.modal');
const tableBody = document.querySelector('.table__body');

addItem.addEventListener('click', () => {
  overlay.classList.add('overlay_open');
});

overlay.addEventListener('click', e => {
  const target = e.target;
  if (target === overlay || target.closest('.modal__close')) {
    overlay.classList.remove('overlay_open');
  }
});

tableBody.addEventListener('click', e => {
  const target = e.target;
  if (target.closest('.table-icon_type_delete')) {
    target.closest('.table__row').remove();
  }
});
