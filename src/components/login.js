'use strict';

const login = (() => {

  const getLoginDatas = (e) => {
    const username = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;
    sendLoginDatas(username, password);
  }

  const sendLoginDatas = (username, password) => {
    const loginDatas = {
      username: username,
      password: password
    }
    ajax.ajax(loginDatas).then(response => {
      displayRespond.displayRespond(response);
    }).catch(error => {
      displayRespond.displayRespond(error);
    });
  }

  const login = () => {
    const loginButton = document.querySelector('.login');

    loginButton.addEventListener('click', getLoginDatas);

  }

  return {
    login: login
  }
})();
