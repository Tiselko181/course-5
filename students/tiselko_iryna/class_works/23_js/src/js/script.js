//Незмінні примітивнi типи

//number
const num = (2, 2.5, -1, 0, -0, Infinity, -Infinity, NaN);
console.log(NaN === NaN);
console.log(2 + '2'); //конкотиницiя - це робить бiнарний оператор 
console.log(isNan(NaN));
console.log((0.1 * 10 + 0.2 * 10) / 10); //
console.log(Number.MAX_SAFE_INTEGER);
console.log(+(2.3456456465).toFixed(2)); //перетворення на строку, через + приводимо до цифри

//округлення до цiлого
console.log(Math.round(2.5)); // завжди вниз iде
console.log(Math.floor(2.5)); // завжди по математицi
console.log(Math.ceil(2.5)); // завжди вверх

//Bigint
//2n; додати можна тiльки цифри Bigint

//String
const string = ("dfh'vzxxc 2\" dv'fsgh", 'gsagg', `batkiki`);
console.log("dfh'vzxxc 2\" <br> \n dv");

let f = 'safadf';
f = f + 'a';
console.log(f.length, f.toLocaleUpperCase(),);
console.log(f.split('')); // перетворення на масив
console.log(f.split('').reverse().join(''));

// 
let typeUndefined; //=undefined

typeUndefined = 2;
typeUndefined = undefined; // так робити не добре

console.log(typeUndefined);

//
const typyNull = null; //потрiбно завжди присваювати

let typeBool = true; //1
typeBool = false; //0

//
const typeSymbol = Symbol('sfdfdfg'); //для роботи з об`эктом


//Об'єктні типи, що змінюються

const arr = [1, 0, 1, 1, 1, '', {}, [], function () { }, null, underfined]; //масив це список
arr[0] = [1];
// [[1, 0, 0], [1, 2, 0], [1, 0, 0]]
console.log(arr);

const obj = {
    username: 'Tanya',
    age: 20,
    b: 21,
    3: 5
}; //йде по абетному порядку, а цифри йдуть першим

obj.age = 30;
console.log(obj)


//приведення типiв

//Number, String, Bool

console.log(String(false), Number('2'), Boolean({}), [1, 2, 3].toString());
console.log((15).toString(2)); //вказую в який системs числення проводиться приведення
console.log(+'243');
console.log(+'243', parseInt('1.8'), parseFloat('1.5'), ~~(2.5)); //parseInt - цiле число, parseFloat - дробне

//!!!!!Приведення до Boolean значення
console.log(false, !!'', !!0, !!-0, !!undefined, !!null, !!NaN); //це завжди false
console.log(!!21322, !!Infinity);

console.log(2 == '2', 2 === '2', 2 < 5, 4 > 5, 3 <= 3, 3 >= 4); //1й == дорiвнюю, 2е === строго дорiвнює
//console.log([] === []);

console.log(+false, +true, +null, true + true, [] + []); // масив + масив  приводиться до строки, обэкт + обэкт = [obj obj] + [obj obj]


console.log(1 && 0); // це і - спотикаеться на лжи
console.log(1 || 0); // це абo

// const s = +prompt('age') || 10;
// const s = +prompt('age') ?? 10; 
console.log(s);

console.log(12 % 2); // залишки від ділення

