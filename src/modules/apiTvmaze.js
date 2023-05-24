function fetchMovies() {
  return fetch('https://api.tvmaze.com/search/shows?q=star%20wars')
    .then((response) => response.json())
}

export default fetchMovies;
