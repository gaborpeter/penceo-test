'use strict';

const ajax =(() => {
  const url = 'http://localhost:3000/login';

  const ajax = (body => {
    const loginDatas = JSON.stringify(body);
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open('POST', url);
      xhr.setRequestHeader('content-type', 'application/json');
      xhr.onload = () => resolve(JSON.parse(xhr.responseText));
      xhr.onerror = () => reject(JSON.parse(xhr.statusText));
      xhr.send(loginDatas);
    })
  })

  return {
    ajax: ajax
  }
})();
