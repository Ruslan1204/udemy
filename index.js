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
