const fetchMovies = async () => {
  const response = await fetch('https://api.tvmaze.com/search/shows?q=star%20wars');
  return response.json();
};

export default fetchMovies;
