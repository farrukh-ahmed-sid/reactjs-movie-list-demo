// Filters Reducer

const filtersReducerDefaultState = {
  text: '',
  sortBy: 'rating',
};

export default (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text
      };
    case 'SORT_BY_RATING':
      return {
        ...state,
        sortBy: 'rating'
      };
    case 'SORT_BY_NAME':
      return {
        ...state,
        sortBy: 'name'
      };
    default:
      return state;
  }
};
