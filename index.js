(function () {
  "use strict";
  setInterval(() => {
    const adBox = document.querySelector('[id="charting-ad"]');

    if (adBox) {
      adBox.closest('[role="log"]')?.remove();
      console.log("ad removed.");
    }
  }, 100);
})();
