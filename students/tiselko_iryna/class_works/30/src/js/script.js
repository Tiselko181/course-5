// console.dir(document) //

// console.dir(document.documentElement); //html
// console.dir(document.head);
// console.dir(document.body);

// document.body.style.background = 'red';

const nav = document.getElementById('menu'); // id- the best & quick result
// console.log(nav);

// const menu = '';
// console.log(menu);

// const menu = document.querySelector('#menu > .menu li:first-child');
// const menuItems = [...document.querySelectorAll('.menu > li')]; // 
// console.log(menuItems);

// menuItems.forEach((menuItem, index) => {
//     if (!(index % 2)) menuItem.style.background = '#777';
//     console.log();
// })

// console.log(Array.prototype); - we can teach method of arrays

// console.log(Array.prototype.slice.call(menuItems)); // old variant 

// console.log([...menuItems]);


const menuSpans = [...document.querySelectorAll('.menu_item .menu_link > span')]; // 
// console.log(menuSpans);

const menu = nav.querySelector('.menu');
const menuItems = [...menu.querySelectorAll('.menu > li')];
// console.log(menuItems);

//console.log(nav.parentElement); //fast (get parent element)

//console.log(nav.closest('html')); // work only with css selectors


//console.log(nav.firstChild); // any element include node
//console.log(nav.firstElementChild); // return first element

// same as first
// console.log(nav.lastElementChild);
// console.log(nav.lastElementChild);

// сестринський
// console.log(menu.previousElementSibling);
// console.log(menu.nextElementSibling);


function foo(element) {
    console.log(element);
    const nextElement = element.nextElementSibling;
    if (nextElement && confirm('next?')) {
        foo(nextElement);
    } else {
        console.log('end');
    }
}

// foo(menuItems[0]);

menu.innerHTML = menu.innerHTML + '<li>vdxsgzdsv</li>' // якщо прописуємо щось всередині то можно видалити зміст вскередені цього тегу через '' + це конкотинує строки + перевантажую браузер
//console.log(menu.innerHTML);

//console.log(menu.outerHTML); // same as inner 

// console.log(menuItems[0].innerText);
// console.log(menuItems[0].outrText);

//console.log(menuItems[0].querySelector('a > span').textContent = 'fgdehgdf');

nav.setAttribute('title', 'test')
//console.log(nav.getAttribute('title'));

nav.removeAttribute('title');

//console.log(nav.hasAttribute('title'));


//console.log(nav.dataset.nav);
//write new
// nav.dataset.nav = 6;

//console.dir(menu.classList.add('ddd', 'jgfhyg')); // only throught comma and new string

//console.dir(menu.classList.remove('ddd'));

//console.dir(menu.classList.contains('menu'));

// console.dir(menu.classList.toggle('menu')); // if exist - will delete, if - no (will add it)
//console.dir(menu.classList.toggle('menu', true));


// console.log(document.body.style.backgroundColor = '#999');
// console.log(document.body.style['background-color'] = '#999'); // not often

// console.log(window.getComputedStyle(document.body).display);
// nav.style.display = 'none';
// nav.style.display = '';


const link = document.createElement('a');
link.setAttribute('href', '#');
link.classList.add('link');
link.textContent = 'link';
// console.log(link);

nav.append(link); // in the end
nav.prepend(link); // start
nav.before(link); // before nav
nav.after(link); // after nav
link.remove();
// nav.replaceWith(link); // remowe all parents tag and write what we tell in "()"

//tag {String}
//atributtes {Objects}
//class 'kvdvd dvsd sdfsad' {String}
//content text - 'sdsad'{String} | {Node} | [{Node}, {Node}, {Node}]

function createElement(tagName, props = {}, content) {
    if (!tagName) return;

    const element = document.createElement(tagName);
    let className = '';


    if (props && props.className) {
        className = props.className;
        delete props.className;
    }

    if (props) addAttr(element, props);

    if (className) {
        addClass(element, className)
    }

    if (content) addContent(element, content);

    return element;
}

function addContent(element, content) {
    if (!element || !content) return;
    if (typeof content === 'string') {
        element.textContent = content;
        return;
    }

    if (isNodeElem(content)) {
        element.append(content);
        return;
    }

    if (Array.isArray(content)) {
        content.forEach((elem) => {
            if (isNodeElem(elem)) {
                // element.append(elem);
                addContent(element, elem);
            }
        })
    }
}

function addClass(element, classes) {
    if (!element || !classes) return;

    const classList = classes.split(' '); //

    element.classList.add(...classList);
}

function addAttr(element, option) {
    if (!element || !option) return;

    for (const key in option) {
        element.setAttribute(key, option[key]);
    }
}

function isNodeElem(elem) {
    return typeof elem === 'object' && elem.nodeType === 1;
}

document.body.prepend(createElement('header', {
    className: 'header',
}, [
    createElement('a', { href: '#' }, 'logo'),
    createElement('buttona', { type: 'button' }, 'Sign Up'),
]))

// document.body.prepend(createElement('h1', {
//     title: 'Hello',
//     className: 'main-title test somecl',
// }, [createElement('span', null, 'Hello'), createElement('span', null, 'Hello')]));
