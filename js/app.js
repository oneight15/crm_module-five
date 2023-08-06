import renderGoods from './modules/render.js';
import formControl from './modules/form.js';
import * as elem from './modules/elements.js';
import * as controlModal from './modules/modal.js';
import openPic from './modules/openPic.js';

const init = () => {
  renderGoods(elem.goods);
  controlModal.stateModal();
  formControl();
  openPic();
};

init();
