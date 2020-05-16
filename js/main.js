const select = el => { return document.querySelector(el); }

const introHeader = select('.intro-header');

setTimeout(() => {
  introHeader.classList.remove('intro-header-hide');
}, 500);
