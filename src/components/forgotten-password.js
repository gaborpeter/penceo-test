'use strict';

const forgetPassword = (() => {

  const getNewPassword = () => {
    const forgottenButton = document.querySelector('#forgotten-password');

    forgottenButton.addEventListener('click', event => {
      document.location.replace('/password');
    })
  }

  return {
    getNewPassword: getNewPassword
  }
})();
