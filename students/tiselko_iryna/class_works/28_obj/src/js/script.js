const obj = {
    userName: 'Viktor',
    age: 15,
    //skillList: [],
    skillList: {
        css: 50,
        dd: { dd: 33 }
    },
    '2sdfdfs sdfdfs': 'sdf',
    dd: 'dsfds',
};

obj.age = obj.age + 20;

//console.log(obj.age, obj['userName'], obj['2sdfdfs sdfdfs']);

const key = 'age';

//console.log(obj[key]);

obj.sss = 'erer';
obj.aaaa = 'eqwewq';

// for (let key in obj) {
//     console.log(key, obj[key]);
// }

// const objCopy = obj;
// objCopy.age = 120;

//const objCopy = Object.assign({}, obj, { age: 300 });
//objCopy.age = 120;

// const objCopy = {
//     ...obj,
//     skillList: {
//         ...obj.skillList
//     }
// };

const objCopy = JSON.parse(JSON.stringify(obj));

obj.age = 300;
objCopy.skillList.css = 60;
//console.log(obj, objCopy);


function copyObj(obj) {
    const newObj = {};

    for (let key in obj) {
        // if (typeof obj[key] === 'object') {
        //     newObj[key] = copyObj(obj[key]);
        // } else {
        //     newObj[key] = obj[key];
        // }

        if (obj.hasOwnProperty(key))
            newObj[key] = (typeof obj[key] === 'object') ? copyObj(obj[key]) : obj[key];
    }

    return newObj;
}
//console.log(objCopy.age);
const aa = copyObj(objCopy);

delete aa.age;

//console.log(aa.age);

const newUser = {
    user: "Viktor",
    age: 40,
    skillList: 'HTML, CSS',
    // getAge: function () {
    //     return this.age;
    // },
    // setAge: function (age) {
    //     if (
    //         (!age && age !== 0) || typeof age !== 'number' || age < 0
    //     ) return;

    //     this.age = age;
    // },
    // getAge() {
    //     return this.age;
    // },
    // setAge(age) {
    //     if (
    //         (!age && age !== 0) || typeof age !== 'number' || age < 0
    //     ) return;

    //     this.age = age;
    // },
    // getAge,
    // setAge
};


function getAge() {
    return this.age;
}

function setAge(age) {
    if (
        (!age && age !== 0) || typeof age !== 'number' || age < 0
    ) return;

    this.age = age;
}


//newUser.setAge(10);

setAge.apply(newUser, [10]);
setAge.call(newUser, 10);

console.log(newUser.age);


function createUser({ userName, age = 10 }) {
    function getAge() {
        return this.age;
    }

    function setAge(age) {
        if (
            (!age && age !== 0) || typeof age !== 'number' || age < 0
        ) return;

        this.age = age;
    }

    return {
        userName,
        age,
        getAge,
        setAge,
    }
}


const vasya = createUser({
    userName: 'Vasya',
});


const petya = createUser({
    userName: 'Patya',
    //age: 20,
});

//vasya.setAge(60);
//petya.setAge(10);

console.log(vasya, petya);

const userName = 'sdfdsf';

const { userName: userPetya, age = 50 } = petya;

console.log(userPetya, age)
