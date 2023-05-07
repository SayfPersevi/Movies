const moviesDataEl = document.querySelector(".movie__list");
const searchInput = document.querySelector("[data-search]");


async function inputSomethin() {

const movies = await fetch("https://www.omdbapi.com/?apikey=a0a957d2&s=fast");
const moviesData = await movies.json();

    searchInput.addEventListener("input", (e) => {
        const value = e.target.value;
        moviesData.Search.forEach(movie => {
            const isVisable = movie.Title.includes(value)
            if (!isVisable) {
                document.body.classList += " .hide"
            }
            console.log(isVisable)
        });
    });
};

let users = [];

async function main() {
  const movies = await fetch("https://www.omdbapi.com/?apikey=a0a957d2&s=fast");
  const moviesData = await movies.json();
  moviesDataEl.innerHTML = moviesData.Search.map((movie) =>
    userHTML(movie)
  ).join("");
  return moviesData.Search;
}

main();

function userHTML(movie) {
  return `<div class="movie__list--item">
                                <img src="${movie.Poster}" alt="Movie Poster" class="movie__poster">
                                <h3 class="movie__title">
                                    ${movie.Title}
                                </h3>
                            </div>
    `;
}
