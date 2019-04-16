(function() {
  'use strict';
  const checkAd = setInterval(() => {
    const adBox = document.getElementById('tv-toasts');
    if (adBox) {
      adBox.remove();
      console.log('ad removed.');
    } else {
      console.log('no ad present.');
    }
  }, 5000);
})();
