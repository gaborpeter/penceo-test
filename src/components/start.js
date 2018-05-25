'use strict';

const start = (() => {

  const start = () => {
    const startButton = document.querySelector('.start');
    const modalWindow = document.querySelector('.login-modal')

    startButton.addEventListener('click', event => {
      modalWindow.style.visibility = 'visible';
    })
    return startButton;
  }

  return {
    start: start
  }
})();
