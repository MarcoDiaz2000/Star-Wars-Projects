function fetchMovies() {
  return fetch('https://api.tvmaze.com/search/shows?q=star%20wars')
    .then((response) => response.json())
    .catch((error) => console.error('Error:', error));
}

export default fetchMovies;
