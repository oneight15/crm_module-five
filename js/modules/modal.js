import * as elem from './elements.js';

export const openModal = () => {
  elem.overlay.classList.add('overlay_open');
};

export const closeModal = () => {
  elem.overlay.classList.remove('overlay_open');
};

export const stateModal = () => {
  elem.addItem.addEventListener('click', () => {
    openModal();
  });

  elem.overlay.addEventListener('click', e => {
    const target = e.target;
    if (target === elem.overlay || target.closest('.modal__close')) {
      elem.modal.classList.remove('modal_error');
      elem.errorElement.classList.remove('modal__error-block_active');
      closeModal();
    }

    if (target === elem.modal || target.closest('.error-block__close')) {
      elem.modal.classList.remove('modal_error');
      elem.errorElement.classList.remove('modal__error-block_active');
    }
  });
};

export const activeError = () => {
  elem.modal.classList.add('modal_error');
  elem.errorElement.classList.add('modal__error-block_active');
};

