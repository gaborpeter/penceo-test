'use strict';

const startButton = (() => {

  const getStartButton = () => {
    const startButton = document.querySelector('.start');
    startButton.addEventListener('click', event => {
      console.log('hey');
    })
    return startButton;
  }

  return {
    getStartButton: getStartButton
  }
})();
