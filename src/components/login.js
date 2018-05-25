'use strict';

const login = (() => {

  const sendLoginDatas = (e) => {
    const username = document.querySelector('#username');
    const password = document.querySelector('#password');

    console.log(username.value, password.value);
  }

  const login = () => {
    const loginButton = document.querySelector('.login');

    loginButton.addEventListener('click', sendLoginDatas);

    return loginButton;
  }

  return {
    login: login
  }
})();
