import renderGoods from './modules/render.js';
import formControl from './modules/form.js';
import * as elem from './modules/elements.js';
import * as controlModal from './modules/modal.js';
// import openPic from './modules/openPic.js';
import httpRequest from './modules/serverRequest.js';

const init = () => {
  httpRequest(elem.URL, {
    method: 'GET',
    callback: renderGoods,
  });
  controlModal.stateModal();
  formControl();

  // функция не работает в текущий момент разработки
  // openPic();
};

init();

