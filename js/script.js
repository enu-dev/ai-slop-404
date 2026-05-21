/* 404 Slop Test ── 比較ビューアの切替ロジック
   トグルで iframe の src を なし版 / あり版 に差し替える。 */

(function () {
  "use strict";

  var frame = document.getElementById("frame");
  var buttons = document.querySelectorAll(".toggle__btn");

  var sources = {
    plain: "pages/plain-404.html",
    hallmark: "pages/hallmark-404.html"
  };

  function activate(target) {
    var version = target.dataset.version;
    if (!sources[version]) return;
    if (frame.getAttribute("src") === sources[version]) return;

    frame.setAttribute("src", sources[version]);

    buttons.forEach(function (btn) {
      var isActive = btn === target;
      btn.classList.toggle("is-active", isActive);
      btn.setAttribute("aria-pressed", String(isActive));
    });
  }

  buttons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      activate(btn);
    });
  });
})();
