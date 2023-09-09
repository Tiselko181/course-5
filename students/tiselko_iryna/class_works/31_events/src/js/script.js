function foo(event) {
    console.log(event.target, event.currentTarget);
    if (event.target === event.currentTarget) {
        //alert(111);
    }
}
const nav = document.getElementById('menu');
nav.addEventListener('click', foo, true)

const menuSpan = document.querySelector('.menu__link span');

menuSpan.addEventListener('click', foo);

console.log(menuSpan);
