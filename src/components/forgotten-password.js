'use strict';

const forgetPassword = (() => {

  const getNewPassword = () => {
    console.log('fdsf');
    const forgottenButton = document.querySelector('#forgotten-password');

    forgottenButton.addEventListener('click', event => {
      history.pushState({}, 'password', '/password')
    })
    return forgottenButton;
  }

  return {
    getNewPassword: getNewPassword
  }
})();
