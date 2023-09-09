/******/ (function() { // webpackBootstrap
var __webpack_exports__ = {};
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
function foo(event) {
  console.log(event.target, event.currentTarget);
  if (event.target === event.currentTarget) {
    //alert(111);
  }
}
var nav = document.getElementById('menu');
nav.addEventListener('click', foo, true);
var menuSpan = document.querySelector('.menu__link span');
menuSpan.addEventListener('click', foo);
console.log(menuSpan);
/******/ })()
;
//# sourceMappingURL=script.js.map