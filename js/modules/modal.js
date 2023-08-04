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
      closeModal();
    }
  });
};
