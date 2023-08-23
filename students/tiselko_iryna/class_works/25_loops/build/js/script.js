/******/ (function() { // webpackBootstrap
var __webpack_exports__ = {};
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*const n = 7;
for (let i = 0; n > i; i++) {
    console.log(i);
}*/

/*const stringText = 'What is your age?';
console.log(stringText.length, stringText[0], stringText[stringText.length - 1]);
for (let i = 0; stringText.length > i; i++) {
    console.log(stringText[i]);
}*/

/*let m = '';
n = 10;
const countCol = 10;
for (let i = 0; n > i; i++) {
    m += (i + 1) + '. ';
    for (let j = 0; j < countCol; j++) {
        m += '#'
    }
    m += '\n'
}
console.log(m);*/

// let i= 0;

// for (let i = 0; 10 > i; i++) {
//     if (i === 5) break;
//     if (!(i % 2)) continue;
//     console.log(i);
// }

// while (true) {
//     if (i++ > 20) break;
// }

// function bar() {
//     console.log(11111); //функция з побичною диэю
// }

// if (confirm()) {
//     bar();
// }

//параметри функции
function bar(message, type) {
  switch (type) {
    case 'log':
      console.log(message);
      break;
    case 'error':
      console.error(message);
      break;
    case 'info':
      console.info(message, 'info');
      break;
  }
  // if (isShow) console.log(message);
}

//аргументи
bar('hello', 'log');
bar('name', 'error');
bar('hedgsdfgdllo', 'info');
function sumOfNumbs(one, two) {
  console.log(one + two);
}
sumOfNumbs(5, 2);
foo(30);
function foo() {
  var num = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  console.log(num);
  // const tryNum = num || 1;
  // const tryNum = num ?? 1;

  // console.log(tryNum * tryNum);
  console.log(num * num);
}
foo();
foo(2);
foo(10);

// {
//     function ddd() {
//         alert(22222);
//     }
//     ddd();
// }

function helloUser(firstMane, lastName) {
  var symbol = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '!';
  console.log('Hello ' + firstMane + ' ' + lastName + symbol);
}
helloUser('Iryna', 'Tiselko');

//чисты функции
function sum(a, b) {
  // if (typeof a !== 'number' || b !== 'number') return;
  // if (typeof a !== 'number' || b !== 'number') {
  //     throw ('type is not correct');   // призведення до помилки
  // }
  // alert(654653);
  return a + b;
  //код писля return ненвиконуэться взагалі
}

var aa = sum(1, 3);
var aaa = sum(sum(1, 2), sum(3, 3));
console.log(aa);
function summ(a, b) {
  return a + b;
}
function minus(a, b) {
  return a - b;
}
function div(a, b) {
  return a / b;
}
function multy(a, b) {
  return a * b;
}
function calc(a, b) {
  var equal = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '+';
  switch (equal) {
    case '+':
      return summ(a, b);
    case '-':
      return minus(a, b);
    case '/':
      return div(a, b);
    case '*':
      return multy(a, b);
  }
}
var calcul = calc(8, 9, '*');
console.log(calcul);
function example(a, b) {
  for (var _len = arguments.length, other = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    other[_key - 2] = arguments[_key];
  }
  console.log(arguments.length);
  console.log(other);
}
example(1, 1, 1, 1, 1, 1);
/******/ })()
;
//# sourceMappingURL=script.js.map