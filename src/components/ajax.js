'use strict';

const ajax =(() => {
  const url = 'http://localhost:3000/login';

  const ajax = (body => {
    let xhr = new XMLHttpRequest();
    const loginDatas = JSON.stringify(body);
    xhr.open('POST', url);
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.onload = function() {
      callback(JSON.parse(xhr.responseText));
    };
    xhr.send(loginDatas);
  })

  return {
    ajax: ajax
  }
})();
