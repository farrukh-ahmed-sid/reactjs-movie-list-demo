import axios from 'axios';
import { addMovie } from '../actions/movies';

export const selectMovies = (movies, { text, sortBy}) => {
  return movies.filter((movie) => {
    const textMatch = movie.name.toLowerCase().includes(text.toLowerCase());
    return textMatch;
  }).sort((a, b) => {
    if (sortBy === 'rating') {
      return a.rating < b.rating ? 1 : -1;
    } else if (sortBy === 'name') {
      return a.name.toUpperCase() < b.name.toUpperCase() ? -1 : 1;
    }
  });
};

const apikey = "769e7b10";

export const selectDefaultMovies = (store) => {
  axios.get(`http://omdbapi.com/?i=tt3896198&apikey=${apikey}`)
      .then(movie => {
        const state = {
          name: movie.data.Title,
          rating: (movie.data.Ratings[1].Value).substring(0,1),
          description: movie.data.Plot
        }
        console.log(state);
        store.dispatch(addMovie(state));
        return state;
      })
}