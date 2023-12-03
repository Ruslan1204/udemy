// const numberOfFilms = +prompt("How much moveis you watching", " ");

// const personalMovieDB = {
//   count: numberOfFilms,
//   moveis: {},
//   actors: {},
//   genres: [],
//   privat: false,
// };

// const a = prompt("One of the last movies I watched", "");
// const b = prompt("Please rate it", "");
// const c = prompt("One of the last movies I watched", "");
// const d = prompt("Please rate it", "");

// personalMovieDB.moveis[a] = b;
// personalMovieDB.moveis[c] = d;

// console.log(personalMovieDB);

// for (let i = lengthArr - 1; i >= 0; i--)

// let result = "";
// const lines = 5;

// for (let i = 0; i <= lines; i++) {
//     for (let j = 0; j < lines - i; j++) {
//         result += " ";
//     }
//     for (let k = 0; k < 2 * i + 1; k++) {
//         result += "*";
//     }
//     result += "\n";
// }

// console.log(result);

// *
// ***
// *****
// *******
// *********
// ***********
// console.log(result);

// first: for (let i = 0; i < 3; i++) {
//   console.log(`First level ${i}`);
//   for (let j = 0; j < 3; j++) {
//     console.log(`Second level ${j}`);
//     for (let k = 0; k < 3; k++) {
//       if (k === 2) continue first;
//       console.log(`Third level ${k}`);
//     }
//   }
// }

// function fifthTask() {
//     const arrayOfNumbers = [];

//     // Пишем решение вот тут
//     for(let i = 5; i <= 10; i++){

//         arrayOfNumbers.push(i)
//     }

//     // Не трогаем
//     return arrayOfNumbers;
// }

// fifthTask()

// Разверните массив data наоборот при помощи цикла и запишите данные в массив result.
// Должно получиться: [ 'Homework', 20, 'Shopping', 10, 5 ]

// // Место для первой задачи
// function secondTask() {
//     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//     return data.map(elm => {
//         if(typeof(elm) === "number"){
//             return elm * 2;
//         }
//         if(typeof(elm) === "string"){
//             return elm + ' - done'
//         }
//     })

//     console.log()

// }
// secondTask()

// Место для первой задачи
// function firstTask() {
//     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//     const arr = [3, 5, 8, 16, 20, 23, 50];
//     const result = [...arr];

//     // Пишем решение вот тут

//     // Не трогаем
//     return result;
// }

// // Место для второй задачи
// function secondTask() {
//     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения

//     return data.map(elm => {
//         if(typeof(elm) === "number"){
//             return elm * 2;
//         }
//         if(typeof(elm) === "string"){
//             return elm + ' - done'
//         }
//     })

// }

// // Место для третьей задачи
// function thirdTask() {
//   // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//   const data = [5, 10, "Shopping", 20, "Homework"];
//   const result = [];

//   let lengthArr = data.length;

//   // Пишем решение вот тут
//   for (let i = lengthArr - 1; i >= 0; i--) {
//     result.push(data[i])

//   }
//     return result;
// }

// function getMathResult(num, times) {
//     if (typeof(times) !== 'number' || times <= 0) {
//         return num;
//     }

//     let str = '';

//     for (let i = 1; i <= times; i++) {
//         if (i === times) {
//             str += `${num * i}`;
//             // Тут без черточек в конце
//         } else {
//             str += `${num * i}---`;
//             // Это тоже самое, что и
//             // str = str + num * i + "---"
//         }
//     }

//     return str;
// }

// getMathResult(10, 5);

// function returnNeighboringNumbers(num) {
//   return [num - 1, num, num + 1];

// }
// console.log(returnNeighboringNumbers(5));

// function calculateVolumeAndArea(num) {
//   const v = num * num * num;
//   const s = 6 * num * num;

//   if (typeof num === "number") {
//     console.log(`Объем куба: ${v}, площадь всей поверхности: ${s}`);
//   } else {
//     console.log("При вычислении произошла ошибка");
//   }
// }

// calculateVolumeAndArea(a);

// function getCoupeNumber(num) {
//   let arr = [
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//     [9, 10, 11, 12],
//     [13, 14, 15, 16],
//     [17, 18, 19, 20],
//     [21, 22, 23, 24],
//     [25, 26, 27, 28],
//     [29, 30, 31, 32],
//     [33, 34, 35, 36],
//   ];
//   //   console.log(arr.length)

//   if (num === 0 || num > 36) {
//     return "Таких мест в вагоне не существует";
//   } else if (num < 0 || typeof num !== "number" || !Number.isInteger(num)) {
//     return "Ошибка. Проверьте правильность введенного номера места";
//   }
//   return Math.ceil(seatNumber / 4);

//   //   else if (typeof num === "number") {
//   //     arr.map((elm, index) => {
//   //       if (elm.includes(num)) {
//   //         console.log(index + 1);
//   //       }
//   //     });
//   //   }
// }

// getCoupeNumber("36");

// function getCoupeNumber(seatNumber) {
//   if (
//     typeof seatNumber !== "number" ||
//     seatNumber < 0 ||
//     !Number.isInteger(seatNumber)
//   ) {
//     return "Ошибка. Проверьте правильность введенного номера места";
//   }

//   if (seatNumber === 0 || seatNumber > 36) {
//     return "Таких мест в вагоне не существует";
//   }

//   return Math.ceil(seatNumber / 4);
//   // тут очень много вариантов решения, но выбрал один из элегантных :)
// }

// getCoupeNumber(33);

// function getTimeFromMinutes(minutes) {
//   if (
//     typeof minutes !== "number" ||
//     minutes < 0 ||
//     !Number.isInteger(minutes)
//   ) {
//     console.log("Ошибка, проверьте данные");
//     return "Ошибка, проверьте данные";
//   }

//   const hour = Math.floor(minutes / 60);
//   const minute = minutes % 60;

//   if (hour === 1) {
//     console.log(`Это ${hour} час и ${minute} минут`);
//     return `Это ${hour} час и ${minute} минут`;
//   } else if (hour > 4 || hour === 0) {
//     console.log(`Это ${hour} часов и ${minute} минут`);
//     return `Это ${hour} часов и ${minute} минут`;
//   }
//   console.log(`Это ${hour} часа и ${minute} минут`);
//   return `Это ${hour} часа и ${minute} минут`;
// }

// getTimeFromMinutes(50);

// function findMaxNumber(...numbers) {
//   const result = numbers.every((num) => typeof(num) === 'number');

//   if (!result || numbers.length < 4) {
//     console.log(0)
//   }
//    console.log(Math.max(...numbers))

// }

// // [12, 54, 18, 130, 44].every((elem) => elem >= 10); // true

// findMaxNumber(1, 5, 6.6, 11);

// function fib(num) {
//   if (typeof num !== "number" || !Number.isInteger(num)) {
//     return "";
//   }
//   let result = "";
//   let first = 0;
//   let second = 1;

//   for (let i = 0; i < num; i++) {
//     // console.log('i', i);
//     if (i + 1 === num) {
//       result += `${first}`;
//       // Без пробела в конце
//     } else {
//       result += `${first} `;
//     }

//     // console.log('result', result);

//     let third = first + second;
//     // console.log('third = first + second',third);

//     first = second;
//     // console.log('first = second', first = second);

//     second = third;

//     // console.log(' second = third',  second = third);

//   }

//   console.log(result);
//     return result;
// }

// fib(5);

// const personalPlanPeter = {
//     name: "Peter",
//     age: "29",
//     skills: {
//         languages: ['ru', 'eng'],
//         programmingLangs: {
//             js: '20%',
//             php: '10%'
//         },
//         exp: '1 month'
//     },
//     showAgeAndLangs: function(plan) {
//         const {age} = plan;
//         const {languages} = plan.skills;
//         let str = `Мне ${age} и я владею языками: `;

//         languages.forEach(function(lang) {
//             str += `${lang.toUpperCase()} `;
//         });

//         return str;
//     }
// };

// personalPlanPeter.showAgeAndLangs(personalPlanPeter);

// function showExperience(plan) {
//     const {exp} = plan.skills;
//     return exp;
// }

// showExperience(personalPlanPeter);

// function showProgrammingLangs(plan) {
//     let str = '';
//     const {programmingLangs} = plan.skills;
//     for (let key in programmingLangs) {
//         str += `Язык ${key} изучен на ${programmingLangs[key]}\n`
//     }

//     return str;
// }

// showProgrammingLangs(personalPlanPeter);

// const family = ["Peter", "Ann", "Alex", "Linda"];

// function showFamily(arr) {
//   const str = arr.join(" ");

//   if (arr.length === 0) {
//     console.log("Семья пуста");
//   } else {
//     console.log(`Семья состоит из: ${str}`);
//   }
// }

// showFamily(family);

// const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

// function standardizeStrings(arr) {

//     arr.forEach(element => {
//         console.log(element.toLowerCase())
//     });
// }

// standardizeStrings(favoriteCities)

// const someString = "This is some strange string";

// function reverse(str) {
//   if (typeof str !== "string") {
//     return "Ошибка!";
//   } else {
//     const arr = str.split(" ");

//     const reverse = arr.map((word) => {
//       return word.split("").reverse().join("");
//     });

//     return reverse.reverse().join(" ");
//   }
// }

// reverse(someString);

// const baseCurrencies = ["USD", "EUR"];
// const additionalCurrencies = ["UAH", "RUB", "CNY"];

// function availableCurr(arr, missingCurr) {
//   let str = "";

//   arr.length === 0
//     ? (str = "Нет доступных валют")
//     : (str = "Доступные валюты:\n");

//   arr.forEach(function (curr, i) {
//     if (curr !== missingCurr) {
//       str += `${curr}\n`;
//     }
//   });
//   return str;
// }

// availableCurr([...baseCurrencies, ...additionalCurrencies], "CNY");

// - вычисление общей площади всех магазинов, которая вычисляется как длина магазина, умноженная на его ширину;
// - вычисление общего объема торгового центра, так как цена отопления указана в кубических метрах;
// - определение того, хватает ли бюджета на оплату такого объема;
// - все числа идут без единиц измерения для упрощения, просто цифры и все;
// - функция должна продолжать работать, даже если изменяется количество магазинов, высота, бюджет или подставляется вообще другой объект.

// const shoppingMallData = {
//   shops: [
//     {
//       width: 10,
//       length: 5,
//     },
//     {
//       width: 15,
//       length: 7,
//     },
//     {
//       width: 20,
//       length: 5,
//     },
//     {
//       width: 8,
//       length: 10,
//     },
//   ],
//   height: 5,
//   moneyPer1m3: 30,
//   budget: 50000,
// };

// function isBudgetEnough(data) {
//   const { shops } = data;
//   const per1m3 = [];

//   shops.forEach((shop) => {
//     per1m3.push(shop.width * shop.length * data.height);
//   });

//   const initialValue = 0;
//   const sumWithInitial = per1m3.reduce(
//     (accumulator, currentValue) => accumulator + currentValue,
//     initialValue
//   );

//   const moneyAllPer1m3 = sumWithInitial * data.moneyPer1m3;
//   if (moneyAllPer1m3 <= data.budget) {
//     console.log("Бюджета достаточно");
//   } else {
//     console.log("Бюджета недостаточно");
//   }
// }

// isBudgetEnough(shoppingMallData);

// const students = [
//   "Peter",
//   "Andrew",
//   "Ann",
//   "Mark",
//   "Josh",
//   "Sandra",
//   "Cris",
//   "Bernard",

//   "Sam",
// ];

// function sortStudentsByGroups(arr) {
//   let newArr = [...arr];
//   const sortArr = newArr.sort();
//   let newGroups = [];
//   newArr.forEach((name, indx) => {
//     if (indx <= 2) {
//       const deleteName = sortArr.splice(0, 3);
//       newGroups.push(deleteName);
//     }
//   });

//   newGroups.splice(
//     3,
//     0,
//     `Оставшиеся студенты: ${sortArr.length === 0 ? "-" : sortArr.join(", ")}`
//   );

//   console.log(newGroups);
// }

// sortStudentsByGroups(students);

// let c = 4;
// function addX(x) {

//   return function (n) {
//     return n + x;
//   };
// }
// const addThree = addX(3);
// let d = addThree(c);
// console.log("example partial application", d);

// let value = "Сюрприз!";

// function f() {
//   let value = "ближайшее значение";

//   function g() {
//     debugger; // в консоли: напишите alert(value); Сюрприз!
//   }

//   return g;
// }

// let g = f();
// g();

// console.log(alert(value))

// function sum(a) {
//   return function (b) {
//     return a + b;
//   };
// }

// console.log(sum(4)(2));
// function inBetween(a, b) {
//   console.log("a", a);
//   console.log("b", b);

//   return function (x) {
//     console.log("x", x);
//     return x >= a && x <= b;
//   };
// }

// let arr = [1, 2, 3, 4, 5, 6, 7];

// arr.filter(inBetween(3, 6));

// alert(arr.filter(inBetween(3, 6))); // 3,4,5,6

// alert(arr.filter(inArray([1, 2, 10]))); // 1,2

// function inArray(arr) {
//   console.log("arr", arr);
//   return function (x) {
//     console.log("x", x);
//     return arr.includes(x);
//   };
// }

// let arr = [1, 2, 3, 4, 5, 6, 7];
// arr.filter(inArray([1, 2, 10]));
// let users = [
//   { name: "John", age: 20, surname: "Johnson" },
//   { name: "Pete", age: 18, surname: "Peterson" },
//   { name: "Ann", age: 19, surname: "Hathaway" },
// ];

// function byField(fieldName){
//     return (a, b) => a[fieldName] > b[fieldName] ? 1 : -1;
//   }
// console.log(users.sort(byField("name")))
// // console.log(users.sort(byField("name")));
// console.log(users.sort(byField("age")));
// function makeArmy() {
//   let shooters = [];
//   let i = 0;
//   while (i < 10) {
//     let b = i;
//     console.log(b); // должна выводить порядковый номер
//     let shooter = function () {
//       // функция shooter
//       console.log("b", b); // должна выводить порядковый номер
//     };
//     shooters.push(shooter); // и добавлять стрелка в массив
//     i++;
//   }
//   // ...а в конце вернуть массив из всех стрелков
//   return shooters;
// }

// let army = makeArmy();

// // все стрелки выводят 10 вместо их порядковых номеров (0, 1, 2, 3...)
// army[0](); // 10 от стрелка с порядковым номером 0
// army[1](); // 10 от стрелка с порядковым номером 1
// army[2](); // 10 ...и т.д.

// const name = 'Ruslan',surname = 'Motsnyi';

// console.log(0 || (10 && 1 > 0) || NaN || false || null);

// let x = 5; alert( x++ ); // 5

// console.log([ ] + false - null + true); //NaN

// let y = 1; let x = y = 2; alert(x); // 2

// console.log([] + 1 + 2); //12

// alert("1"[0]); // 1

// console.log(2 && 1 && null && 0 && undefined); //null

// console.log(!!( a &&b ) и (a && b)); //????

// console.log(null || (2 && 3) || 4); //3

// Правда ли что a == b ?
// a = [1, 2, 3]; b = [1, 2, 3];
// console.log(a === b); //false

// alert(+"Infinity"); //Infinity

// console.log("Ёжик" > "яблоко"); //false

// console.log(0 || "" || 2 || undefined || true || falsе); //2

// const restorantData = {
//   menu: [
//     {
//       name: "Salad Caesar",
//       price: "14$",
//     },
//     {
//       name: "Pizza Diavola",
//       price: "9$",
//     },
//     {
//       name: "Beefsteak",
//       price: "17$",
//     },
//     {
//       name: "Napoleon",
//       price: "7$",
//     },
//   ],
//   waitors: [
//     { name: "Alice", age: 22 },
//     { name: "John", age: 24 },
//   ],
//   averageLunchPrice: "20$",
//   openNow: true,
// };

// function isOpen(prop) {
//   let answer = "";
//   !prop ? (answer = "Закрыто") : (answer = "Открыто");

//   return answer;
// }

// console.log(isOpen(restorantData.openNow));

// function isAverageLunchPriceTrue(fDish, sDish, average) {
//   console.log(average);
//   console.log(fDish, sDish);
//   console.log(+fDish.price.slice(0, -1) + Number.parseInt(sDish.price));

//   if (
//     +fDish.price.slice(0, -1) + Number.parseInt(sDish.price) <
//     Number.parseInt(average)
//   ) {
//     return "Цена ниже средней";
//   } else {
//     return "Цена выше средней";
//   }
// }

// console.log(
//   isAverageLunchPriceTrue(
//     restorantData.menu[0],
//     restorantData.menu[1],
//     restorantData.averageLunchPrice
//   )
// );

// function transferWaitors(data) {
//   const copy = Object.assign({}, data);

//   copy.waitors = [{ name: "Mike", age: 32 }];

//   console.log(copy);
//   return copy;
// }
// // console.log("restorantData", restorantData);

// transferWaitors(restorantData);

// function pow(x, n) {
//   if (n === 1) {
//     return x;
//   } else {
//     console.log(pow(x, n - 1))
//     return x * pow(x, n - 1);
//   }
// }
// pow(2, 4)
// console.log(pow(2, 1));
// console.log(pow(2, 2));
// console.log(pow(2, 3));
// console.log(pow(2, 4));

// let students = {
//   js: [
//     {
//       name: "John",
//       progress: 100,
//     },
//     {
//       name: "Ivan",
//       progress: 60,
//     },
//   ],
//   html: {
//     basic: [
//       {
//         name: "Peter",
//         progress: 20,
//       },
//       {
//         name: "Ann",
//         progress: 18,
//       },
//     ],
//     pro: [
//       {
//         name: "Sam",
//         progress: 10,
//       },
//     ],
//   },
// };

// function getTotalProgressByIteration(data) {
//   let total = 0;
//   let students = 0;

//   for (let course of Object.values(data)) {
//     if (Array.isArray(course)) {
//       students += course.length;

//       for (let i = 0; i < course.length; i++) {
//         total += course[i].progress;
//       }
//     } else {
//       for (let subCourse of Object.values(course)) {
//         students += subCourse.length;

//         for (let i = 0; i < subCourse.length; i++) {
//           total += subCourse[i].progress;
//         }
//       }
//     }
//   }
//   return total / students;
// }

// console.log(getTotalProgressByIteration(students));

// function getTotalProgressByRecursion(data) {
//   if (Array.isArray(data)) {
//     let total = 0;

//     for (let i = 0; i < data.length; i++) {
//       total += data[i].progress;
//     }

//     return [total, data.length];
//   } else {
//     let total = [0, 0];
//     for (let subData of Object.values(data)) {
//       const subDataArr = getTotalProgressByRecursion(subData);
//       total[0] += subDataArr[0];
//       total[1] += subDataArr[1];
//     }
//     return total;
//     s;
//   }
// }

// const result = getTotalProgressByIteration(students);
// console.log(result[0] / result[1]);

// n! = n * (n - 1) * (n - 2) * ...*1

function factorial(n) {
  if (typeof n !== "number" || !Number.isInteger(n)) {
    return "Не вірне значення";
  }
  if (n >= 1) {
    return n * factorial(n - 1);
  } else {
    return 1;
  }
}

console.log(factorial(4));
