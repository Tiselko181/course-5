const arr = [100, 32, 56456, 654, 1, 57, 489, 78, 6, 7]; // - масив зі значенням 10
const arr1 = Array(10);// - 10 пустих масивів

// console.log(arr[1]) - достукатися до 32

arr[1] = 10;

console.log(arr, arr1);
console.log(arr.length, arr[arr.length - 1]); // call to last item

arr.length = 10; // створити додатково ще ячейкі в масиви
// arr.length = 0; // стерти значення 0 - стерти всеб можно видалити с кінця чи повністю
console.log(arr);


// Створення массива з нуля по цифрі користувача
// const userNumb = +prompt('Enter any number');
// const userArray = []

//перебирати масиви:
// for (let i = 0; i < userNumb; i++) {
//     console.log(userArray[i] = i + 1);
// }

// for (const value of arr) {
//     console.log(value);
// }

// for (let key in arr) {
//     console.log(arr[key]);
// }

arr.push(55); // додає осатннє
arr.pop(); //видаляє осатннє
arr.shift(); // виділяє перше
arr.unshift(123); // додає в перше

// побачити методи масивыв - console.dir(Array);

// console.log(arr.push(55, 3, 8, 11), arr.length);
// console.log(arr.pop());

const range = [1, 6, 7, 56, 66, 1, 78, 87, 91, 1, 98, 1, 1];
// const rangeEv = [];
// const rangeOdd = [];

// for (const value of range) {
//     if (value % 2 === 0) {
//         rangeEv.push(value);
//     } else {
//         rangeOdd.push(value);
//     }
// }
// console.log(rangeEv);
// console.log(rangeOdd);

//копіі масивів:
// const copyArr = range.concat() //[...range];
const copyArr = range.slice();
copyArr[0] = 254;
console.log(copyArr, range);

console.log(range.includes(56)); //шукає значення в масиві

console.log(range.indexOf(56));


// функція яка повертає всі індекси в яких лежить певна цифра + працює зі строкою також
/**
 * 
 * @param {Array | String} data 
 * @param {Number | String} finData 
 * @returns {Array}
 */

function getIndexsOfArray(data = [], findData) {
    const findIndex = [];
    let index = data.indexOf(findData);
    console.log(index);
    while (index !== -1) {
        findIndex.push(index);
        index = data.indexOf(findData, index + 1)
    }

    return findIndex
}
console.log(getIndexsOfArray());


//multi-tools
// range.splice(0, 1, 344, 54);
// console.log(range.splice(0, 1, 344, 54));
// console.log(range);

function spliceIndexOfArray(data = [], indexArray = [], replaceArray = [], isMutation = false) {
    if (isMutation) data = [...data];
    const defaultReplace = 0;
    let i = 0;
    for (const value of indexArray) {
        data.splice(value, 1, replaceArray[i] ?? defaultReplace);
        i++;
    }
    console.log(replaceArray.slice(i), indexArray.at(-1), indexArray);
    if (isMutation) return data;
}
console.log(spliceIndexOfArray(range, getIndexsOfArray(range, 1), [55, 87, 9], true));
console.log(range);


const mhd = [6, 54, 654, 12, 51];
// const [first, second, , , , , , , fff = 454] = mhd;
const [first, second, ...other] = mhd;
console.log(first, second, other);
