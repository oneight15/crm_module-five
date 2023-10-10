import calculateTotalPrice from './calculateTotal.js';
import * as create from './create.js';

export const renderGoods = (err, data) => {
  if (err) {
    console.warn(err, data);
  }

  data.goods.map(item => {
    create.addGoodPage(item);
    calculateTotalPrice(data.goods);
  });
};

export const renderModal = () => {
  const overlay = create.createOverlay();
  const modal = create.createModal();
  const modalTopBlock = create.createModalTopBlock();
  const modalTitle = create.createModalTitle();
  const modalIdentBlock = create.createModalIdentBlock();
  const modalIdent = create.createModalIdent();
  const modalIdentText = create.createModalIdentText();
  const modalIdentValue = create.createModalIdentValue();
  const modalIdentBtn = create.createModalIdentBtn();
  const modalForm = create.createModalForm();
  const modalClose = create.createModalClose();
  const modalFieldset = create.createModalFieldset();
  const modalFieldName = create.createModalFieldName();
  const modalFieldCategory = create.createModalFieldCategory();
  const modalFieldUnits = create.createModalFieldUnits();
  const modalFieldDiscount = create.createModalFieldDiscount();
  const modalFieldDesc = create.createModalFieldDesc();
  const modalFieldCount = create.createModalFieldCount();
  const modalFieldPrice = create.createModalFieldPrice();
  const modalFieldError = create.createModalFieldError();
  const modalFieldFile = create.createModalFieldFile();
  const modalImage = create.createModalImage();
  const modalBottomBlock = create.createModalBottomBlock();
  const totalPrice = create.createTotalPrice();
  const totalPriceText = create.createTotalPriceText();
  const totalPriceSum = create.createTotalPriceSum();
  const modalSubmit = create.createModalSubmit();

  modalIdent.append(modalIdentText, modalIdentValue);
  modalIdentBlock.append(modalIdent, modalIdentBtn);
  modalTopBlock.append(modalTitle, modalIdentBlock);

  totalPrice.append(totalPriceText, totalPriceSum);
  modalBottomBlock.append(totalPrice, modalSubmit);

  modalFieldset.append(
      modalFieldName,
      modalFieldCategory,
      modalFieldUnits,
      modalFieldDiscount,
      modalFieldDesc,
      modalFieldCount,
      modalFieldPrice,
      modalFieldError,
      modalFieldFile,
      modalImage,
  );
  modalForm.append(modalFieldset, modalBottomBlock);


  modal.append(modalTopBlock, modalForm, modalClose);
  overlay.append(modal);

  document.body.append(overlay);
};


