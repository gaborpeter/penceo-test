'use strict';

const startButton = (() => {

  const getStartButton = () => {
    const startButton = document.querySelector('.start');
    const modalWindow = document.querySelector('.modal-window')

    startButton.addEventListener('click', event => {
      modalWindow.style.visibility = 'visible';
    })
    return startButton;
  }

  return {
    getStartButton: getStartButton
  }
})();
