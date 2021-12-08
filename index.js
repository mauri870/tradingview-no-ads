(function() {
  'use strict';
  const checkAd = setInterval(() => {
    const adBox = document.querySelector("[data-role^='toast-container']")

    if (adBox) {
      adBox.remove();
      console.log('ad removed.');
    } else {
      console.log('no ad present.');
    }
  }, 5000);
})();
