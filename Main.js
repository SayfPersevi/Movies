const movieCardTemplate = document.querySelector("[data-movie-template]")
const movieCardContainer = document.querySelector("[data-movie-card-container]")
const searchInput = document.querySelector("[data-search]")

let users = []

searchInput.addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase()
  let x = 0
  users.forEach(user => {
    const isVisable = user.title.toLowerCase().includes(value)
    user.element.classList.toggle("hide", !isVisable)
  })
})


  fetch("https://www.omdbapi.com/?apikey=a0a957d2&s=fast")
  .then(res => res.json())
  .then(movieData => {
    users = movieData.Search.map(data => {
      const movie = movieCardTemplate.content.cloneNode(true).children[0]
      const title = movie.querySelector("[data-title]")
      const poster = movie.getElementsByClassName("movie__poster")
      title.textContent = data.Title
      poster[0].src = data.Poster

        movieCardContainer.append(movie)
      
      return {title: data.Title, element: movie}
    })
  })  