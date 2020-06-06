// SET_TEXT_FILTER
export const textFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
});

// SORT_BY_RATING
export const sortByRating = () => ({
  type: 'SORT_BY_RATING'
});

// SORT_BY_NAME
export const sortByName = () => ({
  type: 'SORT_BY_NAME'
});
