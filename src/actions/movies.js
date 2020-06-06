import uuid from 'uuid';

// ADD_MOVIE
export const addMovie = (
  {
    name = '',
    rating = 0,
    description = ''
  } = {}
) => ({
  type: 'ADD_MOVIE',
  movie: {
    id: uuid(),
    name,
    rating,
    description
  }
});

// REMOVE_MOVIE
export const removeMovie = ({ id } = {}) => ({
  type: 'REMOVE_MOVIE',
  id
});
