let numberOfFilms = "";

function start() {
  numberOfFilms = +prompt("How much moveis you watching", " ");

  if (numberOfFilms === "" || numberOfFilms === null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt("How much moveis you watching", " ");
  }
}
start();

const personalMovieDB = {
  count: numberOfFilms,
  moveis: {},
  actors: {},
  genres: [],
  privat: false,
};

function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    const a = prompt("One of the last movies I watched", "");
    const b = prompt("Please rate it", "");

    if (a !== null && b !== null && a !== "" && b !== "" && a.length < 50) {
      personalMovieDB.moveis[a] = b;
    } else {
      i--;
    }
  }
}
// rememberMyFilms();

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Вы классический зритель");
  } else if (personalMovieDB.count > 30) {
    console.log("Вы киноман");
  } else {
    console.log("Произошла ошибка");
  }
}
// detectPersonalLevel();

function showMyDB(hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  }
}
showMyDB(personalMovieDB.privat);

function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    personalMovieDB.genres[i - 1] = prompt(
      `Ваш любимый жанр под номером ${i}`,
      ""
    );
  }
}

writeYourGenres();
