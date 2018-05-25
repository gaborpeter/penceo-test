'use strict';

const start = (() => {

  const start = () => {
    const startButton = document.querySelector('.start');
    const modalWindow = document.querySelector('.modal-window')

    startButton.addEventListener('click', event => {
      modalWindow.style.visibility = 'visible';
    })
    return startButton;
  }

  return {
    start: start
  }
})();
