import * as elem from './elements.js';

const openPic = () => {
  const icon = document.querySelector('.table-icon_type_pic');
  const iconPic = icon.dataset.pic;

  elem.tableBody.addEventListener('click', e => {
    const btnIcon = e.target.closest('.table-icon_type_pic');
    const valueTop = (screen.height / 2) - 300;
    const valueLeft = (screen.width / 2) - 300;

    console.log('клик');

    if (btnIcon) {
      const win = open('about:blank', '', `
        width=600,
        height=600,
        top=${(valueTop)},
        left=${valueLeft}
        `);
      win.location.href = iconPic;
    }
  });
};

export default openPic;
