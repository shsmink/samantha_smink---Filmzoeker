// Alle films tonen in de console
console.log(movies);

// Alle films zichtbaar maken in de DOM
const movieDatabase = movies["movies"];

const addMoviesToDom = (movies) => {
    const movieContainer = document.getElementById("movie-container");

    const listItems = movies.map((movie) => {
        let listItem = document.createElement("li");

        let moviePoster = document.createElement("img");
        moviePoster.src = movie.Poster;

        let link = document.createElement("a");
        link.href = "https://www.imdb.com/title/" + movie.imdbID;
        link.target = "_blank";

        listItem.appendChild(link);
        link.appendChild(moviePoster);

        return listItem;
    });

    listItems.forEach((listItem) => {
        movieContainer.appendChild(listItem);
    });
}

//Filters

let filterMovies = function (wordInMovieTitle) {

    const filteredMovies = movies.filter(movie => movie.Title.toLowerCase().includes(wordInMovieTitle));
    removeAllMovies();
    addMoviesToDom(filteredMovies);
}

let filterLatestMovies = function () {

    const filteredMovies = movies.filter(movie => movie.Year >= 2014);
    removeAllMovies();
    addMoviesToDom(filteredMovies);
}

let removeAllMovies = function () {

    while (listItem.lastElementChild) {
        listItem.removeChild(listItem.lastElementChild);
    }
}

// let searchForMovies = () => filterMovies(searchbar.value.toLowerCase());

let handleOnChangeEvent = function (event) {

    let eventToHandle = event.target.value.toLowerCase();

    switch (eventToHandle) {
        case 'latest-movies':
            filterLatestMovies();
            break;

        case 'all-movies':
            removeAllMovies();
            addMoviesToDom(movies);
            break;

        case 'avengers':
        case 'x-men':
        case 'princess':
        case 'batman':
            filterMovies(eventToHandle);
            break;

    }
}

let listItem = document.getElementById("movie-container");
let radiobuttons = document.getElementsByName("movie-filter");

Array.from(radiobuttons).forEach(radiobutton => radiobutton.addEventListener('change', handleOnChangeEvent));

addMoviesToDom(movies);