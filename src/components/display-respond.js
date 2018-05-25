'use strict';

const displayRespond = (() => {

  const displayRespond = (result) => {
    const modalFooter = document.querySelector('.modal-footer');
    const response = document.createElement('p');

    modalFooter.innerHTML = '';
    modalFooter.setAttribute('style', 'background: white;');
    response.textContent = `The response is: ${result.status}`;
    modalFooter.appendChild(response);
  }

  return {
    displayRespond: displayRespond
  }
})();
