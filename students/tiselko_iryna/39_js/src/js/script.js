document.cookie = 'user=Iryna';
document.cookie = 'user1=Alya';

const date = new Date(Date.now()+10000) //if time in past browerser will delete cookie
console.log(date.toUTCString)

// document.cookie = 'user3=Alya; path=/; domain=localhost; expires=' +date.toUTCString();
// document.cookie = 'user3=Alya; path=/; domain=localhost; max-age=10' when we set -1 broweser will delete cookie



function getCookie(nameCookie) {
    if (!nameCookie) return '';

    const cookieList = document.cookie.split('; ').map((cookieString)=>cookieString.split('='));
    const cookie = Object.fromEntries(cookieList)[nameCookie];

    return cookie ? cookie : '';
}

console.log(getCookie('user1'));


function removeCookie (nameCookie) {
    if (!nameCookie) return;

    document.cookie = nameCookie + '=t; max-age=-1';
}

function setCookie(nameCookie, value,options) {
    if (!nameCookie || !value) return;

    let cookie = `${nameCookie}=${value}`;

    if (options) {
        for(const key in options){
            let value = options[key];

            if (key === 'expires' && value instanceof Date) {
                value = value.toUTCString();
            }

            cookie = `${cookie}; ${key}=${value}`;
        }
    }

    document.cookie = cookie;
}

setCookie('user10', 'Beetroot', {
    path: '/',
    domain: 'localhost',
    // expires: new Date(Date.now()+100000),
    'max-age' : 100,
});

console.log(document.cookie);


const counterCookieName = 'counter';
const counter = document.querySelector('.title span');

const counterValue = getCookie(counterCookieName);
let newValue = 0;

newValue = counterValue ? +counterValue : newValue;

newValue && (counter.textContent = newValue);

setCookie(counterCookieName, !newValue ? 1 : newValue + 1);

// if (!counterValue) {
//     setCookie(counterCookieName, 1);
// } else {
//     counter.textContent = counterValue;
//     setCookie(counterCookieName, +counterValue + 1);
// }

console.log(counterValue);
console.log(counter);

console.log(JSON.parse(localStorage.getItem('cartList')));
console.log(localStorage.setItem('sdfsdfds', JSON.stringify([{}])));

function addUser(formId, userListSelector) {
    const form = document.getElementById(formId);
    const userListElement = document.querySelector(userListSelector);
    const userList = [];
    const key = 'userList';

    const localStorageUserList = getFromLocalStorage(key);

    if (localStorageUserList) {
        localStorageUserList.forEach((user)=>{
            renderUser(userListElement, user);
            userList.push(user);
        })
    }

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const user = Object.fromEntries(
            Array.from(
                new FormData(this)
            )
        );
        
        //console.log(user);
        renderUser(userListElement, user);
        userList.push(user);
        saveToLocalStorage(key, userList)
    })
}

function saveToLocalStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

function getFromLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key));
}

function renderUser(userListElement, user) {
    const li = `
    <li>user-name: ${user['user-name']}; 
    email: ${user.email};
    age: ${user.age}.
    </li>
    `;

    userListElement.insertAdjacentHTML('afterbegin', li);
}

addUser('add_user', '.user-list');