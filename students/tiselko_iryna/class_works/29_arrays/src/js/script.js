// const arr = [100, 32, 56456, 654, 1, 57, 489, 78, 6, 7]; // - масив зі значенням 10
// const arr1 = Array(10);// - 10 пустих масивів

// // console.log(arr[1]) - достукатися до 32

// arr[1] = 10;

// console.log(arr, arr1);
// console.log(arr.length, arr[arr.length - 1]); // call to last item

// arr.length = 10; // створити додатково ще ячейкі в масиви
// // arr.length = 0; // стерти значення 0 - стерти всеб можно видалити с кінця чи повністю
// console.log(arr);


// // Створення массива з нуля по цифрі користувача
// // const userNumb = +prompt('Enter any number');
// // const userArray = []

// //перебирати масиви:
// // for (let i = 0; i < userNumb; i++) {
// //     console.log(userArray[i] = i + 1);
// // }

// // for (const value of arr) {
// //     console.log(value);
// // }

// // for (let key in arr) {
// //     console.log(arr[key]);
// // }

// arr.push(55); // додає осатннє
// arr.pop(); //видаляє осатннє
// arr.shift(); // виділяє перше
// arr.unshift(123); // додає в перше

// // побачити методи масивыв - console.dir(Array);

// // console.log(arr.push(55, 3, 8, 11), arr.length);
// // console.log(arr.pop());

// const range = [1, 6, 7, 56, 66, 1, 78, 87, 91, 1, 98, 1, 1];
// // const rangeEv = [];
// // const rangeOdd = [];

// // for (const value of range) {
// //     if (value % 2 === 0) {
// //         rangeEv.push(value);
// //     } else {
// //         rangeOdd.push(value);
// //     }
// // }
// // console.log(rangeEv);
// // console.log(rangeOdd);

// //копіі масивів:
// // const copyArr = range.concat() //[...range];
// const copyArr = range.slice();
// copyArr[0] = 254;
// console.log(copyArr, range);

// console.log(range.includes(56)); //шукає значення в масиві

// console.log(range.indexOf(56));


// // функція яка повертає всі індекси в яких лежить певна цифра + працює зі строкою також
// /**
//  *
//  * @param {Array | String} data
//  * @param {Number | String} finData
//  * @returns {Array}
//  */

// function getIndexsOfArray(data = [], findData) {
//     const findIndex = [];
//     let index = data.indexOf(findData);
//     console.log(index);
//     while (index !== -1) {
//         findIndex.push(index);
//         index = data.indexOf(findData, index + 1)
//     }

//     return findIndex
// }
// console.log(getIndexsOfArray());


// //multi-tools
// // range.splice(0, 1, 344, 54);
// // console.log(range.splice(0, 1, 344, 54));
// // console.log(range);

// function spliceIndexOfArray(data = [], indexArray = [], replaceArray = [], isMutation = false) {
//     if (isMutation) data = [...data];
//     const defaultReplace = 0;
//     let i = 0;
//     for (const value of indexArray) {
//         data.splice(value, 1, replaceArray[i] ?? defaultReplace);
//         i++;
//     }
//     console.log(replaceArray.slice(i), indexArray.at(-1), indexArray);
//     if (isMutation) return data;
// }
// console.log(spliceIndexOfArray(range, getIndexsOfArray(range, 1), [55, 87, 9], true));
// console.log(range);


// const mhd = [6, 54, 654, 12, 51];
// // const [first, second, , , , , , , fff = 454] = mhd;
// const [first, second, ...other] = mhd;
// console.log(first, second, other);

const numbers = [6, 54, 654, 12, 51];

// for (let i = 0; i < userNumb; i++) {
// //     console.log(userArray[i] = i + 1);
// // }

// numbers.forEach((number, index, arr) => {
//     console.log(number, index, arr);
// });

const users = [
    {
        user: "Kolya",
        age: 16,
        id: 0
    },
    {
        user: "Vasya",
        age: 20,
        id: 1
    },
    {
        user: "Kolya",
        age: 25,
        id: 3
    },
    {
        user: "Viktor",
        age: 15,
        id: 2
    },
    {
        user: "Vasya",
        age: 30,
        id: 4
    },
];

// const a = users.find((user) => { //элемент масиву на якому тру
//     console.log(user);
//     return user.user.toLowerCase() === 'Vasya';
// })
// console.log(a);



const b = users.filter((user) => { //повертаэ масив значень на якому тру
    return user.user.toLowerCase() === 'vasya';
}).map(users => ({ ...users })); //Object.assign({}, user))

b[0].age = 0;
console.log(b, users);


function getDataById(arr, id) {
    if (!arr && !id) return;
    return arr.find((item) => item.id === id);
}
console.log(getDataById());

function getDUserByAge(arr, age) {
    if (!arr && !age) return [];
    return arr.filter((user) => user.age >= age);
}
console.log(getDUserByAge(users, 18));


const cart = [
    {
        id: 0,
        name: 'Product 1',
        qty: 2,
        price: 150,
    },
    {
        id: 1,
        name: 'Product 2',
        qty: 1,
        price: 50,
    },
    {
        id: 2,
        name: 'Product 3',
        qty: 5,
        price: 10,
    }
];

// console.log(numbers);
// console.log(numbers.reduce((accumulator, currentValue) => {
//     console.log(accumulator, currentValue);
//     return accumulator + currentValue;
// }), 0);

// const total = cart.reduce((acc, curValue) => {
//     return acc + (curValue.price * curValue.qty);
// }, 0);
// console.log(total);

function cartp() {
    const cart = [];

    return {
        addCart(product) {
            if (!product) return;
            const indexProductSku = this.findIndexBySku(product.sku);
            if (indexProductSku !== -1) {
                this.setQty(product.sku, product.qty, indexProductSku)
            } else {
                product.id = Date.now() * ~~(Math.random() * 10);
                cart.push(product);
            }
            console.log(cart);
        },
        findIndexBySku(sku) {
            return cart.map((product) => product.sku).indexOf(sku);
        },
        getCart() {
            return cart.map((product) => ({ ...product }));
        },
        setQty(sku, qty, index) {
            const indexProductSku = index ?? this.findIndexBySku(sku);
            if (indexProductSku !== -1) {
                cart[indexProductSku].qty = cart[indexProductSku].qty + qty;
            }
        },
        removeProductBy(sku) {
            //splice
        },
        getTotalQty() {
            //reduce
        },
        getTotal() {
            //reduce
        },
        getProductBySku(sku) {
            //find
        },
        removeAll() {
            //cart.length = 0
        }
        //getCheck?
    };
}

const myCart = cartp();
myCart.addCart({
    sku: 54874,
    name: 'Product 1',
    qty: 5,
    price: 15,
});

myCart.addCart({
    sku: 878,
    name: 'Product 2',
    qty: 2,
    price: 15,
});

myCart.addCart({
    sku: 87968,
    name: 'Product 3',
    qty: 4,
    price: 15,
});

myCart.addCart({
    sku: 87954,
    name: 'Product 4',
    qty: 9,
    price: 15,
});

myCart.setQty(87954, 2);

myCart.getCart()[0].price = 0;

console.log(myCart.getCart());
