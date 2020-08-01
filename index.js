(function() {
  'use strict';
  const checkAd = setInterval(() => {
    const adBox = document.querySelector("[class^='toast-positioning-wrapper-']")

    if (adBox) {
      adBox.remove();
      console.log('ad removed.');
    } else {
      console.log('no ad present.');
    }
  }, 5000);
})();
