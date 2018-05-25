'use strict';

const close = (() => {

  const close = () => {
    const closeButton = document.querySelector('#close');
    const modalWindow = document.querySelector('.login-modal');

    closeButton.addEventListener('click', event => {
      modalWindow.style.visibility = 'hidden';
    })
  }

  return {
    close: close
  }
})();
