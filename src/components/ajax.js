'use strict';

const ajax =(() => {
  const url = 'http://localhost:3000/login';

  const ajax = (body => {
    console.log(body);
    let xhr = new XMLHttpRequest();
    const loginDatas = JSON.stringify(body);
    console.log(loginDatas);
    xhr.open('POST', url);
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.onload = function() {
      console.log(JSON.parse(xhr.responseText));
    };
    xhr.send(loginDatas);
  });

  return {
    ajax: ajax
  }
})();
